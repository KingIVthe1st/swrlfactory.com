"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MenuItem } from "@/lib/constants";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-swrl-pink/10 transition-shadow duration-300 overflow-hidden"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-swrl-pink text-white font-body font-bold text-sm px-3 py-1.5 rounded-full shadow-md">
          ${item.price.toFixed(2)}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-swrl-pink font-body text-xs uppercase tracking-widest mb-1">
          {item.category}
        </p>
        <h3 className="text-swrl-black font-display text-xl leading-tight">
          {item.name}
        </h3>
        {item.tagline && (
          <p className="text-swrl-pink font-body text-xs font-semibold uppercase tracking-wider mt-1">
            {item.tagline}
          </p>
        )}
        <p className="text-swrl-black/60 font-body text-sm mt-2 leading-relaxed">
          {item.description}
        </p>

        {/* Animated ingredients section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="ingredients"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-swrl-black/10">
                <p className="text-swrl-black/50 font-body text-xs uppercase tracking-wider mb-2">
                  Ingredients
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {item.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="text-xs font-body bg-swrl-cream text-swrl-black/70 px-2.5 py-1 rounded-full"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
