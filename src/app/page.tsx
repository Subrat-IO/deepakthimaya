import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Globe2,
  Heart,
  Megaphone,
  Sparkles,
  Star,
  Theater,
  Tv,
  Users,
} from "lucide-react";
import { Footer, Header, ScrollReveal, StaggerReveal } from "@/components/site-chrome";
import { GallerySection } from "@/components/gallery-section";
import { HeroStats } from "@/components/hero-stats";
import { HeroVisualBackdrop } from "@/components/hero-visual-backdrop";
import { AffiliationCards } from "@/components/affiliation-cards";
import { IntroVideoButton, VideoShowcase } from "@/components/video-showcase";
import { highlights, roles } from "@/content/site-data";
import heroImage from "../../dtimage.webp";

const journey = [
  {
    title: "Theatre & Child Theatre",
    text:
      "A stage actor since his school days, Deepak has directed and acted in numerous plays. He established The Academy for Child Theatre in 1992, wrote children's plays and directed award-winning productions.",
    image: "/images/BeautyPlus_20200803200641180_save.jpg",
    icon: Theater,
    href: "/work/theatre",
  },
  {
    title: "Political Analyst",
    text:
      "Deepak has interviewed leading state and national politicians. His perspective is valued across Kannada television, while his political analysis in Prajavani has also earned wide appreciation.",
    image: "/images/Rahul Gandhi.jpeg",
    icon: Globe2,
    href: "/work/political-shows",
  },
  {
    title: "Social Entrepreneur & Public Speaker",
    text:
      "As a social entrepreneur, he has supported social and human-development initiatives and mentored Samooha Shakti. He is also an experienced public speaker who has addressed thousands of people.",
    image: "/images/_BDS5772 - Copy - Copy - Copy.JPG",
    icon: Users,
    href: "/work/social-impact",
  },
  {
    title: "Advertising & Brand Promotion",
    text:
      "Deepak began his professional career in advertising after college. A creative thinker and problem solver, he has worked from concept through design for established agencies and major promotion projects.",
    image: "/images/Me in College.jpg",
    icon: Megaphone,
    href: "/work/advertising",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page">
        <section className="hero" id="top">
          <div className="shell hero-layout">
            <div className="hero-left">
              <ScrollReveal variant="slideRight" className="hero-copy">
                <p className="hero-kicker">Deepak Thimaya is a</p>
                <h1>
                  Well-Known <em>Political Analyst.</em>
                </h1>
                <p className="lede">
                  TV personality, presenter, senior journalist, entrepreneur, teacher, film-maker,
                  producer, trainer, writer, artist, debate promoter, dramatist, brand consultant,
                  advertising professional, social entrepreneur and motivational speaker.
                </p>
                <div className="actions">
                  <Link className="button" href="/work">
                    Explore Work <ArrowRight size={16} />
                  </Link>
                  <IntroVideoButton className="button secondary" />
                </div>
              </ScrollReveal>

              <HeroStats
                items={[
                  { icon: <CalendarDays />, value: "30+", label: "Years in Media" },
                  { icon: <Tv />, value: "Many", label: "TV Shows" },
                  { icon: <Sparkles />, value: "Multi-Faceted", label: "Career" },
                  { icon: <Globe2 />, value: "8+", label: "Countries for Verbattle" },
                ]}
              />
            </div>

            <ScrollReveal variant="zoomIn" delay={0.12} className="hero-visual">
              <HeroVisualBackdrop />
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <div className="hero-halo" aria-hidden="true" />
              <div className="hero-photo">
                <Image
                  src={heroImage}
                  alt="Deepak Thimaya"
                  fill
                  sizes="(max-width: 860px) 92vw, 52vw"
                  priority
                />
              </div>
              <div className="hero-dots dots" aria-hidden="true" />
              <p className="hero-orbit-words hero-orbit-words-left" aria-hidden="true">
                PEOPLE<br />IDEAS<br />POLICY<br />PROGRESS
              </p>
              <p className="hero-orbit-words hero-orbit-words-right" aria-hidden="true">
                A MORE<br />INFORMED<br />BRIGHTER<br />TOMORROW
              </p>
              <div className="hero-thought-card" aria-hidden="true">
                Ideas<br />Dialogue<br />Impact
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="about shell home-section" id="about">
          <ScrollReveal variant="slideLeft" className="portrait-wrap">
            <div className="portrait">
              <Image
                src="/images/deeeep - Copy.jpg"
                alt="Deepak Thimaya speaking at an event"
                fill
                sizes="(max-width: 700px) 86vw, 34vw"
              />
            </div>
            <span className="portrait-accent" aria-hidden="true" />
            <span className="portrait-dots dots" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.1} className="about-copy">
            <p className="eyebrow">ABOUT</p>
            <h2>About in a Nutshell</h2>
            <p>
              Deepak Thimaya is a well-known TV personality, presenter, senior journalist,
              entrepreneur, teacher, film-maker, producer, trainer, writer, artist, debate promoter,
              dramatist, brand consultant, advertising professional, social entrepreneur, political
              analyst and motivational speaker.
            </p>
            <div className="mini-stats">
              <MiniStat icon={<BriefcaseBusiness />} value="30+ Years" label="Experience" />
              <MiniStat icon={<Star />} value="Many Hats" label="Strength" />
              <MiniStat icon={<Globe2 />} value="Global" label="Reach" />
              <MiniStat icon={<Heart />} value="Impact" label="Passion" />
            </div>
          </ScrollReveal>
        </section>

        <section className="panel panel-blue shell roles-panel" id="roles">
          <ScrollReveal variant="fadeDown">
            <SectionTitle title="Exploring Multiple Roles" />
          </ScrollReveal>
          <StaggerReveal className="roles">
            {roles.map((role, i) => (
              <ScrollReveal key={role.slug} variant="scaleUp" delay={i * 0.05}>
                <Link href={`/work/${role.slug}`} className={`role-card role-${i + 1}`}>
                  <div className="role-number">
                    <span>0{i + 1}</span>
                    <Sparkles size={20} />
                  </div>
                  <div className="role-image">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      sizes="(max-width: 760px) 86vw, (max-width: 1180px) 40vw, 22vw"
                    />
                  </div>
                  <div className="role-copy">
                    <h3>{role.title}</h3>
                    <p>{role.short}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </StaggerReveal>
        </section>

        <section className="shell home-section compact-section media-showcase videos-showcase">
          <VideoShowcase />
        </section>

        <section className="panel panel-blue shell affiliations-panel" id="personality">
          <ScrollReveal variant="slideLeft">
            <SectionTitle title="Personality" />
          </ScrollReveal>
          <AffiliationCards />
        </section>

        <section className="panel panel-warm shell" id="milestones">
          <ScrollReveal variant="fadeDown">
            <SectionTitle title="Milestones of Impact" />
          </ScrollReveal>
          <div className="highlights">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} variant="fadeUp" delay={i * 0.05}>
                <Link href={item.href}>
                  <div className="highlight-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 760px) 84vw, (max-width: 1180px) 42vw, 28vw"
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="shell home-section compact-section media-showcase gallery-showcase" id="gallery">
          <ScrollReveal variant="zoomIn">
            <SectionTitle title="Gallery" />
          </ScrollReveal>
          <GallerySection limit={8} linkToGallery preview />
          <ScrollReveal variant="fadeUp" className="center">
            <Link className="small-button" href="/gallery">
              View Full Gallery <ArrowRight size={13} />
            </Link>
          </ScrollReveal>
        </section>

        <section className="panel panel-purple shell journey-panel" id="journey">
          <ScrollReveal variant="slideRight">
            <SectionTitle title="Journey of Influence" />
          </ScrollReveal>
          <div className="journey-grid">
            {journey.map(({ title, text, image, icon: Icon, href }, i) => (
              <ScrollReveal key={title} variant="slideLeft" delay={i * 0.07}>
                <Link href={href}>
                  <div className="journey-image">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 760px) 84vw, (max-width: 1180px) 42vw, 22vw"
                    />
                  </div>
                  <div className="journey-copy">
                    <Icon />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      <span className="mini-stat-icon">{icon}</span>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="section-title">
      <i />
      <h2>{title}</h2>
      <i />
    </div>
  );
}
