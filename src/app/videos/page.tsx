import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { VideoShowcase } from "@/components/video-showcase";

export default function Videos() {
  return (
    <>
      <Header />
      <main className="inner shell">
        <ScrollReveal variant="fadeDown">
          <p className="eyebrow">WATCH</p>
          <h1>Videos from the body of work</h1>
          <p className="lede">Selected conversations, programmes and memorable moments.</p>
        </ScrollReveal>
        <VideoShowcase mode="library" />
      </main>
      <Footer />
    </>
  );
}
