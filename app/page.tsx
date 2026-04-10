import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import FeaturedRolls from "@/components/sections/FeaturedRolls";
import ProcessSection from "@/components/sections/ProcessSection";
import StorefrontTeaser from "@/components/sections/StorefrontTeaser";
import FranchiseTeaser from "@/components/sections/FranchiseTeaser";
import InstagramStrip from "@/components/sections/InstagramStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedRolls />
      <ProcessSection />
      <StorefrontTeaser />
      <FranchiseTeaser />
      <InstagramStrip />
    </>
  );
}
