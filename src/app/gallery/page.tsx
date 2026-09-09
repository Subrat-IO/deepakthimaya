import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { GallerySection } from "@/components/gallery-section";

export default function Gallery() {
  return (
    <>
      <Header />
      <main className="inner shell gallery-page">
        <ScrollReveal variant="fadeDown">
          <p className="eyebrow">COLLECTION</p>
          <h1>Gallery</h1>
          <p className="lede">A selection of moments, events and artwork.</p>
        </ScrollReveal>
        <GallerySection className="gallery-page-grid" />
      </main>
      <Footer />
    </>
  );
}
