import { Hero } from "@/components/hub/Hero";
import { SegmentGrid } from "@/components/hub/SegmentGrid";
import { BrandsSection } from "@/components/hub/BrandsSection";
import { GlobalPresence } from "@/components/hub/GlobalPresence";
import { ManufacturingSection } from "@/components/hub/ManufacturingSection";
import { LeadershipPreview } from "@/components/hub/LeadershipPreview";
import { CTASection } from "@/components/hub/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SegmentGrid />
      <BrandsSection />
      <GlobalPresence />
      <ManufacturingSection />
      <LeadershipPreview />
      <CTASection />
    </>
  );
}
