import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Graphisme",
    slug: "graphisme",
    icon: "/icons/graphisme.png",
    description:
      "Identités visuelles, direction artistique et systèmes de marque conçus pour durer.",
  },
  {
    title: "Production",
    slug: "production",
    icon: "/icons/production.png",
    description:
      "Photo, vidéo, motion design et contenus visuels pensés pour amplifier votre impact.",
  },
  {
    title: "Digital",
    slug: "digital",
    icon: "/icons/digital.png",
    description:
      "Sites web, expériences interactives et solutions digitales orientées performance.",
  },
  {
    title: "Stratégie & conseil",
    slug: "strategie",
    icon: "/icons/strategie.png",
    description:
      "Positionnement, storytelling et accompagnement créatif pour faire grandir les marques.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Services
              </p>

              <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
                Nos expertises au service de votre image.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
                Nous construisons des solutions créatives complètes, de la réflexion
                stratégique à l’exécution finale.
              </p>
            </>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <Link
                  href={`/projects?service=${service.slug}`}
                  className="group block cursor-pointer"
                >
                  <article className="glow-hover rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(245,158,11,0.08)]">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                      {service.icon ? (
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={32}
                          height={32}
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : null}
                    </div>

                    <h2 className="text-3xl font-black transition-colors duration-300 group-hover:text-amber-300">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-white/70">
                      {service.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-all duration-300 group-hover:gap-3 group-hover:text-amber-200">
                      <span>Voir les projets liés</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/10"
        >
          <div className="absolute inset-0 bg-black" />
          <div className="absolute right-[8%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-10 left-[12%] h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                  Contact
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Parlons de votre prochain projet
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  Vous avez une marque à construire, un événement à promouvoir ou
                  une idée à concrétiser ? Construisons quelque chose de remarquable.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
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
                  className="min-h-[140px] rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35 focus:border-amber-400"
                  placeholder="Parlez-nous de votre projet"
                />

                <button
                  type="submit"
                  className="glow-hover rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.01]"
                >
                  Envoyer la demande
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