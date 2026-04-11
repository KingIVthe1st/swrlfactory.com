"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "swrl-sticky-strip-dismissed";
const APPEAR_TRIGGER_ID = "featured-rolls";
const HIDE_TRIGGER_ID = "franchise-section";

export default function StickyFranchiseStrip() {
  const [visible, setVisible] = useState(false);
  // Lazy state initializer reads sessionStorage once on first client render.
  // On the server it returns false (no sessionStorage); the strip is hidden
  // by default, so there's no visible hydration mismatch.
  const [dismissed, setDismissed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });

  // Observe scroll-triggered show/hide sections
  useEffect(() => {
    if (dismissed) return;
    if (typeof window === "undefined") return;

    const appearEl = document.getElementById(APPEAR_TRIGGER_ID);
    const hideEl = document.getElementById(HIDE_TRIGGER_ID);

    if (!appearEl) return;

    const appearObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    appearObserver.observe(appearEl);

    // Hide observer: only hides the strip when the franchise section scrolls
    // into view. Intentionally does NOT re-show the strip on "no longer
    // intersecting" — the previous version incorrectly fired on mount
    // (franchise section was below viewport) and showed the strip on the
    // hero, before the user had even reached Featured Rolls.
    let hideObserver: IntersectionObserver | null = null;
    if (hideEl) {
      hideObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(false);
            }
          });
        },
        { threshold: 0.1 }
      );
      hideObserver.observe(hideEl);
    }

    return () => {
      appearObserver.disconnect();
      if (hideObserver) hideObserver.disconnect();
    };
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    setVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.aside
          role="complementary"
          aria-label="Franchise opportunity"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-swrl-pink shadow-lg shadow-swrl-pink/30"
        >
          <Link
            href="/franchise"
            className="flex items-center justify-center gap-3 py-3 md:py-4 px-4 text-swrl-white font-body font-semibold text-sm md:text-base hover:bg-swrl-pink/90 transition-colors"
          >
            <span>Thinking bigger? Own a SWRL™ →</span>
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss franchise banner"
            className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-swrl-white/80 hover:text-swrl-white focus:outline-none focus:ring-2 focus:ring-swrl-white rounded-full"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
