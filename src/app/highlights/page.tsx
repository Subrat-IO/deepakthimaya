import Image from "next/image";
import Link from "next/link";
import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { highlights } from "@/content/site-data";

export default function Highlights() {
  return (
    <>
      <Header />
      <main className="inner shell">
        <ScrollReveal variant="fadeDown">
          <p className="eyebrow">CAREER</p>
          <h1>Milestones of impact</h1>
          <p className="lede">A selection of conversations, projects and creative pursuits.</p>
        </ScrollReveal>
        <section className="highlights page-highlights">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} variant="fadeUp" delay={i * 0.05}>
              <Link href={item.href}>
                <div className="highlight-image">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width:700px) 90vw, 30vw" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            </ScrollReveal>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
