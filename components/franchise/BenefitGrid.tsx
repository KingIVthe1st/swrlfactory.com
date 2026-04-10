"use client";

import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import { FRANCHISE_BENEFITS } from "@/lib/constants";

export default function BenefitGrid() {
  return (
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FRANCHISE_BENEFITS.map((benefit) => (
        <StaggerItem key={benefit.title}>
          <div className="bg-swrl-white/5 border border-swrl-pink/10 rounded-2xl p-6 h-full transition-colors duration-200 hover:border-swrl-pink/30">
            <p className="text-3xl mb-4">{benefit.icon}</p>
            <h3 className="text-lg font-display text-swrl-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-swrl-cream/60 text-sm font-body leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
