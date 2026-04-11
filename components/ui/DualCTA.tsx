"use client";

import Button from "@/components/ui/Button";

interface CTASpec {
  label: string;
  href: string;
}

interface DualCTAProps {
  primary: CTASpec;
  secondary: CTASpec;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function DualCTA({
  primary,
  secondary,
  size = "lg",
  className = "",
}: DualCTAProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}
    >
      <Button href={primary.href} size={size} variant="primary">
        {primary.label}
      </Button>
      <Button href={secondary.href} size={size} variant="outline">
        {secondary.label}
      </Button>
    </div>
  );
}
