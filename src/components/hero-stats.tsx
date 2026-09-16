"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

const accents = [
  { accent: "#67a83f", accentBg: "#edf7e5" },
  { accent: "#844bc8", accentBg: "#f3ecff" },
  { accent: "#0c91a1", accentBg: "#e8f8fa" },
  { accent: "#2b63cc", accentBg: "#eaf0ff" },
];

type HeroStatsProps = {
  items: {
    icon: ReactNode;
    value: string;
    label: string;
  }[];
};

export function HeroStats({ items }: HeroStatsProps) {
  const reduced = useHydratedReducedMotion();

  return (
    <section className="hero-stats" aria-label="Career statistics">
      {items.map((item, i) => {
        const { accent, accentBg } = accents[i] ?? accents[0];
        return (
          <motion.div
            key={item.label}
            className="hero-stat-card"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: reduced ? 0 : 0.15 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.2 } }}
            style={{ "--stat-accent": accent, "--stat-accent-bg": accentBg } as CSSProperties}
          >
            <span className="hero-stat-icon">{item.icon}</span>
            <strong className="hero-stat-value">{item.value}</strong>
            <span className="hero-stat-label">{item.label}</span>
          </motion.div>
        );
      })}
    </section>
  );
}
