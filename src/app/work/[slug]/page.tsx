import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { roles, extraPages } from "@/content/site-data";
import { galleryItems } from "@/content/gallery-data";
import { WorkArtGallery } from "@/components/work-art-gallery";

export function generateStaticParams() {
  return [
    ...roles.map((x) => ({ slug: x.slug })),
    ...Object.keys(extraPages).map((slug) => ({ slug })),
  ];
}

export default async function Detail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = roles.find((x) => x.slug === slug) || extraPages[slug];
  if (!role) notFound();

  const artWorks = slug === "art" ? galleryItems.filter((item) => item.category === "art") : [];

  return (
    <>
      <Header />
      <main className="inner shell detail">
        <ScrollReveal variant="fadeIn">
          <Link href="/work" className="back">
            <ArrowLeft size={16} /> All roles
          </Link>
        </ScrollReveal>
        <div className="detail-hero">
          <ScrollReveal
            variant="zoomIn"
            className={`detail-image${slug === "art" ? " detail-image--art" : ""}`}
          >
            <Image
              src={role.image}
              alt={role.title}
              fill
              priority
              sizes="(max-width:700px) 92vw, 45vw"
            />
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.1} className="detail-copy">
            <div>
              <p className="eyebrow">THE BODY OF WORK</p>
              <h1>{role.title}</h1>
              <p className="lede">{role.description}</p>
              <Link href="/contact" className="button">
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal variant="fadeUp" delay={0.15} className="copy-block">
          <p className="eyebrow">IN FOCUS</p>
          {role.sections?.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </ScrollReveal>
        {artWorks.length > 0 ? (
          <section className="work-art-gallery">
            <div className="work-art-gallery-intro">
              <p className="eyebrow">SELECTED WORKS</p>
              <h2>Paintings and drawings from the studio</h2>
            </div>
            <WorkArtGallery items={artWorks} />
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
