"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = [
  "We", "don't", "make", "cinnamon", "rolls.",
  "We", "stuff", "them.",
  "We", "glaze", "them.",
  "We", "ruin", "every", "other", "cinnamon", "roll", "you'll", "ever", "eat.",
];

const HIGHLIGHTED = new Set(["stuff", "glaze", "ruin"]);

interface WordRevealProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function WordReveal({ word, index, total, scrollYProgress }: WordRevealProps) {
  // Map words to reveal between 20%-70% of the scroll range
  const rangeStart = 0.2;
  const rangeEnd = 0.7;
  const span = rangeEnd - rangeStart;
  const start = rangeStart + (index / total) * span;
  const end = rangeStart + ((index + 1) / total) * span;

  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
  const y = useTransform(scrollYProgress, [start, end], [20, 0]);
  const blur = useTransform(scrollYProgress, [start, end], [4, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const isHighlighted = HIGHLIGHTED.has(word.replace(/[^a-z]/gi, "").toLowerCase());
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    isHighlighted ? [0.9, 1.05] : [1, 1]
  );

  return (
    <motion.span
      style={{ opacity, y, filter, scale }}
      className={`inline-block ${isHighlighted ? "text-swrl-pink" : "text-swrl-white"}`}
    >
      {word}
    </motion.span>
  );
}

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1A1A1A", "#2a2220", "#FFF5EB"]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <p className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-display flex flex-wrap justify-center gap-x-3 gap-y-1">
        {WORDS.map((word, i) => (
          <WordReveal
            key={`${word}-${i}`}
            word={word}
            index={i}
            total={WORDS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </p>
    </motion.section>
  );
}
