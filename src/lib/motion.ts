import type { Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const scrollVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -36 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -56 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 56 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(6px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -4, y: 24 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  },
} satisfies Record<string, Variants>;

export type ScrollVariant = keyof typeof scrollVariants;

export function getViewport(reduced: boolean) {
  return reduced
    ? { once: true, amount: 0.12 }
    : { once: true, amount: 0.18, margin: "-60px 0px -40px 0px" };
}
