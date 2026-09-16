"use client";

import Image from "next/image";
import type { GalleryItem } from "@/content/gallery-data";

export function WorkArtGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="work-art-masonry" aria-label="Artworks">
      {items.map((item) => (
        <article key={item.id} className="work-art-masonry-item">
          <div className="work-art-masonry-card">
            <span className="work-art-masonry-media">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="work-art-masonry-img"
                onLoad={(event) => {
                  const image = event.currentTarget;
                  const frame = image.closest<HTMLElement>(".work-art-masonry-media");
                  if (frame && image.naturalWidth && image.naturalHeight) {
                    frame.style.setProperty(
                      "--art-ratio",
                      String(image.naturalWidth / image.naturalHeight),
                    );
                  }
                }}
              />
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
