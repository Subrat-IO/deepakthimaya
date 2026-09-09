import { AffiliationCards } from "@/components/affiliation-cards";
import { Footer, Header, ScrollReveal } from "@/components/site-chrome";

export default function Affiliations() {
  return (
    <>
      <Header />
      <main className="inner shell">
        <ScrollReveal variant="fadeDown">
          <p className="eyebrow">CONNECTED WORK</p>
          <h1>Personality &amp; initiatives</h1>
          <p className="lede">
            The organisations and platforms associated with Deepak Thimaya&apos;s work.
          </p>
        </ScrollReveal>
        <AffiliationCards heading="h2" className="affiliations-page" />
      </main>
      <Footer />
    </>
  );
}
