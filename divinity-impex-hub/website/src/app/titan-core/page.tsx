import type { Metadata } from "next";
import {
  SegmentHero,
  FeatureCard,
  FeatureGrid,
  SegmentCTA,
} from "@/components/segments/SegmentPage";
import { getSegment } from "@/lib/segments";

const segment = getSegment("titan-core")!;

export const metadata: Metadata = {
  title: "Titan Core — Sports Supplement Range",
  description: segment.description,
};

const features = [
  {
    title: "Product Range",
    description:
      "Protein, pre-workout, recovery, and vitamin formulations designed for athletes and health enthusiasts.",
  },
  {
    title: "Science-Backed Formulations",
    description:
      "R&D-driven products with rigorous multi-stage testing and international safety certifications.",
  },
  {
    title: "Global Distribution",
    description:
      "Available across Africa, the Middle East, and Asia Pacific through Divinity Impex's distribution network.",
  },
  {
    title: "Partner With Us",
    description:
      "Distributor and retail partnership opportunities backed by unbeatable volume economics.",
  },
];

export default function TitanCorePage() {
  return (
    <>
      <SegmentHero
        segment={segment}
        title="Fuel Your Performance"
        subtitle="Cutting-edge nutrition and performance products for the modern health enthusiast. Titan Core delivers science-backed supplements at disruptive price points."
      />
      <FeatureGrid>
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            accent={segment.accent}
          />
        ))}
      </FeatureGrid>
      <SegmentCTA segment={segment} email="info@divinityimpex.com" />
    </>
  );
}
