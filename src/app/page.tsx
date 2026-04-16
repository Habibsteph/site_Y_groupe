import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ContactForm from "@/components/ContactForm";

type HomeProject = {
  _id: string;
  slug: string;
  title: string;
  category?: string | null;
  summary?: string | null;
  coverImage?: any;
};

type TrustedLogo = {
  name: string;
  src: string;
  className?: string;
};

export default async function HomePage() {
  const services = [
    {
      title: "Graphisme",
      icon: "/icons/graphisme.png",
      description:
        "Identités visuelles, direction artistique et systèmes de marque conçus pour durer.",
    },
    {
      title: "Production",
      icon: "/icons/production.png",
      description:
        "Photo, vidéo, motion design et contenus visuels pensés pour amplifier votre impact.",
    },
    {
      title: "Digital",
      icon: "/icons/digital.png",
      description:
        "Sites web, expériences interactives et solutions digitales orientées performance.",
    },
    {
      title: "Stratégie",
      icon: "/icons/strategie.png",
      description:
        "Positionnement, storytelling et accompagnement créatif pour faire grandir les marques.",
    },
  ];

  const trustedLogos: TrustedLogo[] = [
    {
      name: "Infinix",
      src: "/logos/infinix.png",
      className: "max-h-9 sm:max-h-10 max-w-[150px] sm:max-w-[170px]",
    },
    {
      name: "Radisson Blu",
      src: "/logos/radisson.png",
      className: "max-h-9 sm:max-h-10 max-w-[145px] sm:max-w-[165px]",
    },
    {
      name: "Heineken",
      src: "/logos/heineken.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "SAF",
      src: "/logos/saf.png",
      className: "max-h-24 sm:max-h-28 max-w-[110px] sm:max-w-[120px]",
    },
    {
      name: "BK Production",
      src: "/logos/bk-production.png",
      className: "max-h-24 sm:max-h-28 max-w-[110px] sm:max-w-[120px]",
    },
    {
      name: "Muterp-CI",
      src: "/logos/muterp-ci.png",
      className: "max-h-12 sm:max-h-14 max-w-[150px] sm:max-w-[170px]",
    },
    {
      name: "Widgunz",
      src: "/logos/widgunz.png",
      className: "max-h-9 sm:max-h-10 max-w-[150px] sm:max-w-[170px]",
    },
    {
      name: "<Dydy-yeman>",
      src: "/logos/didi-yeman.png",
      className: "max-h-12 sm:max-h-14 max-w-[150px] sm:max-w-[170px]",
    },
    {
      name: "Tripa",
      src: "/logos/tripa.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "Young-ambitious",
      src: "/logos/young-ambitious.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "gaïa",
      src: "/logos/gaïa.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "lias-princess",
      src: "/logos/lia's-princess.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "Felah",
      src: "/logos/felah.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "Full boss",
      src: "/logos/full-boss.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "KIJ",
      src: "/logos/kij.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
    {
      name: "La-nuit-blanche",
      src: "/logos/la-nuit-blanche.png",
      className: "max-h-12 sm:max-h-14 max-w-[135px] sm:max-w-[150px]",
    },
  ];

  let homepageProjects: HomeProject[] = [];

try {
  const sanityProjects = await client.fetch<HomeProject[]>(PROJECTS_QUERY);
  homepageProjects = (sanityProjects ?? []).slice(0, 6);
} catch (error) {
  console.error("Sanity fetch error:", error);
  homepageProjects = [];
}

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden border-b border-white/10">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/y-groupe-hero.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>

          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(245,158,11,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.10),transparent_30%)]" />

          <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                  Studio de création
                </p>

                <h1 className="text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
                  Nous créons des marques et des expériences conçues{" "}
                  <span className="text-amber-400">pour captiver</span>.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  Y Groupe accompagne les marques, événements et institutions
                  avec une approche mêlant stratégie, création et exécution
                  digitale.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="glow-hover rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02]"
                  >
                    Voir nos réalisations
                  </a>

                  <a
                    href="#contact"
                    className="glow-hover rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                  >
                    Démarrer un projet
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VISION */}
        <section className="border-b border-white/10 bg-zinc-950/70">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
            <Reveal>
              <>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Bien plus qu’un simple studio de création
                </h2>
                <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-white/70">
                  Nous sommes un studio créatif émergent situé à Abidjan. Nous
                  accompagnons les marques, évènements et particuliers à faire de
                  leur image, une identité remarquablement percutante. Chaque
                  jour nous pensons : rigueur, minutie et avant tout originalité,
                  afin de proposer une qualité de service irréprochable.
                </p>
              </>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="mx-auto max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Nous sommes <span className="text-amber-400">experts</span> en :
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group glow-hover rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-2xl font-bold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TRUSTED BY — version plus “Apple” */}
        <section className="relative overflow-hidden border-y border-white/10 bg-zinc-950/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_55%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  C&apos;est pourquoi ils nous ont fait confiance
                </h2>
              </div>
            </Reveal>

            <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 items-center justify-items-center gap-x-12 gap-y-14 md:grid-cols-4 lg:gap-x-24 lg:gap-y-20">
              {trustedLogos.map((logo, index) => (
                <Reveal key={logo.name} delay={index * 0.05}>
                  <div className="group flex min-h-[82px] w-full items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`w-auto object-contain opacity-75 grayscale transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:opacity-100 group-hover:grayscale-0 ${logo.className || "max-h-10 max-w-[150px]"}`}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="projects" className="bg-zinc-950/60 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-14">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                  Portfolio
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Des projets pensés pour laisser une trace
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {homepageProjects.length > 0 ? (
                <div className="marquee-wrapper">
                  <div className="marquee-track flex gap-6">
                    {[...homepageProjects, ...homepageProjects].map(
                      (project, index) => (
                        <Link
                          key={`${project._id}-${index}`}
                          href={`/projects/${project.slug}`}
                          className="glow-hover group w-[360px] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-black"
                        >
                          <article>
                            <div className="relative aspect-[4/3] overflow-hidden">
                              {project.coverImage ? (
                                <Image
                                  src={urlFor(project.coverImage)
                                    .width(1200)
                                    .height(900)
                                    .fit("crop")
                                    .url()}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <div className="absolute inset-0 bg-white/5" />
                              )}

                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </div>

                            <div className="p-7">
                              {project.category && (
                                <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
                                  {project.category}
                                </p>
                              )}
                              <h3 className="mt-4 text-2xl font-black">
                                {project.title}
                              </h3>
                              {project.summary && (
                                <p className="mt-4 text-sm leading-7 text-white/65">
                                  {project.summary}
                                </p>
                              )}
                            </div>
                          </article>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-14 text-center">
                  <p className="text-lg font-semibold text-white">
                    Aucun projet mis en avant pour le moment.
                  </p>
                  <p className="mt-3 text-white/55">
                    Ajoute quelques projets dans Sanity pour les faire apparaître
                    ici.
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
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
                  une idée à concrétiser ? Construisons quelque chose de
                  remarquable.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}