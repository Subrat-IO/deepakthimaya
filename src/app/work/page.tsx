import Link from "next/link";
import Image from "next/image";
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
      <main className="inner shell">
        <ScrollReveal variant="fadeDown">
          <p className="eyebrow">THE BODY OF WORK</p>
          <h1>Many hats. One enduring purpose.</h1>
          <p className="lede">
            Explore the fields that have shaped Deepak Thimaya&apos;s professional journey.
          </p>
        </ScrollReveal>
        <section className="work-grid">
          {pages.map((p, i) => (
            <ScrollReveal key={p.slug} variant="scaleUp" delay={i * 0.05}>
              <Link href={`/work/${p.slug}`} className="work-tile">
                <Image src={p.image} alt="" fill sizes="(max-width:700px) 92vw, 33vw" />
                <div>
                  <small>0{i + 1}</small>
                  <h2>{p.title}</h2>
                  <p>{p.short}</p>
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
