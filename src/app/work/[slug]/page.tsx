import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { roles, extraPages } from "@/content/site-data";

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
          <ScrollReveal variant="zoomIn" className="detail-image">
            <Image src={role.image} alt={role.title} fill sizes="(max-width:700px) 92vw, 45vw" />
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.1}>
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
          {role.sections ? (
            role.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))
          ) : (
            <section>
              <h2>A career built on communication and impact.</h2>
              <p>
                The complete background, selected work, images, videos and verified milestones for this
                discipline can be managed from the central content file. This page is structured to grow
                into a detailed editorial profile without cluttering the home page.
              </p>
            </section>
          )}
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
