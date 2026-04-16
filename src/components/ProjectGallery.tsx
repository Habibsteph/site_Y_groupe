"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

type SanityImage = {
  _key?: string;
  _type?: string;
  asset?: {
    _ref?: string;
    _id?: string;
  };
  alt?: string;
};

type Props = {
  images: SanityImage[];
  title: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const validImages = useMemo(
    () =>
      (images || []).filter(
        (image) => image?.asset?._ref || image?.asset?._id
      ),
    [images]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null || validImages.length === 0) return;
    setActiveIndex((activeIndex - 1 + validImages.length) % validImages.length);
  };

  const showNext = () => {
    if (activeIndex === null || validImages.length === 0) return;
    setActiveIndex((activeIndex + 1) % validImages.length);
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
  }, [activeIndex, validImages.length]);

  if (!validImages.length) return null;

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        {validImages.map((image, index) => {
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

          const imageUrl = urlFor(image).width(1200).height(900).url();

          return (
            <button
              key={image._key || index}
              type="button"
              onClick={() => open(index)}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black transition-all duration-500 hover:-translate-y-1 ${layoutClass}`}
            >
              <div className={`relative ${aspectClass} overflow-hidden`}>
                <Image
                  src={imageUrl}
                  alt={image.alt || `${title} visuel ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs text-white/75 backdrop-blur-md">
                  Ouvrir
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeIndex !== null && validImages[activeIndex] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            onClick={close}
            className="absolute right-4 top-4 z-[110] rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm text-white/80"
          >
            Fermer ✕
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-white/80"
          >
            ←
          </button>

          <div className="relative w-full max-w-6xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/10">
              <Image
                src={urlFor(validImages[activeIndex]).width(1600).url()}
                alt={
                  validImages[activeIndex].alt ||
                  `${title} visuel ${activeIndex + 1}`
                }
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex justify-between text-sm text-white/65">
              <span>
                {title} — visuel {activeIndex + 1}
              </span>
              <span>
                {activeIndex + 1} / {validImages.length}
              </span>
            </div>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-white/80"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}