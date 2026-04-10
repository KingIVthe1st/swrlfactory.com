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
                  Cinnamon rolls have been the same for decades — a spiral of
                  dough, a drizzle of icing, and a whole lot of missed potential.
                  We tasted hundreds of them and kept asking the same question:
                  why does the most beloved pastry in the world stop at the
                  surface?
                </p>
                <p>
                  That obsession turned into a kitchen experiment, then into a
                  habit, then into something we couldn&apos;t keep to ourselves.
                  We started stuffing rolls with cherry cobbler filling, Oreo
                  cream, classic New York cheesecake — flavors people didn&apos;t
                  know they needed inside a roll until they had one.
                </p>
                <p>
                  SWRL wasn&apos;t built on a business plan. It was built on a
                  craving that refused to go away — and the conviction that the
                  world deserved something better than plain.
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
                  Every roll starts with our signature dough — then we go deep.
                  Real fillings, layered inside, not just on top. Cherry cobbler,
                  Oreo cream, cheesecake. If it&apos;s craveable, we&apos;re stuffing it.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center px-4">
                <p className="text-swrl-pink font-display text-3xl mb-4">Perfect It</p>
                <p className="font-body text-swrl-black/70 text-base leading-relaxed">
                  Good enough isn&apos;t in our vocabulary. Every batch is made fresh
                  daily, every recipe tested until the texture, pull, and taste
                  hit exactly where they need to. No shortcuts, no compromises.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center px-4">
                <p className="text-swrl-pink font-display text-3xl mb-4">Share It</p>
                <p className="font-body text-swrl-black/70 text-base leading-relaxed">
                  A roll this good deserves a bigger stage. We built SWRL from
                  day one to be something others could bring to their communities —
                  a franchise-ready model so every neighborhood can have its own
                  SWRL.
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

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              We started a{" "}
              <span className="text-swrl-pink">movement.</span>&rdquo;
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
