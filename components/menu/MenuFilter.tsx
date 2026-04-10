"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MENU_CATEGORIES, type MenuCategory } from "@/lib/constants";

interface MenuFilterProps {
  active: MenuCategory;
  onChange: (category: MenuCategory) => void;
}

export default function MenuFilter({ active, onChange }: MenuFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeEl = container.querySelector<HTMLButtonElement>(
      `[data-category="${active}"]`
    );
    if (!activeEl) return;

    setIndicator({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
    });
  }, [active]);

  return (
    <div className="relative flex justify-center">
      <div
        ref={containerRef}
        className="relative inline-flex items-center gap-1 px-2"
      >
        {MENU_CATEGORIES.map((category) => (
          <button
            key={category}
            data-category={category}
            onClick={() => onChange(category)}
            className={`relative z-10 px-5 py-2.5 text-sm font-body transition-colors duration-200 whitespace-nowrap ${
              active === category
                ? "text-swrl-pink font-bold"
                : "text-swrl-black/50 hover:text-swrl-black/80"
            }`}
          >
            {category}
          </button>
        ))}

        {/* Animated sliding underline */}
        <motion.div
          className="absolute bottom-0 h-[3px] bg-swrl-pink rounded-full"
          animate={{
            left: indicator.left,
            width: indicator.width,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </div>
    </div>
  );
}
