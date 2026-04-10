"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    image: "/images/process-dough.jpg",
  },
  {
    number: "02",
    title: "Stuff",
    subtitle: "Loaded. Overflowing. Ridiculous.",
    description:
      "Cherry cobbler. Oreo crumble. Strawberry cheesecake. We stuff them until they can't take any more.",
    gradient: "from-swrl-pink/60 to-swrl-black",
    image: "/images/process-stuff.jpg",
  },
  {
    number: "03",
    title: "Glaze",
    subtitle: "Drowned in Perfection.",
    description:
      "House-made cream cheese icing, caramel drizzle, white chocolate — every roll gets the royal treatment.",
    gradient: "from-swrl-gold/50 to-swrl-black",
    image: "/images/process-glaze.jpg",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".process-panel");

    const triggers = panels.map((panel, i) => {
      const title = panel.querySelector(".process-title");
      const desc = panel.querySelector(".process-desc");
      const subtitle = panel.querySelector(".process-subtitle");

      // Animate panel content on enter
      gsap.set(title, { scale: 0.8, opacity: 0 });
      gsap.set(subtitle, { opacity: 0, y: 20 });
      gsap.set(desc, { opacity: 0, y: 20 });

      const tl = gsap.timeline({ paused: true });
      tl.to(title, { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" })
        .to(subtitle, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.3")
        .to(desc, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2");

      return ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          tl.play();
          setActiveStep(i);
        },
        onEnterBack: () => {
          tl.play();
          setActiveStep(i);
        },
        onLeave: () => {
          tl.reverse();
        },
        onLeaveBack: () => {
          tl.reverse();
        },
      });
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Step counter */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 pointer-events-none">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={`flex items-center gap-2 transition-all duration-500 ${
              activeStep === i ? "opacity-100" : "opacity-30"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeStep === i
                  ? "bg-swrl-pink scale-150"
                  : "bg-swrl-white/40 scale-100"
              }`}
            />
            <span
              className={`text-xs font-body tracking-widest uppercase transition-all duration-500 ${
                activeStep === i ? "text-swrl-pink" : "text-swrl-white/40"
              }`}
            >
              {step.number}
            </span>
          </div>
        ))}
      </div>

      {steps.map((step) => (
        <section
          key={step.number}
          className={`process-panel relative h-screen flex items-center justify-center bg-gradient-to-b ${step.gradient}`}
        >
          <Image src={step.image} alt={step.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-swrl-pink font-body text-sm tracking-[0.3em] uppercase mb-6">
              Step {step.number}
            </p>
            <h2 className="process-title text-6xl md:text-8xl lg:text-9xl font-display text-swrl-white leading-none mb-6">
              {step.title}
            </h2>
            <p className="process-subtitle text-2xl md:text-3xl font-display text-swrl-cream mb-6">
              {step.subtitle}
            </p>
            <p className="process-desc font-body text-swrl-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              {step.description}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
