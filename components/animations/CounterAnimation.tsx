"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterAnimationProps {
  value: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function CounterAnimation({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayText, setDisplayText] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part from value string
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) return;

    const target = parseFloat(numericMatch[0]);
    const isFloat = numericMatch[0].includes(".");
    const decimalPlaces = isFloat ? (numericMatch[0].split(".")[1] || "").length : 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      const formattedNum = isFloat
        ? current.toFixed(decimalPlaces)
        : Math.floor(current).toString();

      // Replace numeric part in original value string
      setDisplayText(value.replace(numericMatch[0], formattedNum));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayText}
      {suffix}
    </span>
  );
}
