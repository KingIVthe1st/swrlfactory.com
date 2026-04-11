"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

interface InlineInquiryCaptureProps {
  source?: string;
  className?: string;
}

export default function InlineInquiryCapture({
  source = "homepage-capture",
  className = "",
}: InlineInquiryCaptureProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Enter your email to continue.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError("That email doesn't look right.");
      return;
    }

    const params = new URLSearchParams({
      email: trimmed,
      source,
    });
    router.push(`/franchise?${params.toString()}`);
  };

  return (
    <div className={`max-w-2xl mx-auto text-center ${className}`}>
      <EyebrowLabel className="mb-3">Interested?</EyebrowLabel>
      <h3 className="font-display text-3xl md:text-4xl text-swrl-white mb-3">
        Get the franchise kit.
      </h3>
      <p className="font-body text-swrl-white/60 text-sm md:text-base mb-6">
        One email. The real document — no vague pitch deck.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
        noValidate
      >
        <label htmlFor="inline-inquiry-email" className="sr-only">
          Email address
        </label>
        <input
          id="inline-inquiry-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 h-14 px-5 rounded-xl bg-swrl-white/5 border border-swrl-white/10 text-swrl-white placeholder:text-swrl-white/30 focus:outline-none focus:border-swrl-pink font-body"
          aria-describedby={error ? "inline-inquiry-error" : undefined}
          aria-invalid={error ? "true" : undefined}
          required
        />
        <button
          type="submit"
          className="h-14 px-8 rounded-xl bg-swrl-pink text-swrl-white font-body font-semibold hover:shadow-lg hover:shadow-swrl-pink/40 transition-shadow whitespace-nowrap"
        >
          Send me the kit →
        </button>
      </form>

      {error && (
        <p
          id="inline-inquiry-error"
          className="mt-3 text-sm text-swrl-pink font-body"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
