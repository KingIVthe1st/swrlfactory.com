"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

interface FoundersNoteProps {
  /** Background variant — "dark" for homepage, "cream" for franchise page */
  variant?: "dark" | "cream";
}

export default function FoundersNote({ variant = "dark" }: FoundersNoteProps) {
  const isDark = variant === "dark";
  const bgClass = isDark ? "bg-swrl-black" : "bg-swrl-cream";
  const textClass = isDark ? "text-swrl-white" : "text-swrl-black";
  const bodyClass = isDark ? "text-swrl-white/80" : "text-swrl-black/80";
  const sigClass = "text-swrl-pink";

  return (
    <section className={`py-24 md:py-32 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <EyebrowLabel className="mb-6 text-center">
            From the Founder
          </EyebrowLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative pl-6 md:pl-10 border-l-2 border-swrl-pink">
            <p
              className={`font-display text-2xl md:text-3xl leading-snug ${textClass} mb-6`}
            >
              SWRL wasn&apos;t built to be a bakery that might one day franchise.
            </p>
            <p
              className={`font-body text-base md:text-lg leading-relaxed ${bodyClass} mb-6`}
            >
              It was built, from day one, to be franchisable. Every recipe
              documented. Every step teachable. Every system protected. If
              you&apos;ve eaten one of our rolls and thought &ldquo;this should
              be everywhere&rdquo; — that&apos;s exactly the plan. And
              we&apos;re looking for the operators who&apos;ll help us get
              there.
            </p>
            <p className={`font-display text-lg ${sigClass}`}>
              — Juan Edgerton, Founder, SWRL Factory
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
