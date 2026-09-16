import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";
import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { roles, extraPages } from "@/content/site-data";

export default function Work() {
  const pages = [
    ...roles,
    ...Object.entries(extraPages).map(([slug, p]) => ({
      slug,
      short: p.description,
      image: p.image,
      title: p.title,
      description: p.description,
    })),
  ];

  return (
    <>
      <Header />
      <main className="work-index-page">
        <section className="work-index-hero shell">
          <ScrollReveal variant="fadeDown" className="work-index-intro">
            <p className="eyebrow"><Sparkles size={15} /> THE BODY OF WORK</p>
            <h1>Many disciplines.<br /><em>One creative life.</em></h1>
            <p>
              From television studios and newsrooms to film sets, classrooms and public platforms,
              explore the work that has shaped Deepak Thimaya&apos;s journey.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.08} className="work-index-summary">
            <Layers3 size={28} />
            <strong>{pages.length}</strong>
            <span>fields of work,<br />connected by ideas</span>
          </ScrollReveal>
        </section>

        <section className="work-index-grid shell">
          {pages.map((p, i) => (
            <ScrollReveal key={p.slug} variant="scaleUp" delay={i * 0.05}>
              <Link
                href={`/work/${p.slug}`}
                className={`work-index-card ${i === 0 ? "work-index-card-featured" : ""}`}
              >
                <div className="work-index-image">
                  <Image
                    src={p.slug === "entrepreneurship" ? "/images/whatsapp-photo.jpeg" : p.image}
                    alt={p.title}
                    fill
                    sizes={i === 0 ? "(max-width: 760px) 92vw, 52vw" : "(max-width: 760px) 92vw, 40vw"}
                  />
                </div>
                <div className="work-index-copy">
                  <small>Field of work</small>
                  <h2>{p.title}</h2>
                  <p>{p.short}</p>
                  <span>Explore this story <ArrowUpRight size={17} /></span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
