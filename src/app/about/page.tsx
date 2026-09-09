import Image from "next/image";
import { Footer, Header, ScrollReveal } from "@/components/site-chrome";

export default function About() {
  return (
    <>
      <Header />
      <main className="inner shell about-page">
        <ScrollReveal variant="slideLeft" className="about-image-wrap">
          <Image
            className="about-image"
            src="/images/dt.jpg"
            alt="Deepak Thimaya"
            fill
            sizes="(max-width: 820px) 92vw, 45vw"
          />
        </ScrollReveal>

        <ScrollReveal variant="slideRight" delay={0.1} className="about-intro">
          <p className="eyebrow">ABOUT DEEPAK THIMAYA</p>
          <h1>A multi-faceted voice in media, ideas and culture.</h1>
          <p className="lede">
            A career spanning television, journalism, filmmaking, entrepreneurship, debate promotion
            and public life.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.15} className="copy-block">
          <p>
            Deepak Thimaya is a TV personality, presenter, senior journalist, entrepreneur, teacher,
            filmmaker, producer, trainer, writer, artist, debate promoter, dramatist, brand consultant,
            advertising professional, social entrepreneur, political analyst and motivational speaker.
          </p>
          <p>
            His work has consistently brought together communication, curiosity and a commitment to
            public conversation. From television studios and newsrooms to debate platforms and social
            initiatives, each chapter adds a distinctive perspective to the larger body of work.
          </p>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
