"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const THESIS_POINTS = [
  {
    number: "01",
    text: "A product designed to be unforgettable.",
  },
  {
    number: "02",
    text: "A system designed to be teachable.",
  },
  {
    number: "03",
    text: "A brand designed to scale.",
  },
];

export default function SwrlThesis() {
  return (
    <section className="relative py-24 md:py-32 bg-swrl-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-20">
          <ScrollReveal>
            <EyebrowLabel className="mb-4">The SWRL Thesis</EyebrowLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl text-swrl-white leading-tight">
              Built to scale. <span className="text-swrl-pink">By design.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {THESIS_POINTS.map((point, i) => (
            <ScrollReveal key={point.number} delay={0.15 + i * 0.1}>
              <div className="relative h-full rounded-2xl border border-swrl-pink/25 bg-swrl-white/[0.02] p-8 md:p-10 hover:border-swrl-pink/50 transition-colors duration-300">
                <span className="absolute top-6 right-6 text-xs font-body text-swrl-pink/70 tracking-widest">
                  {point.number}
                </span>
                <p className="font-display text-2xl md:text-3xl text-swrl-white leading-snug">
                  {point.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
