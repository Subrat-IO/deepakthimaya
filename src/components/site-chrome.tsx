"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircleMore, Mail, MapPin, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getViewport, scrollVariants, type ScrollVariant, ease } from "@/lib/motion";
import { IntroVideoButton } from "@/components/video-showcase";
import { FooterContactForm } from "@/components/footer-contact-form";
import { SocialIcon } from "@/components/social-icon";
import { socialLinks } from "@/content/site-data";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Roles", "/work"],
  ["Work", "/highlights"],
  ["Gallery", "/gallery"],
  ["Initiatives", "/affiliations"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-bg" aria-hidden="true">
        <motion.span
          className="header-orb header-orb-a"
          animate={{ x: [0, 18, 0], y: [0, 10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="header-orb header-orb-b"
          animate={{ x: [0, -14, 0], y: [0, 8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="header-line" />
      </div>
      <div className="shell nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.webp"
            alt="Deepak Thimaya"
            width={140}
            height={36}
            className="brand-logo"
            priority
          />
        </Link>
        <nav aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              key={label}
              className={
                pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""
              }
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <IntroVideoButton className="intro" />
        <button
          type="button"
          className="menu"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} strokeWidth={2.25} /> : <Menu size={24} strokeWidth={2.25} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="shell mobile-nav-inner">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  className={
                    pathname === href || (href !== "/" && pathname.startsWith(href))
                      ? "active"
                      : ""
                  }
                  onClick={() => setOpen(false)}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: ScrollVariant;
  as?: "div" | "section" | "article" | "li";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
  as = "div",
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={getViewport(!!reduced)}
      variants={scrollVariants[variant]}
      transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease }}
    >
      {children}
    </Tag>
  );
}

/** @deprecated use ScrollReveal */
export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal className={className} delay={delay} variant="fadeUp">
      {children}
    </ScrollReveal>
  );
}

export function StaggerReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={getViewport(!!reduced)}
      variants={scrollVariants.stagger}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-panel footer-panel">
          <Link href="/" className="footer-brand-link" aria-label="Deepak Thimaya home">
            <Image
              src="/images/logo.webp"
              alt="Deepak Thimaya"
              width={360}
              height={94}
              className="footer-brand-logo"
            />
          </Link>
          <p className="footer-brand-motto">
            Ideas <i /> People <i /> Impact
          </p>
          <h2>
            Get in <em>Touch</em>
          </h2>
          <p className="footer-brand-copy">Let&apos;s connect. I&apos;d love to hear from you.</p>
          <p className="footer-brand-desktop-copy">
            Ideas that inspire. People who create.
            <br />
            A meaningful impact for a better tomorrow.
          </p>
          <div className="socials footer-brand-socials" aria-label="Deepak Thimaya social profiles">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ background: social.background }}
                aria-label={`${social.label} (opens in new tab)`}
                title={social.label}
              >
                <SocialIcon id={social.id} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-form-shell">
          <FooterContactForm />
        </div>

        <div className="footer-contact footer-panel">
          <h2>Get in Touch</h2>
          <div className="footer-contact-cards">
            <a href="tel:+919886464641" aria-label="Call +91 98864 64641">
              <span className="footer-contact-icon">
                <MessageCircleMore />
              </span>
              <span>
                <small>Phone</small>
                <strong>+91 9886464641</strong>
              </span>
            </a>
            <a href="mailto:thimaya@gmail.com">
              <span className="footer-contact-icon footer-contact-icon-gold">
                <Mail />
              </span>
              <span>
                <small>Email</small>
                <strong>thimaya@gmail.com</strong>
              </span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1st%20Floor%2066%2F3%2C%2018th%20Cross%2C%20behind%20Kalasha%2C%209th%20A%20Main%2C%20Jaya%20Nagar%201st%20Block%2C%20Jayanagar%203rd%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560011%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="footer-contact-icon">
                <MapPin />
              </span>
              <span>
                <small>Address</small>
                <strong className="footer-contact-address">
                  1st Floor 66/3, 18th Cross, behind Kalasha, 9th A Main, Jaya Nagar 1st Block,
                  Jayanagar 3rd Block, Jayanagar, Bengaluru, Karnataka 560011, India
                </strong>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="shell copyright">
        <span />
        © 2026. All Rights Reserved.
        <span />
      </div>
    </footer>
  );
}
