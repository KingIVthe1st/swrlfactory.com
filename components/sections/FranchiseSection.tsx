"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CounterAnimation from "@/components/animations/CounterAnimation";
import Button from "@/components/ui/Button";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import BenefitTile from "@/components/ui/BenefitTile";
import InlineInquiryCapture from "@/components/franchise/InlineInquiryCapture";
import { FRANCHISE_STATS, FRANCHISE_BENEFITS } from "@/lib/constants";

export default function FranchiseSection() {
  return (
    <section
      id="franchise-section"
      className="relative py-24 md:py-32 bg-swrl-black overflow-hidden"
    >
      {/* Money-pattern background */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(200,148,62,0.04) 40px, rgba(200,148,62,0.04) 80px)",
        }}
      />

      {/* Pink gradient accent at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-swrl-pink to-transparent absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal>
            <EyebrowLabel className="mb-4">Own a SWRL™</EyebrowLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-swrl-pink leading-none mb-8">
              You&apos;ve tasted it.
              <br />
              <span className="text-swrl-white">Now build it.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-swrl-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              The product sells itself. We&apos;ve proven the model in
              Charlotte. The question isn&apos;t whether SWRL works — it&apos;s
              who gets the next territory.
            </p>
          </ScrollReveal>
        </div>

        {/* Stat counter cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {FRANCHISE_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="bg-swrl-white/5 border border-swrl-white/10 rounded-2xl p-8 text-center h-full">
                <p className="text-3xl md:text-4xl font-display text-swrl-white mb-3">
                  <CounterAnimation value={stat.value} />
                </p>
                <p className="font-body text-swrl-white/50 text-sm uppercase tracking-widest leading-tight">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Benefit grid — 2x3 */}
        <div className="mb-20">
          <ScrollReveal>
            <EyebrowLabel className="text-center mb-4">
              What you get
            </EyebrowLabel>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FRANCHISE_BENEFITS.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <BenefitTile
                  icon={benefit.icon}
                  title={benefit.title}
                  body={benefit.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Inline email capture */}
        <ScrollReveal>
          <div className="mb-16">
            <InlineInquiryCapture source="homepage-franchise-section" />
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal>
          <div className="text-center">
            <Button href="/franchise" size="lg">
              Start the Conversation →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
