"use client";

import { motion } from "framer-motion";
import CounterAnimation from "@/components/animations/CounterAnimation";

interface StatCardProps {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  index: number;
}

export default function StatCard({
  label,
  value,
  prefix = "",
  suffix = "",
  index,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 90 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: "1000px" }}
      className="bg-swrl-white/5 border border-swrl-pink/20 rounded-2xl p-8 backdrop-blur-sm text-center"
    >
      <p className="text-4xl md:text-5xl font-display text-swrl-pink mb-3">
        <CounterAnimation value={value} prefix={prefix} suffix={suffix} />
      </p>
      <p className="text-swrl-cream/80 font-body text-sm">{label}</p>
    </motion.div>
  );
}
