"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import DualCTA from "@/components/ui/DualCTA";
import MenuFilter from "@/components/menu/MenuFilter";
import MenuCard from "@/components/menu/MenuCard";
import { MENU_ITEMS, type MenuCategory } from "@/lib/constants";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");

  const filteredItems =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-swrl-cream overflow-hidden">
        {/* Rotating spiral decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-16 -right-16 w-64 h-64 opacity-10 pointer-events-none"
          aria-hidden="true"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 10 C140 10, 190 50, 190 100 C190 155, 145 190, 100 190 C55 190, 10 155, 10 100 C10 55, 45 20, 80 15"
              stroke="#FF5CA8"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M100 30 C130 30, 170 60, 170 100 C170 140, 135 170, 100 170 C65 170, 30 140, 30 100 C30 70, 55 40, 80 35"
              stroke="#FF5CA8"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M100 50 C120 50, 150 70, 150 100 C150 130, 125 150, 100 150 C75 150, 50 130, 50 100 C50 80, 65 58, 82 53"
              stroke="#FF5CA8"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            title="The Lineup."
            subtitle="Four flavors that built a phenomenon. Eight more on the way."
            light
          />
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-20 bg-swrl-cream/90 backdrop-blur-sm border-b border-swrl-black/10 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <MenuFilter active={activeCategory} onChange={setActiveCategory} />
        </div>
      </section>

      {/* Grid */}
      <section className="bg-swrl-cream min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-swrl-black/40 font-body text-lg py-24"
            >
              No items in this category yet.
            </motion.p>
          )}
        </div>
      </section>

      {/* Playbook strip */}
      <section className="py-16 bg-swrl-black border-t border-swrl-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-swrl-white/70 text-base md:text-lg leading-relaxed mb-4">
            Every recipe above is documented, protected, and trainable. Franchise
            owners get the entire book.
          </p>
          <a
            href="/franchise"
            className="inline-block text-swrl-pink font-body font-semibold text-sm uppercase tracking-widest underline underline-offset-4 decoration-swrl-pink/40 hover:decoration-swrl-pink transition-colors"
          >
            Own the playbook →
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-swrl-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-swrl-white mb-8">
            Can&apos;t decide?
          </h2>
          <DualCTA
            primary={{ label: "Visit Us in Charlotte →", href: "/locations" }}
            secondary={{ label: "Bring SWRL to Your City →", href: "/franchise" }}
            size="md"
          />
        </div>
      </section>
    </PageWrapper>
  );
}
