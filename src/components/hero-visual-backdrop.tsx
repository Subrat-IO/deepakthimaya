"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroVisualBackdrop() {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className="hero-backdrop hero-backdrop-static" aria-hidden="true" />;
  }

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <motion.span
        className="hero-glow hero-glow-a"
        animate={{ x: [0, 28, -14, 0], y: [0, -22, 12, 0], scale: [1, 1.14, 0.94, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="hero-glow hero-glow-b"
        animate={{ x: [0, -24, 16, 0], y: [0, 18, -10, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="hero-glow hero-glow-c"
        animate={{ x: [0, 14, -18, 0], y: [0, 12, -16, 0], opacity: [0.35, 0.55, 0.4, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="hero-shimmer" />
      <span className="hero-ring hero-ring-one" />
      <span className="hero-ring hero-ring-two" />
      <span className="hero-scan" />
    </div>
  );
}
