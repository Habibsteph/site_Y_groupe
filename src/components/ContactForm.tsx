"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");

    const form = e.target;

    const data = {
      name: form.name.value,
      company: form.company.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      setSuccessMessage("Message envoyé avec succès !");
      form.reset();
    } catch (error: any) {
      alert(error.message || "Erreur lors de l’envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glow-hover grid gap-4 rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-md"
    >
      <input
        name="name"
        required
        placeholder="Nom"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
      />

      <input
        name="company"
        placeholder="Entreprise"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
      />

      <input
        name="email"
        required
        type="email"
        placeholder="Email"
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
      />

      <textarea
        name="message"
        required
        placeholder="Parlez-nous de votre projet"
        className="min-h-[140px] rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
      />

      <button
        type="submit"
        disabled={loading || !!successMessage}
        className="rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.01]"
      >
        {loading ? "Envoi..." : "Envoyer la demande"}
      </button>

      {successMessage && (
        <p className="text-sm text-green-400">{successMessage}</p>
      )}
    </form>
  );
}