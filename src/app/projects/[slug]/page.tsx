import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,158,11,0.16),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.08),transparent_30%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:text-amber-300"
            >
              ← Retour aux projets
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                  Étude de cas
                </p>

                <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-2xl text-xl leading-9 text-white/75">
                  {project.heroTitle}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                    <div className="text-sm text-white/45">Client</div>
                    <div className="mt-2 text-lg font-semibold">
                      {project.client}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                    <div className="text-sm text-white/45">Année</div>
                    <div className="mt-2 text-lg font-semibold">
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-amber-950/80 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/25 hover:shadow-[0_20px_60px_rgba(245,158,11,0.08)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(245,158,11,0.20),transparent_24%),radial-gradient(circle_at_18%_90%,rgba(255,255,255,0.08),transparent_22%)] opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-6 left-6 rounded-full border border-amber-400/30 bg-black/55 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-white/[0.04] hover:shadow-[0_16px_50px_rgba(245,158,11,0.05)]"
              >
                <div className="text-4xl font-black text-amber-400 transition-transform duration-300 group-hover:scale-[1.02]">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-zinc-950/50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Galerie
              </p>
              <h2 className="mt-4 text-4xl font-black">
                Quelques visuels du projet
              </h2>
            </div>

            <ProjectGallery images={project.gallery} title={project.title} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-zinc-950 to-amber-950/20 p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                  Prochain projet
                </p>
                <h2 className="mt-4 text-4xl font-black">
                  Vous avez un projet à faire émerger ?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  Construisons une identité, une campagne ou une expérience
                  digitale qui capte réellement l’attention.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-amber-300"
              >
                Démarrer un projet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}