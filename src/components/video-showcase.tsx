"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { videos } from "@/content/site-data";

type Video = (typeof videos)[number];

export function VideoShowcase({ mode = "home" }: { mode?: "home" | "library" }) {
  const [selected, setSelected] = useState<Video | null>(null);

  if (mode === "library") {
    return (
      <>
        <div className="video-library-grid">
          {videos.map((video) => (
            <VideoTile key={video.id} video={video} onPlay={setSelected} />
          ))}
        </div>
        <YouTubeModal video={selected} onClose={() => setSelected(null)} />
      </>
    );
  }

  const [featured, ...supporting] = videos.slice(0, 5);

  return (
    <>
      <div className="video-showcase-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Videos from the Body of Work</h2>
        <p>Stories, conversations and moments from television, interviews and public platforms.</p>
      </div>
      <div className="featured-video-layout">
        <VideoTile video={featured} featured onPlay={setSelected} />
        <div className="supporting-video-grid">
          {supporting.map((video) => (
            <VideoTile key={video.id} video={video} onPlay={setSelected} />
          ))}
        </div>
      </div>
      <div className="mobile-video-slider" aria-label="Selected videos">
        {videos.slice(0, 5).map((video) => (
          <VideoTile key={`mobile-${video.id}`} video={video} onPlay={setSelected} />
        ))}
      </div>
      <div className="center">
        <Link className="video-explore-button" href="/videos">
          Explore All Videos <ArrowRight size={18} />
        </Link>
      </div>
      <YouTubeModal video={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export function IntroVideoButton({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const intro = videos[0];

  return (
    <>
      <button className={className} type="button" onClick={() => setOpen(true)}>
        <Play size={className === "intro" ? 13 : 14} fill="currentColor" /> Watch Intro
      </button>
      <YouTubeModal video={open ? intro : null} onClose={() => setOpen(false)} />
    </>
  );
}

function VideoTile({
  video,
  featured = false,
  onPlay,
}: {
  video: Video;
  featured?: boolean;
  onPlay: (video: Video) => void;
}) {
  return (
    <button
      type="button"
      className={`showcase-video-card${featured ? " featured-video-card" : ""}`}
      onClick={() => onPlay(video)}
      aria-label={`Play ${video.title}`}
    >
      <Image
        src={video.image}
        alt={`${video.title} video thumbnail`}
        fill
        sizes={featured ? "(max-width: 900px) 92vw, 45vw" : "(max-width: 900px) 92vw, 23vw"}
      />
      <span className="video-shade" />
      <span className={`video-badge video-badge-${badgeClass(video.category)}`}>{video.category}</span>
      <span className="showcase-play"><Play fill="currentColor" /></span>
      <span className="showcase-video-copy">
        <strong>{video.title}</strong>
        {featured && video.description && <small>{video.description}</small>}
      </span>
    </button>
  );
}

function badgeClass(category: string) {
  if (category === "Interview") return "purple";
  if (category === "Television") return "green";
  if (category === "World Affairs") return "blue";
  return "orange";
}

function YouTubeModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  useEffect(() => {
    if (!video) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [video, onClose]);

  if (!video || typeof document === "undefined") return null;

  return createPortal(
    <div className="video-modal" role="dialog" aria-modal="true" aria-label={video.title} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="video-modal-panel">
        <div className="video-modal-head">
          <div><span>{video.category}</span><strong>{video.title}</strong></div>
          <button type="button" onClick={onClose} aria-label="Close video"><X /></button>
        </div>
        <div className="video-modal-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
