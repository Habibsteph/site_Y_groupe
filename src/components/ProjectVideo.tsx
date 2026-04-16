"use client";

type Props = {
  video?: {
    source?: "upload" | "embed";
    format?: "landscape" | "portrait";
    url?: string;
    caption?: string;
    poster?: {
      asset?: {
        url?: string;
      };
    };
    file?: {
      asset?: {
        url?: string;
        mimeType?: string;
      };
    };
  };
};

function getEmbedUrl(url?: string) {
  if (!url) return null;

  const yt =
    url.match(/youtube\.com\/watch\?v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?&]+)/) ||
    url.match(/youtube\.com\/embed\/([^?&]+)/);

  if (yt?.[1]) {
    return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  }

  const vimeo =
    url.match(/vimeo\.com\/(\d+)/) ||
    url.match(/player\.vimeo\.com\/video\/(\d+)/);

  if (vimeo?.[1]) {
    return `https://player.vimeo.com/video/${vimeo[1]}`;
  }

  return null;
}

export default function ProjectVideo({ video }: Props) {
  if (!video) return null;

  const uploaded = video.file?.asset?.url;
  const embed = getEmbedUrl(video.url);
  const isPortrait = video.format === "portrait";

  if (video.source === "upload" && !uploaded) return null;
  if (video.source === "embed" && !embed) return null;

  const wrapperClass = isPortrait
  ? "w-full max-w-[260px]"
  : "mx-auto max-w-4xl lg:max-w-5xl";
  
  const mediaAspectClass = isPortrait ? "aspect-[4/5]" : "aspect-[16/9]";

  return (
    <div className={`${wrapperClass} relative`}>
      <div className="relative">
        {!isPortrait && (
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.10),transparent_55%)] blur-2xl" />
        )}

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-3">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <div className={`relative w-full ${mediaAspectClass}`}>
              {video.source === "upload" && uploaded && (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster?.asset?.url}
                  className="h-full w-full object-cover"
                >
                  <source
                    src={uploaded}
                    type={video.file?.asset?.mimeType || "video/mp4"}
                  />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              )}

              {video.source === "embed" && embed && (
                <iframe
                  src={embed}
                  title={video.caption || "Vidéo du projet"}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {video.caption && (
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white/55">
          {video.caption}
        </p>
      )}
    </div>
  );
}