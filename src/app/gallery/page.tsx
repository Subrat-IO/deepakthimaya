import { Footer, Header } from "@/components/site-chrome";
import { GallerySection } from "@/components/gallery-section";

export default function Gallery() {
  return (
    <>
      <Header />
      <main className="inner shell gallery-page">
        <GallerySection className="gallery-page-grid" />
      </main>
      <Footer />
    </>
  );
}
