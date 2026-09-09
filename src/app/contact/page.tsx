import { Footer, Header, ScrollReveal } from "@/components/site-chrome";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="inner shell">
        <ScrollReveal variant="fadeDown">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Start a conversation.</h1>
        </ScrollReveal>
        <div className="contact-page">
          <ScrollReveal variant="slideLeft" delay={0.08}>
            <form>
              <label>
                Your name
                <input required placeholder="Enter your name" />
              </label>
              <label>
                Your email
                <input type="email" required placeholder="you@email.com" />
              </label>
              <label>
                Subject
                <input placeholder="What is this about?" />
              </label>
              <label>
                Your message
                <textarea required placeholder="Write your message here…" rows={6} />
              </label>
              <button className="button" type="submit">
                Send message
              </button>
              <p className="form-note">
                Email delivery will be connected through a secure provider before launch.
              </p>
            </form>
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.12}>
            <aside>
              <h2>Contact details</h2>
              <p>
                <Phone /> +91 9886464641
              </p>
              <p>
                <Mail /> thimaya@gmail.com
              </p>
              <p>
                <MapPin /> Jayanagar, Bengaluru – 560 011
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
