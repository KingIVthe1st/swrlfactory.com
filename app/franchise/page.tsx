import { Suspense } from "react";
import Image from "next/image";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import StatCard from "@/components/franchise/StatCard";
import BenefitGrid from "@/components/franchise/BenefitGrid";
import FranchiseForm from "@/components/franchise/FranchiseForm";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import BenefitTile from "@/components/ui/BenefitTile";
import FoundersNote from "@/components/sections/FoundersNote";
import { FRANCHISE_STATS } from "@/lib/constants";

const IDEAL_OWNER_TRAITS = [
  "Entrepreneurial operator with multi-unit ambition",
  "Lives in (or ready to relocate to) the market they want to run",
  "6-figure liquid capital",
  "Obsessed with the brand before they heard it was franchisable",
  "Ready to be in-store daily for the first 12 months",
];

export default function FranchisePage() {
  return (
    <PageWrapper>
      {/* ── 1. Hero ── */}
      <section className="relative min-h-screen flex items-center bg-swrl-black overflow-hidden">
        {/* Money-pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <ScrollReveal>
                <p className="text-swrl-pink font-body font-semibold uppercase tracking-widest text-sm mb-4">
                  Franchise Opportunity
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-swrl-white leading-tight mb-6">
                  Own the Roll That{" "}
                  <span className="text-swrl-pink">
                    Ruined All Others.
                  </span>
                </h1>
                <p className="font-body text-swrl-cream/70 text-lg leading-relaxed max-w-lg">
                  SWRL Factory is now accepting founding-operator applications.
                  We&apos;re building this carefully — one territory, one
                  obsessed owner at a time.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — storefront image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/storefront.png"
                  alt="SWRL storefront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. Why SWRL ── */}
      <section className="py-24 md:py-32 bg-swrl-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <EyebrowLabel className="mb-4">Why SWRL</EyebrowLabel>
            <h2 className="font-display text-4xl md:text-6xl text-swrl-white leading-tight">
              Why this category. Why now.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitTile
              number="01"
              title="A category without a leader."
              body="Cinnamon rolls has no Starbucks. No Chipotle. No dominant brand. That's the opportunity."
            />
            <BenefitTile
              number="02"
              title="A product engineered for scale."
              body="Protected recipes, standardized prep, compact footprint. Teachable in weeks."
            />
            <BenefitTile
              number="03"
              title="An operator-first model."
              body="We expect our owners to be in-store daily for the first year. This is not a passive investment."
            />
          </div>
        </div>
      </section>

      {/* ── 3. Stats ── */}
      <section className="py-32 bg-swrl-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-16">
            <SectionHeading title="Why Franchise with SWRL?" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FRANCHISE_STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. What You'll Want to See ── */}
      <section className="py-24 md:py-32 bg-swrl-black border-t border-swrl-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <EyebrowLabel className="mb-4">The Real Numbers</EyebrowLabel>
          <h2 className="font-display text-4xl md:text-5xl text-swrl-white mb-6 leading-tight">
            What you&apos;ll want to see.
          </h2>
          <p className="font-body text-swrl-white/70 text-lg leading-relaxed mb-4">
            Detailed unit economics are shared after your initial inquiry, in
            compliance with FDD disclosure requirements. What we can share publicly:
            low-capex footprint, streamlined operations, protected recipes, and a
            category with no dominant brand.
          </p>
          <p className="font-body text-swrl-white/60 text-base italic">
            The real numbers come in conversation, not on a webpage.
          </p>
        </div>
      </section>

      {/* ── 5. Benefits ── */}
      <section className="py-32 bg-swrl-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-16">
            <SectionHeading title="What You Get" />
          </ScrollReveal>

          <BenefitGrid />
        </div>
      </section>

      {/* ── 4. Ideal Owner ── */}
      <section className="py-32 bg-swrl-black border-t border-swrl-pink/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display text-swrl-white mb-6">
              Not for everyone.{" "}
              <span className="text-swrl-pink">Here&apos;s who we&apos;re looking for.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {IDEAL_OWNER_TRAITS.map((trait) => (
                <span
                  key={trait}
                  className="bg-swrl-white/5 border border-swrl-pink/20 rounded-full px-5 py-2 font-body text-swrl-cream text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Founder's Note ── */}
      <FoundersNote variant="cream" />

      {/* ── 8. Form ── */}
      <section className="py-32 bg-swrl-cream">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display text-swrl-black mb-4">
              Ready to SWRL?
            </h2>
            <p className="font-body text-swrl-black/60 text-lg">
              Fill out the form below and our franchise team will reach out
              within 48 hours.
            </p>
          </ScrollReveal>

          <Suspense fallback={<div className="min-h-[400px]" />}>
            <FranchiseForm />
          </Suspense>
        </div>
      </section>

      {/* ── 6. Closing ── */}
      <section className="py-32 bg-swrl-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="font-display text-3xl md:text-4xl text-swrl-white mb-12">
              The Charlotte store opened in 2026. The next one could be yours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/menu" size="lg" variant="outline">
                Explore Menu
              </Button>
              <Button href="/locations" size="lg" variant="primary">
                Find a Location
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
