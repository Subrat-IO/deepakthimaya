"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { HeroStats } from "@/components/hero-stats";
import { HeroVisualBackdrop } from "@/components/hero-visual-backdrop";
import { IntroVideoButton } from "@/components/video-showcase";
import { heroSlides } from "@/content/hero-slides";
import { preloadImages } from "@/lib/preload-images";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

const SLIDE_MS = 7000;
const SLIDE_DURATION = 0.62;
const SMOOTH_EASE = [0.45, 0, 0.2, 1] as const;

type HeroShowcaseProps = {
  stats: {
    icon: ReactNode;
    value: string;
    label: string;
  }[];
};

type SlideDirection = 1 | -1;

function slideDirection(current: number, next: number, total: number): SlideDirection {
  const forward = (next - current + total) % total;
  return forward <= total / 2 ? 1 : -1;
}

const copyVariants = {
  enter: (direction: SlideDirection) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: SlideDirection) => ({
    x: direction > 0 ? 28 : -28,
    opacity: 0,
  }),
};

const visualVariants = {
  enter: (direction: SlideDirection) => ({
    x: direction > 0 ? 72 : -72,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: SlideDirection) => ({
    x: direction > 0 ? -56 : 56,
    opacity: 0,
  }),
};

const copyChildVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 + i * 0.07,
      duration: 0.45,
      ease: SMOOTH_EASE,
    },
  }),
};

export function HeroShowcase({ stats }: HeroShowcaseProps) {
  const reduced = useHydratedReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>(1);
  const [paused, setPaused] = useState(false);

  const slide = heroSlides[index];

  useEffect(() => {
    preloadImages(heroSlides.map((item) => item.src));
  }, []);

  const goToIndex = useCallback((rawNext: number) => {
    const total = heroSlides.length;
    setIndex((current) => {
      const next = ((rawNext % total) + total) % total;
      if (next !== current) {
        setDirection(slideDirection(current, next, total));
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => goToIndex(index + 1), SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [goToIndex, index, paused]);

  const transition = reduced
    ? { duration: 0.2, ease: SMOOTH_EASE }
    : { duration: SLIDE_DURATION, ease: SMOOTH_EASE };

  const photoStyle = {
    "--hero-focus": slide.focus ?? "50% 22%",
    "--hero-scale": slide.scale ?? 1.06,
  } as CSSProperties;

  return (
    <div
      className="shell hero-layout"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-left">
        <div className="hero-copy">
          <div className="hero-copy-stage" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.src}
                className="hero-copy-slide"
                custom={direction}
                variants={copyVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <motion.p
                  className="hero-kicker"
                  custom={0}
                  variants={copyChildVariants}
                  initial="hidden"
                  animate="show"
                >
                  {slide.kicker}
                </motion.p>
                <motion.h1 custom={1} variants={copyChildVariants} initial="hidden" animate="show">
                  {slide.title} <em>{slide.emphasis}</em>
                </motion.h1>
                <motion.p className="lede" custom={2} variants={copyChildVariants} initial="hidden" animate="show">
                  {slide.lede}
                  <br />
                  <strong className="hero-advisor-title">
                    Communication Advisor to the Hon&apos;ble Chief Minister of Karnataka
                  </strong>
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="actions">
            <Link className="button" href="/work">
              Explore Work <ArrowRight size={16} />
            </Link>
            <IntroVideoButton className="button secondary" />
          </div>
          <div className="hero-slider-nav" role="tablist" aria-label="Homepage portraits">
            <button
              type="button"
              className="hero-slider-arrow"
              aria-label="Previous portrait"
              onClick={() => goToIndex(index - 1)}
            >
              <ChevronLeft size={18} />
            </button>
            {heroSlides.map((item, i) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${item.emphasis.replace(/\.$/, "")}`}
                className={`hero-slider-dot${i === index ? " is-active" : ""}`}
                onClick={() => goToIndex(i)}
              />
            ))}
            <button
              type="button"
              className="hero-slider-arrow"
              aria-label="Next portrait"
              onClick={() => goToIndex(index + 1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <HeroStats items={stats} />
      </div>

      <div className="hero-visual">
        <div className="hero-visual-viewport">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.src}
              className="hero-visual-stage"
              custom={direction}
              variants={visualVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >
              <HeroVisualBackdrop />
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <div className="hero-halo" aria-hidden="true" />
              <div className="hero-photo">
                <div className="hero-photo-layer hero-photo-layer--active" style={photoStyle}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 860px) 92vw, 52vw"
                    priority={index === 0}
                    loading="eager"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                  />
                </div>
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
