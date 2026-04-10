import Image from "next/image";
import PageWrapper from "@/components/layout/PageWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import Button from "@/components/ui/Button";
import { LOCATIONS } from "@/lib/constants";

export default function LocationsPage() {
  const openLocations = LOCATIONS.filter((l) => !l.comingSoon);
  const comingSoonLocations = LOCATIONS.filter((l) => l.comingSoon);

  return (
    <PageWrapper>
      {/* ── 1. Hero ── */}
      <section className="pt-32 pb-16 bg-swrl-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF5CA8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-swrl-black leading-tight mb-6">
              Find Your{" "}
              <span className="text-swrl-pink">SWRL</span>
            </h1>
            <p className="font-body text-swrl-black/60 text-lg max-w-xl mx-auto">
              From our flagship Charlotte location to cities across the South — there&apos;s a SWRL near you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. Open Locations ── */}
      <section className="py-16 bg-swrl-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-swrl-black">
              Open Locations
            </h2>
          </ScrollReveal>

          <StaggerChildren className="space-y-8">
            {openLocations.map((location) => (
              <StaggerItem key={location.name}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-video md:aspect-auto min-h-64">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <span className="inline-block bg-swrl-pink/10 text-swrl-pink font-body font-semibold text-xs uppercase tracking-widest rounded-full px-3 py-1 mb-4 w-fit">
                        Now Open
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-swrl-black mb-2">
                        {location.name}
                      </h3>
                      <p className="font-body text-swrl-black/60 mb-1">{location.address}</p>
                      {location.phone && (
                        <p className="font-body text-swrl-black/60 mb-1">{location.phone}</p>
                      )}
                      {location.hours && (
                        <p className="font-body text-swrl-black/60 mb-6">{location.hours}</p>
                      )}
                      {location.mapsUrl && (
                        <div>
                          <Button href={location.mapsUrl} size="md" variant="primary">
                            Get Directions
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 3. Coming Soon ── */}
      <section className="py-24 bg-swrl-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-swrl-white">
              Coming Soon
            </h2>
            <p className="font-body text-swrl-cream/60 mt-3 text-lg">
              We&apos;re rolling out to new cities. Stay close.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonLocations.map((location) => (
              <StaggerItem key={location.name}>
                <div className="group relative rounded-2xl overflow-hidden aspect-square">
                  {/* Blurred image */}
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover blur-sm group-hover:blur-none transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-swrl-black/60 group-hover:bg-swrl-black/40 transition-colors duration-500" />
                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <p className="font-display text-2xl md:text-3xl text-swrl-white mb-2">
                      {location.city}
                    </p>
                    <span className="font-body text-swrl-pink text-sm font-semibold uppercase tracking-widest">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 4. Franchise CTA ── */}
      <section className="py-16 bg-swrl-black border-t border-swrl-pink/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="font-body text-swrl-cream/60 text-lg mb-3">
              Don&apos;t see your city?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-swrl-white mb-8">
              Bring SWRL to your market.
            </h2>
            <Button href="/franchise" size="lg" variant="primary">
              Learn About Franchising
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
