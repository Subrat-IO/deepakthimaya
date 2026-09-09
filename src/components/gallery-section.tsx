"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  filterGallery,
  galleryFilters,
  galleryItems,
  homeGalleryPreviewIds,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/gallery-data";

type GalleryFilterProps = {
  limit?: number;
  linkToGallery?: boolean;
  preview?: boolean;
  className?: string;
};

export function GallerySection({
  limit,
  preview = false,
  className = "",
}: GalleryFilterProps) {
  const [active, setActive] = useState<GalleryCategory | "all">(preview ? "all" : "photos");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const reduced = useReducedMotion();

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
    const pool = filterGallery(galleryItems, active);

    if (preview && limit) {
      const curated = homeGalleryPreviewIds
        .map((id) => galleryItems.find((item) => item.id === id))
        .filter((item): item is GalleryItem => !!item)
        .filter((item) => active === "all" || item.category === active);

      return curated.slice(0, limit);
    }

    return limit ? pool.slice(0, limit) : pool;
  }, [active, limit, preview]);

  return (
    <div className={`${preview ? "gallery-preview" : ""} ${className}`.trim()}>
      <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
        {galleryFilters.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`gallery-tab${active === tab.id ? " active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {active === tab.id && (
              <motion.span
                layoutId="gallery-tab-indicator"
                className="gallery-tab-bg"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="gallery-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <motion.div className="gallery">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={reduced ? false : { opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.95, y: -8 }}
              transition={{
                duration: 0.35,
                delay: reduced ? 0 : (i % 4) * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="gallery-item"
            >
              <button
                type="button"
                className="gallery-link gallery-preview-button"
                onClick={() => setSelected(item)}
                aria-label={`Preview ${item.alt}`}
              >
                <GalleryImage item={item} />
                <span className="gallery-expand" aria-hidden="true"><Maximize2 /></span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="gallery-empty">No images in this category yet.</p>
      )}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Image preview: ${selected.alt}`}
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
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setSelected(null)}
                aria-label="Close image preview"
              >
                <X />
              </button>
              <div className="gallery-lightbox-image">
                <Image src={selected.src} alt={selected.alt} fill sizes="96vw" />
              </div>
              <p>{selected.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryImage({ item }: { item: GalleryItem }) {
  const focus = item.focus ?? (item.category === "photos" ? "center 22%" : "center center");

  return (
    <>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width:600px) 46vw, 23vw"
        className="gallery-img"
        style={{ objectPosition: focus }}
        onLoad={(event) => {
          const image = event.currentTarget;
          const frame = image.closest<HTMLElement>(".gallery-link");
          if (frame && image.naturalWidth && image.naturalHeight) {
            frame.style.setProperty(
              "--gallery-ratio",
              String(image.naturalWidth / image.naturalHeight),
            );
          }
        }}
      />
      <span className={`gallery-category gallery-category-${item.category}`}>
        {item.category === "art" ? "Art Gallery" : item.category === "events" ? "Event" : "Photo"}
      </span>
    </>
  );
}
