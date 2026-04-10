"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CounterAnimation from "@/components/animations/CounterAnimation";
import Button from "@/components/ui/Button";
import { FRANCHISE_STATS } from "@/lib/constants";

const VALUE_PROPS = [
  "Low startup cost",
  "Simple operations",
  "Cult-level brand",
  "Full support",
];

export default function FranchiseTeaser() {
  return (
    <section className="py-32 bg-swrl-black overflow-hidden relative">
      {/* Money pattern background */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(200,148,62,0.04) 40px, rgba(200,148,62,0.04) 80px)",
        }}
      />

      {/* Pink gradient line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-swrl-pink to-transparent absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <p className="text-swrl-pink font-body text-sm tracking-[0.3em] uppercase mb-4">
            Franchise Opportunity
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-swrl-pink leading-none mb-8">
            Obsessed? Own One.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-swrl-white/70 text-lg md:text-xl max-w-2xl mb-16">
            Obsessed with SWRL? Own it. We&apos;ve built the model. The demand
            exists. Now it&apos;s on you.
          </p>
        </ScrollReveal>

        {/* Stat counter cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {FRANCHISE_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="bg-swrl-white/5 border border-swrl-white/10 rounded-2xl p-8 text-center">
                <p className="text-3xl md:text-4xl font-display text-swrl-white mb-2">
                  <CounterAnimation value={stat.value} />
                </p>
                <p className="font-body text-swrl-white/50 text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Value prop pills */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12">
            {VALUE_PROPS.map((prop) => (
              <span
                key={prop}
                className="px-5 py-2 rounded-full border border-swrl-pink/40 text-swrl-pink font-body text-sm"
              >
                {prop}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <Button href="/franchise" size="lg">
            Start Your SWRL Journey →
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
