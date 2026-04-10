"use client";

import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import { FRANCHISE_BENEFITS } from "@/lib/constants";

const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  "Proven Recipes & Training": (
    <svg className="w-7 h-7 text-swrl-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  "Store Design & Buildout": (
    <svg className="w-7 h-7 text-swrl-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22h20M6 18V7l-2 2M18 18V7l2 2M9 22V12h6v10M12 2l8 5v1H4V7l8-5z" />
    </svg>
  ),
  "Marketing Playbook": (
    <svg className="w-7 h-7 text-swrl-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 9v6l5-3-5-3z" />
      <path d="M3 8l4-4h10l4 4v4l-4 4H7l-4-4V8z" />
    </svg>
  ),
  "Supply Chain Access": (
    <svg className="w-7 h-7 text-swrl-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12h15M10 5h4a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2v-3" />
      <path d="M16 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-1" />
      <circle cx="7.5" cy="19" r="2" />
      <circle cx="17.5" cy="19" r="2" />
    </svg>
  ),
  "Operational Support": (
    <svg className="w-7 h-7 text-swrl-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
  ),
  "Territory Exclusivity": (
    <svg className="w-7 h-7 text-swrl-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

export default function BenefitGrid() {
  return (
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FRANCHISE_BENEFITS.map((benefit) => (
        <StaggerItem key={benefit.title}>
          <div className="bg-swrl-white/5 border border-swrl-pink/10 rounded-2xl p-6 h-full transition-colors duration-200 hover:border-swrl-pink/30">
            <div className="mb-4">
              {BENEFIT_ICONS[benefit.title] || <span className="text-3xl">{benefit.icon}</span>}
            </div>
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
