"use client";

import { motion } from "framer-motion";
import { PAGE_TRANSITION } from "@/lib/animations";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    // initial={false} skips the entrance animation on first mount so the
    // page renders at its final state immediately. Strict-mode double-mount
    // in dev was interrupting the variant animation and freezing the whole
    // page at ~40% opacity. Page-to-page transitions still animate because
    // AnimatePresence drives the exit+enter variants on route change.
    <motion.main
      initial={false}
      animate="animate"
      exit="exit"
      variants={PAGE_TRANSITION}
    >
      {children}
    </motion.main>
  );
}
