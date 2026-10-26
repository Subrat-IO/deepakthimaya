"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  filterGallery,
  galleryCategoryLabels,
  galleryFilters,
  galleryItems,
  homeGalleryPreviewIds,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/gallery-data";
import { galleryRatios } from "@/content/gallery-ratios";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

type GalleryFilterProps = {
  limit?: number;
  linkToGallery?: boolean;
  preview?: boolean;
  className?: string;
};

/** Images rendered per batch; the next batch loads when the sentinel nears the viewport. */
const GALLERY_BATCH_SIZE = 50;
/** Start loading the next batch this far before the user reaches the bottom. */
const LOAD_AHEAD_MARGIN = "600px 0px";
/** Only the first few tiles (above the fold) are fetched eagerly. */
const PRIORITY_COUNT = 6;

const FALLBACK_RATIO = 1.5;
const MIN_RATIO = 0.56;
const MAX_RATIO = 2;

function ratioFor(item: GalleryItem) {
  const ratio = typeof item.src === "string"
    ? galleryRatios[item.src] ?? FALLBACK_RATIO
    : item.src.width && item.src.height ? item.src.width / item.src.height : FALLBACK_RATIO;
  return Math.min(MAX_RATIO, Math.max(MIN_RATIO, ratio));
}

/** Column count mirrors the gallery-page breakpoints in globals.css. */
function columnsForWidth(width: number) {
  if (width <= 560) return 2;
  if (width <= 900) return 3;
  if (width <= 1280) return 4;
  return 5;
}

function useGalleryColumns(enabled: boolean) {
  // null until measured on the client, so the first paint already uses the right column count.
  const [columns, setColumns] = useState<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const update = () => setColumns(columnsForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, [enabled]);

  return columns;
}

/**
 * Stable masonry: each tile goes into the currently shortest column using its known
 * aspect ratio. Appending a batch only adds tiles to column bottoms, so nothing that
 * is already on screen moves.
 */
function distribute(items: GalleryItem[], columns: number) {
  const cols: Array<Array<{ item: GalleryItem; index: number }>> = Array.from({ length: columns }, () => []);
  const heights = new Array(columns).fill(0);
  items.forEach((item, index) => {
    let target = 0;
    for (let c = 1; c < columns; c += 1) {
      if (heights[c] < heights[target] - 0.001) target = c;
    }
    cols[target].push({ item, index });
    heights[target] += 1 / ratioFor(item);
  });
  return cols;
}

export function GallerySection({ limit, preview = false, className = "" }: GalleryFilterProps) {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(GALLERY_BATCH_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const reduced = useHydratedReducedMotion();
  const columns = useGalleryColumns(!preview);

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

  const hasMore = !preview && visibleItems.length < filtered.length;

  // Load the next batch when the sentinel comes within LOAD_AHEAD_MARGIN of the viewport.
  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!hasMore || !sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setLoadingMore(true);
        setVisibleCount((current) => Math.min(current + GALLERY_BATCH_SIZE, filtered.length));
      },
      { rootMargin: LOAD_AHEAD_MARGIN },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filtered.length, hasMore, visibleCount]);

  // Keep the subtle loader up briefly while the new batch paints.
  useEffect(() => {
    if (!loadingMore) return;
    const timer = window.setTimeout(() => setLoadingMore(false), 450);
    return () => window.clearTimeout(timer);
  }, [loadingMore, visibleCount]);

  const selectCategory = useCallback((id: GalleryCategory | "all") => {
    setActive(id);
    setVisibleCount(GALLERY_BATCH_SIZE);
    setLoadingMore(false);
  }, []);

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
            onClick={() => selectCategory(tab.id)}
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

      {preview ? (
        <div className="gallery">
          {visibleItems.map((item, index) => (
            <GalleryTile key={item.id} item={item} index={index} onSelect={setSelected} />
          ))}
        </div>
      ) : columns === null ? (
        <div className="gallery gallery--masonry gallery--pending" aria-busy="true" />
      ) : (
        <div className="gallery gallery--masonry" key={active} data-count={visibleItems.length}>
          {distribute(visibleItems, columns).map((column, c) => (
            <div className="gallery-masonry-col" key={c}>
              {column.map(({ item, index }) => (
                <GalleryTile key={item.id} item={item} index={index} onSelect={setSelected} />
              ))}
            </div>
          ))}
        </div>
      )}

      {hasMore && (
        <div className="gallery-scroll-sentinel" ref={loadMoreRef} aria-hidden="true" />
      )}

      {!preview && filtered.length > 0 && (
        <div className="gallery-load-status" role="status" aria-live="polite">
          {hasMore ? (
            <span className={`gallery-loader${loadingMore ? " is-active" : ""}`}>
              <span className="gallery-loader-dot" />
              <span className="gallery-loader-dot" />
              <span className="gallery-loader-dot" />
              <span className="gallery-loader-text">Loading more moments</span>
            </span>
          ) : (
            <span className="gallery-end">
              {filtered.length === 1 ? "That's the only moment here" : `You've seen all ${filtered.length} moments`}
            </span>
          )}
        </div>
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
                  {selected.year ? ` \u00b7 ${selected.year}` : ""}
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

function GalleryTile({
  item,
  index,
  onSelect,
}: {
  item: GalleryItem;
  index: number;
  onSelect: (item: GalleryItem) => void;
}) {
  return (
    <article className="gallery-item">
      <button type="button" className="gallery-card" onClick={() => onSelect(item)} aria-label={`Open ${item.title}`}>
        <GalleryImage item={item} priority={index < PRIORITY_COUNT} />
      </button>
    </article>
  );
}

function GalleryImage({ item, priority }: { item: GalleryItem; priority: boolean }) {
  const focus = item.focus ?? (item.category === "portraits" ? "center 22%" : "center center");
  const style = { "--gallery-ratio": String(ratioFor(item)) } as CSSProperties;

  return (
    <span className="gallery-media" style={style}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, (max-width: 1280px) 25vw, 20vw"
        className="gallery-img"
        style={{ objectPosition: focus }}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        onLoad={(event) => {
          event.currentTarget.closest(".gallery-media")?.classList.add("is-loaded");
        }}
      />
      <span className="gallery-expand" aria-hidden="true"><Maximize2 /></span>
    </span>
  );
}
