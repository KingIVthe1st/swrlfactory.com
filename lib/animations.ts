import type { Variants } from "framer-motion";

// GSAP ScrollTrigger defaults
export const SCROLL_TRIGGER_DEFAULTS = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
};

// Framer Motion variants
export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const STAGGER_ITEM: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// Hover / tap gesture props (spread directly onto motion components)
export const SCALE_HOVER = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
};

// Page transition variants
export const PAGE_TRANSITION: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};
