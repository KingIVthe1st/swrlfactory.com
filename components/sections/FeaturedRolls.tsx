"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MENU_ITEMS, MenuItem } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_ROLLS: MenuItem[] = MENU_ITEMS.filter(
  (item) => item.category === "Signature Stuffed"
).slice(0, 4);

export default function FeaturedRolls() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-swrl-black relative"
    >
      {/* Pink timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] z-0 bg-gradient-to-r from-swrl-pink/0 via-swrl-pink to-swrl-pink/0 pointer-events-none" />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex items-center h-screen gap-8 px-[10vw]"
      >
        {/* Intro card */}
        <div className="flex-shrink-0 w-[80vw] md:w-[40vw] z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-swrl-white leading-tight">
            The{" "}
            <span className="text-swrl-pink">Lineup</span>
          </h2>
          <p className="mt-4 text-swrl-white/60 font-body text-lg">
            Four reasons you'll never look at cinnamon rolls the same way again.
          </p>
        </div>

        {/* Roll cards */}
        {FEATURED_ROLLS.map((roll, i) => (
          <motion.div
            key={roll.name}
            className="flex-shrink-0 w-[75vw] md:w-[35vw] z-10"
            initial={{ rotateY: 5 }}
            whileInView={{ rotateY: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-3xl overflow-hidden bg-swrl-black/80 border border-swrl-white/10 shadow-2xl">
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={roll.image}
                  alt={roll.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 35vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-swrl-black via-swrl-black/20 to-transparent" />

                {/* Name / description / price at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-swrl-white/60 font-body text-xs uppercase tracking-widest mb-1">
                    Signature Stuffed
                  </p>
                  <h3 className="text-swrl-white font-display text-2xl leading-tight">
                    {roll.name}
                  </h3>
                  <p className="text-swrl-white/70 font-body text-sm mt-1 line-clamp-2">
                    {roll.description}
                  </p>
                  <p className="text-swrl-pink font-display text-xl mt-3">
                    ${roll.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA card */}
        <div className="flex-shrink-0 w-[60vw] md:w-[25vw] flex items-center justify-center z-10">
          <Link
            href="/menu"
            className="group inline-flex flex-col items-center gap-4 text-center"
          >
            <span className="text-swrl-white font-display text-3xl md:text-4xl group-hover:text-swrl-pink transition-colors duration-300">
              See Full Menu
            </span>
            <span className="text-swrl-pink font-display text-5xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
