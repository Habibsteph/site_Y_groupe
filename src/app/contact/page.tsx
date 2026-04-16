"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Une erreur est survenue.");
        return;
      }

      setSuccessMessage("Votre message a bien été envoyé.");
      setForm({
        name: "",
        company: "",
        email: "",
        message: "",
      });
    } catch {
      setErrorMessage("Impossible d’envoyer votre message pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden">
          <div className="absolute right-[10%] top-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-20 left-[10%] h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                  Contact
                </p>
                <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
                  Parlons de votre prochain projet
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-9 text-white/70">
                  Vous avez une marque, un événement ou une idée à développer ?
                  Échangeons sur la meilleure façon de lui donner de l’impact.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <form
                onSubmit={handleSubmit}
                className="glow-hover grid gap-4 rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-md"
              >
                <input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                  placeholder="Nom"
                  required
                />

                <input
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                  placeholder="Entreprise"
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                  placeholder="Email"
                  required
                />

                <textarea
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="min-h-[160px] rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                  placeholder="Parlez-nous de votre projet"
                  required
                />

                {successMessage ? (
                  <p className="text-sm text-green-400">{successMessage}</p>
                ) : null}

                {errorMessage ? (
                  <p className="text-sm text-red-400">{errorMessage}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading || !!successMessage}
                  className="glow-hover rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-black transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                {loading ? "Envoi en cours..." : "Envoyer la demande"}
              </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}