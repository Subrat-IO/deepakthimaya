"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  filterGallery,
  galleryCategoryLabels,
  galleryFilters,
  galleryItems,
  homeGalleryPreviewIds,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/gallery-data";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

type GalleryFilterProps = {
  limit?: number;
  linkToGallery?: boolean;
  preview?: boolean;
  className?: string;
};

const GALLERY_BATCH_SIZE = 20;

export function GallerySection({ limit, preview = false, className = "" }: GalleryFilterProps) {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(GALLERY_BATCH_SIZE);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const reduced = useHydratedReducedMotion();

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  const filtered = useMemo(() => {
    if (preview && limit) {
      return homeGalleryPreviewIds
        .map((id) => galleryItems.find((item) => item.id === id))
        .filter((item): item is GalleryItem => Boolean(item))
        .slice(0, limit);
    }

    const pool = filterGallery(galleryItems, active);
    return limit ? pool.slice(0, limit) : pool;
  }, [active, limit, preview]);

  const visibleItems = useMemo(
    () => preview ? filtered : filtered.slice(0, visibleCount),
    [filtered, preview, visibleCount],
  );

  useEffect(() => {
    if (preview || visibleCount >= filtered.length) return;

    let ticking = false;
    const loadNextBatchOnScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const sentinel = loadMoreRef.current;
        if (sentinel && sentinel.getBoundingClientRect().top <= window.innerHeight + 240) {
          setVisibleCount((current) => current === visibleCount
            ? Math.min(current + GALLERY_BATCH_SIZE, filtered.length)
            : current);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", loadNextBatchOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", loadNextBatchOnScroll);
  }, [filtered.length, preview, visibleCount]);

  const categoryTabs = (
    <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
      {galleryFilters.map((tab) => {
        const count = tab.id === "all"
          ? galleryItems.length
          : galleryItems.filter((item) => item.category === tab.id).length;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`gallery-tab${active === tab.id ? " active" : ""}`}
            onClick={() => {
              setActive(tab.id);
              setVisibleCount(GALLERY_BATCH_SIZE);
            }}
          >
            {active === tab.id && (
              <motion.span
                layoutId="gallery-tab-indicator"
                className="gallery-tab-bg"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="gallery-tab-label">{tab.label}</span>
            <span className="gallery-tab-count">{count}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className={`${preview ? "gallery-preview" : "gallery-experience"} ${className}`.trim()}>
      {!preview && (
        <motion.header
          className="gallery-page-intro"
          initial={reduced ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="gallery-page-heading">
            <span>Gallery</span>
            <h1>Moments that Matter</h1>
            <p>People, places, events and stories from the journey.</p>
          </div>
          <div className="gallery-controls gallery-controls--intro">
            {categoryTabs}
          </div>
          <p className="gallery-page-note">
            Through people,
            <br />
            for a better tomorrow.
          </p>
        </motion.header>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={preview ? "preview" : active}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <GalleryGrid items={visibleItems} reduced={reduced} onSelect={setSelected} />
        </motion.div>
      </AnimatePresence>

      {!preview && visibleItems.length < filtered.length && (
        <div className="gallery-scroll-sentinel" ref={loadMoreRef} aria-hidden="true" />
      )}

      {filtered.length === 0 && <p className="gallery-empty">No images in this category yet.</p>}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Image preview: ${selected.title}`}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="gallery-lightbox-panel"
              initial={reduced ? false : { opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="gallery-lightbox-close" onClick={() => setSelected(null)} aria-label="Close image preview">
                <X />
              </button>
              <div className="gallery-lightbox-image">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  sizes="96vw"
                  onLoad={(event) => {
                    const image = event.currentTarget;
                    const panel = image.closest<HTMLElement>(".gallery-lightbox-panel");
                    if (panel && image.naturalWidth && image.naturalHeight) {
                      panel.style.setProperty("--lightbox-ratio", String(image.naturalWidth / image.naturalHeight));
                      panel.style.setProperty("--lightbox-natural-width", `${image.naturalWidth}px`);
                    }
                  }}
                />
              </div>
              <div className="gallery-lightbox-copy">
                <p className="gallery-lightbox-meta">
                  {galleryCategoryLabels[selected.category]}
                  {selected.year ? ` · ${selected.year}` : ""}
                </p>
                <h2>{selected.title}</h2>
                <p>{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryGrid({
  items,
  reduced,
  onSelect,
}: {
  items: GalleryItem[];
  reduced: boolean;
  onSelect: (item: GalleryItem) => void;
}) {
  return (
    <motion.div className="gallery" layout>
      {items.map((item, index) => (
        <motion.article
          layout
          key={item.id}
          initial={reduced ? false : { opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="gallery-item"
        >
          <button type="button" className="gallery-card" onClick={() => onSelect(item)} aria-label={`Open ${item.title}`}>
            <GalleryImage item={item} />
          </button>
        </motion.article>
      ))}
    </motion.div>
  );
}

function GalleryImage({ item }: { item: GalleryItem }) {
  const focus = item.focus ?? (item.category === "portraits" ? "center 22%" : "center center");

  return (
    <span className="gallery-media">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, (max-width: 1300px) 25vw, 15vw"
        className="gallery-img"
        style={{ objectPosition: focus }}
        onLoad={(event) => {
          const image = event.currentTarget;
          const frame = image.closest<HTMLElement>(".gallery-media");
          if (frame && image.naturalWidth && image.naturalHeight) {
            frame.style.setProperty("--gallery-ratio", String(image.naturalWidth / image.naturalHeight));
          }
        }}
      />
      <span className="gallery-expand" aria-hidden="true"><Maximize2 /></span>
    </span>
  );
}
