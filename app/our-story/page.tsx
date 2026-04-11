"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import Button from "@/components/ui/Button";

export default function OurStoryPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <PageWrapper>
      {/* ── 1. Hero ── */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-swrl-black overflow-hidden"
      >
        <motion.h1
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display text-swrl-white text-center px-6 leading-tight"
        >
          Every Empire Starts{" "}
          <span className="text-swrl-pink">with a Roll.</span>
        </motion.h1>
      </section>

      {/* ── 2. Origin Block ── */}
      <section className="py-32 bg-swrl-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <ScrollReveal direction="left">
              <p className="text-swrl-pink font-body font-semibold uppercase tracking-widest text-sm mb-4">
                The Origin
              </p>
              <h2 className="text-4xl md:text-5xl font-display text-swrl-white mb-8 leading-tight">
                It Started with a Craving.
              </h2>
              <div className="space-y-5 font-body text-swrl-white/70 text-lg leading-relaxed">
                <p>
                  SWRL wasn&apos;t a hobby that turned into a business. It was a
                  system, built backwards from the franchise it was meant to
                  become. Every recipe tested to be teachable. Every step
                  engineered to be repeatable. A cinnamon roll designed, from
                  the first batch, to scale.
                </p>
              </div>
            </ScrollReveal>

            {/* Right — image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/oreo-roll.png"
                  alt="SWRL Oreo stuffed cinnamon roll"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. Mission Pillars ── */}
      <section className="py-32 bg-swrl-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display text-swrl-black text-center mb-16">
              The SWRL Way
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StaggerItem>
              <div className="text-center px-4">
                <p className="text-swrl-pink font-display text-3xl mb-4">Stuff It</p>
                <p className="font-body text-swrl-black/70 text-base leading-relaxed">
                  We don&apos;t do ordinary. Every roll is engineered to be unforgettable.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center px-4">
                <p className="text-swrl-pink font-display text-3xl mb-4">Perfect It</p>
                <p className="font-body text-swrl-black/70 text-base leading-relaxed">
                  Every recipe is protected, documented, and trainable in a week.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center px-4">
                <p className="text-swrl-pink font-display text-3xl mb-4">Share It</p>
                <p className="font-body text-swrl-black/70 text-base leading-relaxed">
                  Built to scale. Built to franchise. Built to spread.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ── 4. Why SWRL ── */}
      <section className="py-32 bg-swrl-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display text-swrl-white text-center mb-16">
              Why <span className="text-swrl-pink">SWRL</span>?
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Made from scratch daily",
                body: "No frozen dough, no shortcuts. Every roll begins fresh each morning — so the last one of the day is just as good as the first.",
              },
              {
                title: "Proprietary stuffed recipes",
                body: "Our fillings aren't off the shelf. Every flavor is developed in-house and protected — because the secret is literally in the roll.",
              },
              {
                title: "Instagram-worthy presentation",
                body: "We designed every box, drizzle, and plating detail knowing it would end up on your feed. That's by design — taste and aesthetics, both earned.",
              },
              {
                title: "Franchise-ready operations",
                body: "Every process, every product, every system is built to scale. SWRL is ready for city two, three, and beyond whenever you are.",
              },
              {
                title: "Franchise-ready from day one",
                body: "Not retrofitted — engineered to be franchisable from the first batch.",
              },
            ].map(({ title, body }) => (
              <StaggerItem key={title}>
                <div className="bg-swrl-white/5 border border-swrl-pink/20 rounded-2xl p-8 h-full">
                  <h3 className="font-display text-swrl-white text-xl mb-3">{title}</h3>
                  <p className="font-body text-swrl-white/60 text-sm leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 5. Closing Quote ── */}
      <section className="py-32 bg-swrl-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <blockquote className="font-display text-4xl md:text-6xl text-swrl-white leading-tight mb-14">
              &ldquo;We didn&apos;t start a bakery.
              <br />
              We built the next{" "}
              <span className="text-swrl-pink">franchise phenomenon.</span>&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/locations" size="lg" variant="primary">
                Find a Location
              </Button>
              <Button href="/franchise" size="lg" variant="outline">
                Own a SWRL
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
