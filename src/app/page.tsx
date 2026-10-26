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
import { HeroShowcase } from "@/components/hero-showcase";
import { AffiliationCards } from "@/components/affiliation-cards";
import { VideoShowcase } from "@/components/video-showcase";
import { highlights, roles } from "@/content/site-data";
import dkShivakumarImage from "./dkshivkumarimg.png";

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
    image: "/images/der.jpeg",
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
          <HeroShowcase
            stats={[
              { icon: <CalendarDays />, value: "30+", label: "Years in Media" },
              { icon: <Tv />, value: "Many", label: "TV Shows" },
              { icon: <Sparkles />, value: "Multi-Faceted", label: "Career" },
              { icon: <Globe2 />, value: "8+", label: "Countries for Verbattle" },
            ]}
          />
        </section>

        <section className="about shell home-section" id="about">
          <ScrollReveal variant="slideLeft" className="portrait-wrap">
            <div className="portrait">
              <Image
                src={dkShivakumarImage}
                alt="Deepak Thimaya with D. K. Shivakumar"
                fill
                sizes="(max-width: 700px) 86vw, 34vw"
              />
            </div>
            <span className="portrait-accent" aria-hidden="true" />
            <span className="portrait-dots dots" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.1} className="about-copy">
            <p className="eyebrow">ABOUT</p>
            <h2>More Than One Story</h2>
            <p>
              Deepak Thimaya has never belonged to just one frame. He is the director and
              co-producer of the Kannada feature film <em>Neene Bari Neene</em>, a familiar
              television anchor and presenter associated with Udaya TV, and a journalist whose
              career began long before the studio lights came on.
              <br />
              <br />
              As an educator and the founder of Verbattle, he has turned debate into a platform for
              sharper thinking, confident expression and responsible leadership. His journey also
              spans acting, writing, television production, entrepreneurship, political analysis,
              brand communication and social initiatives—many roles, connected by one enduring
              belief: ideas can move people.
              <br />
              <strong className="hero-advisor-title">
                Communication Advisor to the Hon&apos;ble Chief Minister of Karnataka
              </strong>
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
