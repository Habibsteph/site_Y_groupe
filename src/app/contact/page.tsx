import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden">
          <div className="absolute right-[10%] top-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute left-[10%] bottom-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
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

            <form className="glow-hover grid gap-4 rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-md">
              <input
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                placeholder="Nom"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                placeholder="Entreprise"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                placeholder="Email"
              />
              <textarea
                className="min-h-[160px] rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                placeholder="Parlez-nous de votre projet"
              />
              <button
                type="submit"
                className="glow-hover rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-black"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}