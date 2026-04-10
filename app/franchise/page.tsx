import Image from "next/image";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import StatCard from "@/components/franchise/StatCard";
import BenefitGrid from "@/components/franchise/BenefitGrid";
import FranchiseForm from "@/components/franchise/FranchiseForm";
import { FRANCHISE_STATS } from "@/lib/constants";

const IDEAL_OWNER_TRAITS = [
  "Obsessed with quality",
  "Community-driven",
  "Entrepreneurial mindset",
  "Customer-first attitude",
  "Loves the brand",
  "Ready to hustle",
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
                  Build Your Empire.{" "}
                  <span className="text-swrl-pink">
                    One Roll at a Time.
                  </span>
                </h1>
                <p className="font-body text-swrl-cream/70 text-lg leading-relaxed max-w-lg">
                  SWRL is more than a cinnamon roll concept — it&apos;s a
                  movement with a proven product, a passionate following, and a
                  franchise model built for real operators who want to own
                  something they&apos;re proud of.
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

      {/* ── 2. Stats ── */}
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

      {/* ── 3. Benefits ── */}
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
              The Ideal <span className="text-swrl-pink">SWRL Owner</span>
            </h2>
            <p className="font-body text-swrl-cream/70 text-lg mb-12">
              You don&apos;t need restaurant experience. You need obsession.
            </p>
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

      {/* ── 5. Form ── */}
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

          <FranchiseForm />
        </div>
      </section>

      {/* ── 6. Closing ── */}
      <section className="py-32 bg-swrl-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="font-display text-3xl md:text-4xl text-swrl-white mb-12">
              The SWRL movement is just getting started.
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
