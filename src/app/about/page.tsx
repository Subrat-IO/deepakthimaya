import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { aboutChapters } from "@/content/about-data";
import {
  achievementCategories,
  achievementsHeading,
  achievementsOverall,
} from "@/content/achievements-data";

export default function About() {
  return (
    <>
      <Header />
      <main className="about-story-page">
        <section className="about-story-hero shell">
          <ScrollReveal variant="slideLeft" className="about-story-portrait">
            <Image
              src="/images/deeeep - Copy.jpg"
              alt="Deepak Thimaya"
              fill
              sizes="(max-width: 820px) 92vw, 42vw"
              preload
            />
            <span className="about-story-portrait-label">A life in ideas</span>
          </ScrollReveal>

          <ScrollReveal variant="slideRight" delay={0.1} className="about-story-intro">
            <p className="eyebrow">THE FULL STORY</p>
            <h1>One life.<br />Many stages.<br /><em>A lasting impact.</em></h1>
            <p>
              Director, television anchor, journalist, educator, entrepreneur, political analyst
              and artist—Deepak Thimaya&apos;s career is not a list of titles. It is one continuing
              story about the power of communication.
            </p>
            <div className="about-story-start-row">
              <a href="#about-chapters" className="about-story-start">
                Explore his journey <ArrowDown size={18} />
              </a>
              <a href="#major-achievements" className="about-story-start about-story-start-secondary">
                Major achievements <ArrowDown size={18} />
              </a>
            </div>
          </ScrollReveal>
        </section>

        <nav className="about-story-nav shell" aria-label="About page chapters">
          {aboutChapters.map((chapter) => (
            <a href={`#${chapter.id}`} key={chapter.id}>
              {chapter.kicker}
            </a>
          ))}
        </nav>

        <section className="about-story-chapters" id="about-chapters">
          {aboutChapters.map((chapter, index) => (
            <article
              className={`about-story-chapter ${index % 2 === 1 ? "about-story-chapter-reverse" : ""}`}
              id={chapter.id}
              key={chapter.id}
            >
              <div className="shell about-story-chapter-grid">
                <ScrollReveal variant={index % 2 === 1 ? "slideRight" : "slideLeft"} className="about-story-media">
                  <div className="about-story-image">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      sizes="(max-width: 820px) 92vw, 39vw"
                      style={{ objectPosition: chapter.focus }}
                    />
                  </div>
                </ScrollReveal>

                <div className="about-story-copy">
                  <p className="about-story-kicker"><Sparkles size={16} /> {chapter.kicker}</p>
                  <h2>{chapter.title}</h2>
                  <div className="about-story-prose">
                    {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <a href="#about-chapters" className="about-story-back">
                    Back to chapters <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="about-achievements shell" id="major-achievements">
          <ScrollReveal variant="fadeDown">
            <p className="eyebrow">CAREER OVERVIEW</p>
            <h2 className="about-achievements-title">{achievementsHeading}</h2>
          </ScrollReveal>
          <div className="about-achievements-grid">
            {achievementCategories.map((category, index) => (
              <ScrollReveal key={category.id} variant="fadeUp" delay={index * 0.03}>
                <article className="about-achievements-card" id={category.id}>
                  <h3>{category.title}</h3>
                  {category.intro ? <p className="about-achievements-intro">{category.intro}</p> : null}
                  <ul>
                    {category.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {category.outro ? <p className="about-achievements-outro">{category.outro}</p> : null}
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal variant="fadeUp" className="about-achievements-overall">
            <p className="eyebrow">OVERALL ACHIEVEMENT</p>
            <p>{achievementsOverall}</p>
          </ScrollReveal>
        </section>

        <section className="about-story-closing shell">
          <p className="eyebrow">THE THREAD THAT CONNECTS IT ALL</p>
          <h2>Ideas become meaningful when they help people find their voice.</h2>
          <p>Media. Education. Enterprise. Public life. Different stages, one purpose.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
