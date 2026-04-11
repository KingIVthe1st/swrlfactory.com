import Image from "next/image";
import Link from "next/link";
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
              One store open. More on the way. And the one you build.
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

      {/* ── 3. Unclaimed Territories ── */}
      <section className="py-24 bg-swrl-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-swrl-white">
              Unclaimed Territories
            </h2>
            <p className="font-body text-swrl-cream/60 mt-3 text-lg">
              These markets are open. Someone will own them.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonLocations.map((location) => (
              <StaggerItem key={location.name}>
                <Link
                  href={`/franchise?territory=${encodeURIComponent(location.city)}`}
                  className="block rounded-2xl border border-swrl-pink/20 bg-swrl-white/[0.02] p-8 hover:border-swrl-pink/50 transition-colors"
                >
                  {/* Blurred image backdrop */}
                  <div className="relative rounded-xl overflow-hidden aspect-video mb-6">
                    <Image
                      src={location.image}
                      alt={location.city}
                      fill
                      className="object-cover blur-sm"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-swrl-black/60" />
                  </div>
                  <p className="text-xs font-body uppercase tracking-[0.2em] text-swrl-pink mb-2">
                    Owner: Unclaimed
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-swrl-white">
                    {location.city}, {location.state}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── 4. Franchise CTA ── */}
      <section className="py-20 bg-swrl-black border-t border-swrl-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-swrl-white/70 text-lg mb-6">
            Don&apos;t see your city? It&apos;s still on the map.
          </p>
          <Button href="/franchise" size="lg">
            Claim a Territory →
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
