"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Dough",
    subtitle: "Made From Scratch. Every. Single. Day.",
    description:
      "No shortcuts. No frozen dough. Just flour, butter, and a whole lot of patience.",
    gradient: "from-amber-900/80 to-swrl-black",
  },
  {
    number: "02",
    title: "Stuff",
    subtitle: "Loaded. Overflowing. Ridiculous.",
    description:
      "Cherry cobbler. Oreo crumble. Strawberry cheesecake. We stuff them until they can't take any more.",
    gradient: "from-swrl-pink/60 to-swrl-black",
  },
  {
    number: "03",
    title: "Glaze",
    subtitle: "Drowned in Perfection.",
    description:
      "House-made cream cheese icing, caramel drizzle, white chocolate — every roll gets the royal treatment.",
    gradient: "from-swrl-gold/50 to-swrl-black",
  },
];

export default function ProcessSection() {
  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".process-panel");

    const triggers = panels.map((panel) =>
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      })
    );

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {steps.map((step) => (
        <section
          key={step.number}
          className={`process-panel h-screen flex items-center justify-center bg-gradient-to-b ${step.gradient}`}
        >
          <div className="text-center px-6 max-w-4xl mx-auto">
            <p className="text-swrl-pink font-body text-sm tracking-[0.3em] uppercase mb-6">
              Step {step.number}
            </p>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-swrl-white leading-none mb-6">
              {step.title}
            </h2>
            <p className="text-2xl md:text-3xl font-display text-swrl-cream mb-6">
              {step.subtitle}
            </p>
            <p className="font-body text-swrl-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              {step.description}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}
