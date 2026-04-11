"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "@/components/animations/Typewriter";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import DualCTA from "@/components/ui/DualCTA";

interface Particle {
  id: number;
  left: string;
  delay: string;
  size: string;
  duration: string;
}

interface GoldParticle {
  id: number;
  left: string;
  delay: string;
  duration: string;
}

// Particles are generated client-only after mount to avoid hydration
// mismatches — the server can't predict the same Math.random() values
// that the client will produce during hydration.
function buildParticles(): Particle[] {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    size: `${3 + Math.random() * 4}px`,
    duration: `${6 + Math.random() * 6}s`,
  }));
}

function buildGoldParticles(): GoldParticle[] {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 6}s`,
  }));
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Empty on server + initial client render — populated in useEffect
  // below (client-only, post-hydration). Keeps server and client trees
  // identical so React hydration never mismatches.
  const [particles, setParticles] = useState<Particle[]>([]);
  const [goldParticles, setGoldParticles] = useState<GoldParticle[]>([]);

  useEffect(() => {
    setParticles(buildParticles());
    setGoldParticles(buildGoldParticles());
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-swrl-black vignette">
      {/* Parallax Background Image with Ken Burns zoom */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1.0, 1.15, 1.0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Gourmet SWRL cinnamon roll"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-swrl-black/40 via-swrl-black/20 to-swrl-black/80" />
        {/* Breathing light effect — simulates cinematic video feel */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-swrl-pink/10 via-transparent to-swrl-gold/5"
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
        {goldParticles.map((p) => (
          <div
            key={`gold-${p.id}`}
            className="particle-gold"
            style={{
              left: p.left,
              bottom: "-10px",
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Logo — renders at final size immediately. The hero's overall
            motion (Ken Burns background, typewriter tagline, eyebrow fade)
            carries the entrance. Sized so the dual CTAs below the tagline
            stay comfortably in view on standard viewports. */}
        <Image
          src="/images/swrl-logo.jpeg"
          alt="SWRL Cinnamon Roll Factory"
          width={600}
          height={600}
          className="w-72 md:w-80 lg:w-96 h-auto rounded-2xl"
          priority
        />

        {/* Tagline */}
        <div className="mt-8 text-2xl md:text-4xl lg:text-5xl font-display text-swrl-white">
          <Typewriter text="Life's Too Short for Boring Rolls." delay={1.5} speed={60} />
        </div>

        {/* Eyebrow + Dual CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1.2 }}
          className="mt-8 flex flex-col items-center gap-5"
        >
          <EyebrowLabel className="text-swrl-pink/80">
            Life&apos;s too short for boring rolls. And boring businesses.
          </EyebrowLabel>
          <DualCTA
            primary={{ label: "Order Now", href: "/menu" }}
            secondary={{ label: "Own a SWRL™ →", href: "/franchise" }}
            size="md"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-swrl-white/50">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
