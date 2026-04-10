"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import type { Transition } from "framer-motion";

const springTransition: Transition = { type: "spring", stiffness: 300, damping: 20 };

const variantStyles = {
  primary:
    "bg-swrl-pink text-white hover:shadow-lg hover:shadow-swrl-pink/40",
  outline:
    "border-2 border-swrl-pink text-swrl-pink hover:bg-swrl-pink hover:text-white",
  ghost: "text-swrl-pink hover:bg-swrl-pink/10",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

function useMagnetic(strength: number = 5) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);
      const maxDist = 40;
      if (dist < maxDist + rect.width / 2) {
        const factor = strength / Math.max(dist, 1);
        x.set(distX * factor * 0.15);
        y.set(distY * factor * 0.15);
      }
    },
    [x, y, strength]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x, y, handleMouseMove, handleMouseLeave };
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-body font-medium transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";
  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(5);

  if (href) {
    return (
      <motion.div
        ref={ref}
        style={{ x, y }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
        className="inline-flex"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="inline-flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClass}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
