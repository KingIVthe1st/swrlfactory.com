"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import DualCTA from "@/components/ui/DualCTA";

export default function StorefrontTeaser() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 50% 0 50%)", "inset(0 0% 0 0%)"]
  );

  return (
    <section className="py-32 bg-swrl-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          <motion.div
            style={{ clipPath }}
            className="aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden"
          >
            <Image
              src="/images/storefront.png"
              alt="SWRL Factory Storefront"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-5xl md:text-7xl font-display text-swrl-black mb-6">
            This is where it happens. Next,{" "}
            <span className="text-swrl-pink">it happens at yours.</span>
          </h2>
          <p className="font-body text-swrl-black/60 text-lg mb-2">
            1234 Trade Street, Charlotte, NC 28202
          </p>
          <p className="font-body text-swrl-black/60 text-lg mb-10">
            Mon–Sat 7AM–9PM · Sun 8AM–6PM
          </p>
          <DualCTA
            primary={{ label: "Find Your SWRL →", href: "/locations" }}
            secondary={{ label: "Build Your Own →", href: "/franchise" }}
            size="md"
          />
        </div>
      </div>
    </section>
  );
}
