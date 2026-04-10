"use client";

import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const initial = { opacity: 0, ...offsets[direction] };
  const easeOut: Easing = "easeOut";
  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
