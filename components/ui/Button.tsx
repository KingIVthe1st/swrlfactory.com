"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
        className="inline-flex"
      >
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
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
  );
}
