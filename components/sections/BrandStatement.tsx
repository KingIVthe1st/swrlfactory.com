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
  const start = index / total;
  const end = Math.min((index + 1) / total, 1);

  const opacity = useTransform(scrollYProgress, [start * 0.8, end * 0.8], [0.15, 1]);
  const y = useTransform(scrollYProgress, [start * 0.8, end * 0.8], [10, 0]);

  const isHighlighted = HIGHLIGHTED.has(word.replace(/[^a-z]/gi, "").toLowerCase());

  return (
    <motion.span
      style={{ opacity, y }}
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
