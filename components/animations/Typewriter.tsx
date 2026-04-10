"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  delay = 1000,
  speed = 50,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  // First effect: wait for delay then start typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Second effect: reveal characters one by one once started
  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  const isTyping = displayText.length < text.length;

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
