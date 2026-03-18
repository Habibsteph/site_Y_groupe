"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects, type ProjectPole } from "@/data/projects";

const filters: Array<"Tous" | ProjectPole> = [
  "Tous",
  "Graphisme",
  "Production",
  "Digital",
  "Stratégie & Conseil",
];

const serviceToPoleMap: Record<string, ProjectPole> = {
  graphisme: "Graphisme",
  production: "Production",
  digital: "Digital",
  strategie: "Stratégie & Conseil",
  "strategie-conseil": "Stratégie & Conseil",
};

const poleToServiceParamMap: Record<ProjectPole, string> = {
  Graphisme: "graphisme",
  Production: "production",
  Digital: "digital",
  "Stratégie & Conseil": "strategie",
};

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const serviceParam = searchParams.get("service");
  const initialFilter =
    serviceParam && serviceToPoleMap[serviceParam]
      ? serviceToPoleMap[serviceParam]
      : "Tous";

  const [activeFilter, setActiveFilter] = useState<"Tous" | ProjectPole>(initialFilter);

  useEffect(() => {
    const service = searchParams.get("service");

    if (service && serviceToPoleMap[service]) {
      setActiveFilter(serviceToPoleMap[service]);
    } else {
      setActiveFilter("Tous");
    }
  }, [searchParams]);

  const handleFilterChange = (filter: "Tous" | ProjectPole) => {
    setActiveFilter(filter);

    if (filter === "Tous") {
      router.push("/projects");
      return;
    }

    router.push(`/projects?service=${poleToServiceParamMap[filter]}`);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return projects;
    return projects.filter((project) => project.poles.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Projets
              </p>

              <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">
                Des réalisations conçues pour laisser une trace.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
                Découvrez une sélection de projets menés par Y Groupe à travers ses
                quatre pôles : graphisme, production, digital, stratégie & conseil.
              </p>
            </>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 -mx-6 overflow-x-auto px-6">
              <div className="flex min-w-max gap-3">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => handleFilterChange(filter)}
                      className={`rounded-full border px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "border-amber-400 bg-amber-400 text-black"
                          : "border-white/10 bg-white/[0.03] text-white/75 hover:border-amber-400/40 hover:text-white"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="text-sm text-white/45">
                {filteredProjects.length} projet
                {filteredProjects.length > 1 ? "s" : ""} affiché
                {filteredProjects.length > 1 ? "s" : ""}
              </p>

              <p className="hidden text-sm text-white/45 md:block">
                Filtre actif :{" "}
                <span className="font-semibold text-amber-300">{activeFilter}</span>
              </p>
            </div>
          </Reveal>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.08}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <article
                      className="
                        overflow-hidden rounded-[2rem] border border-white/10 bg-black
                        transition-all duration-500 ease-out
                        hover:-translate-y-2 hover:border-amber-400/30 hover:shadow-[0_20px_60px_rgba(245,158,11,0.08)]
                      "
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="
                            object-cover
                            transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                            group-hover:scale-[1.06]
                          "
                        />

                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t from-black/70 via-black/20 to-transparent
                            transition-opacity duration-500
                            group-hover:opacity-90
                          "
                        />

                        <div
                          className="
                            absolute inset-0
                            bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_30%)]
                            opacity-70 transition-opacity duration-500
                            group-hover:opacity-100
                          "
                        />

                        <div
                          className="
                            pointer-events-none absolute inset-0 rounded-t-[2rem]
                            ring-1 ring-inset ring-white/10
                            transition-all duration-500
                            group-hover:ring-amber-400/20
                          "
                        />

                        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                          {project.poles.map((pole) => (
                            <span
                              key={pole}
                              className="rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[11px] font-semibold text-white/85 backdrop-blur-sm"
                            >
                              {pole}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-7">
                        <p
                          className="
                            text-xs uppercase tracking-[0.3em] text-amber-400/80
                            transition-colors duration-300 group-hover:text-amber-300
                          "
                        >
                          {project.category}
                        </p>

                        <h2 className="mt-4 text-2xl font-black transition-colors duration-300 group-hover:text-white">
                          {project.title}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/65 transition-colors duration-300 group-hover:text-white/75">
                          {project.summary}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.services.slice(0, 3).map((service) => (
                            <span
                              key={service}
                              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        <div
                          className="
                            mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300
                            transition-all duration-300 group-hover:gap-3 group-hover:text-amber-200
                          "
                        >
                          <span>Voir l’étude de cas</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-14 text-center">
                <p className="text-lg font-semibold text-white">
                  Aucun projet trouvé pour ce filtre.
                </p>
                <p className="mt-3 text-white/55">
                  Essaie un autre pôle pour explorer davantage de réalisations.
                </p>
              </div>
            </Reveal>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}