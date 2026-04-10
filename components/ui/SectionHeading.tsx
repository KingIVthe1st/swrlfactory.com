"use client";

import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-display ${
          light ? "text-swrl-black" : "text-swrl-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg font-body ${
            light ? "text-swrl-black/60" : "text-swrl-cream/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
