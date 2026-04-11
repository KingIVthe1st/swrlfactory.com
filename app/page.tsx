import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import FeaturedRolls from "@/components/sections/FeaturedRolls";
import SwrlThesis from "@/components/sections/SwrlThesis";
import ProcessSection from "@/components/sections/ProcessSection";
import StorefrontTeaser from "@/components/sections/StorefrontTeaser";
import FoundersNote from "@/components/sections/FoundersNote";
import FranchiseSection from "@/components/sections/FranchiseSection";
import InstagramStrip from "@/components/sections/InstagramStrip";
import StickyFranchiseStrip from "@/components/layout/StickyFranchiseStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <FeaturedRolls />
      <SwrlThesis />
      <ProcessSection />
      <StorefrontTeaser />
      <FoundersNote variant="dark" />
      <FranchiseSection />
      <InstagramStrip />
      <StickyFranchiseStrip />
    </>
  );
}
