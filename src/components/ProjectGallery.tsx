"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        {images.map((imagePath, index) => {
          const layoutClass =
            index === 0
              ? "md:col-span-2 lg:col-span-8"
              : index === 1
              ? "md:col-span-1 lg:col-span-4"
              : "md:col-span-1 lg:col-span-6";

          const aspectClass =
            index === 0
              ? "aspect-[4/3]"
              : index === 1
              ? "aspect-[4/5]"
              : "aspect-[4/3]";

          return (
            <button
              key={imagePath}
              type="button"
              onClick={() => open(index)}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-amber-950/60 text-left transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/20 hover:shadow-[0_20px_60px_rgba(245,158,11,0.06)] ${layoutClass}`}
            >
              <div className={`relative ${aspectClass} overflow-hidden`}>
                <Image
                  src={imagePath}
                  alt={`${title} visuel ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/75 backdrop-blur-md transition duration-300 group-hover:border-amber-400/30 group-hover:text-amber-200">
                  Ouvrir
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-[110] rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm text-white/80 transition hover:border-amber-400/40 hover:text-amber-300"
          >
            Fermer ✕
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-3 text-white/80 transition hover:border-amber-400/40 hover:text-amber-300"
            aria-label="Image précédente"
          >
            ←
          </button>

          <div className="relative w-full max-w-6xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950">
              <Image
                src={images[activeIndex]}
                alt={`${title} visuel ${activeIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-white/65">
              <span>
                {title} — visuel {activeIndex + 1}
              </span>
              <span>
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-3 text-white/80 transition hover:border-amber-400/40 hover:text-amber-300"
            aria-label="Image suivante"
          >
            →
          </button>

          <button
            type="button"
            onClick={close}
            className="absolute inset-0 -z-10 cursor-default"
            aria-label="Fermer la galerie"
          />
        </div>
      )}
    </>
  );
}