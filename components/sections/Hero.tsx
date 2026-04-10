"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "@/components/animations/Typewriter";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    size: `${3 + Math.random() * 4}px`,
    duration: `${6 + Math.random() * 6}s`,
  }));

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-swrl-black">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/oreo-roll.png"
          alt="Gourmet SWRL cinnamon roll"
          fill
          className="object-cover scale-110"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-swrl-black/60 via-swrl-black/40 to-swrl-black" />
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
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/images/swrl-logo.jpeg"
            alt="SWRL Cinnamon Roll Factory"
            width={400}
            height={165}
            className="w-64 md:w-80 lg:w-96 h-auto"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <div className="mt-8 text-2xl md:text-4xl lg:text-5xl font-display text-swrl-white">
          <Typewriter text="Life's Too Short for Boring Rolls." delay={1.5} speed={60} />
        </div>

        {/* Franchise Seed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1.5 }}
          className="mt-6"
        >
          <Link
            href="/franchise"
            className="text-swrl-pink/70 text-sm font-body tracking-widest uppercase hover:text-swrl-pink transition-colors duration-300"
          >
            Obsessed? Own One.
          </Link>
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
