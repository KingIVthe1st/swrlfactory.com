import Image from "next/image";

const images = [
  { src: "/images/hero-bg.jpg", alt: "SWRL Cinnamon Roll" },
  { src: "/images/oreo-roll.png", alt: "Oreo Stuff'd Roll" },
  { src: "/images/strawberry-roll.jpg", alt: "Strawberry Cheesecake Roll" },
  { src: "/images/cherry-cobbler.png", alt: "Cherry Cobbler Roll" },
  { src: "/images/caramel-pecan-roll.jpg", alt: "Caramel Pecan Drizzle Roll" },
  { src: "/images/classic-roll.jpg", alt: "Classic Cinnamon Sugar Roll" },
  { src: "/images/pumpkin-roll.jpg", alt: "Pumpkin Spice Swirl Roll" },
  { src: "/images/process-glaze.jpg", alt: "Pouring Glaze on Rolls" },
];

const doubled = [...images, ...images];

export default function InstagramStrip() {
  return (
    <section className="py-16 bg-swrl-black overflow-hidden">
      <div className="text-center mb-10">
        <p className="font-body text-swrl-white/50 text-xs md:text-sm uppercase tracking-widest mb-3">
          Every post below is free marketing for every SWRL™ owner.
        </p>
        <a
          href="https://instagram.com/swrlfactory"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-swrl-white/60 hover:text-swrl-pink transition-colors duration-200 text-sm tracking-widest uppercase"
        >
          @swrlfactory
        </a>
      </div>

      <div className="flex animate-scroll-left">
        {doubled.map((image, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 mx-1 rounded-lg overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
