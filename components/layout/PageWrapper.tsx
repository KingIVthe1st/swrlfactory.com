"use client";

import { motion } from "framer-motion";
import { PAGE_TRANSITION } from "@/lib/animations";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PAGE_TRANSITION}
    >
      {children}
    </motion.main>
  );
}
