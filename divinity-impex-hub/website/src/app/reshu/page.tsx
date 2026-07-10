import type { Metadata } from "next";
import {
  SegmentHero,
  FeatureCard,
  FeatureGrid,
  SegmentCTA,
} from "@/components/segments/SegmentPage";
import { getSegment } from "@/lib/segments";

const segment = getSegment("reshu")!;

export const metadata: Metadata = {
  title: "Reshu — FMCG / Personal Care Range",
  description: segment.description,
};

const categories = [
  {
    title: "Skincare",
    description:
      "Premium formulations crafted for daily luxury and long-lasting skin health.",
  },
  {
    title: "Hair Care",
    description:
      "Nourishing products designed for diverse hair types and climates.",
  },
  {
    title: "Body Care",
    description:
      "Indulgent body care lines that elevate everyday routines.",
  },
  {
    title: "Fragrances & Hygiene",
    description:
      "International fragrance and hygiene brands including Bonjour and Especial.",
  },
  {
    title: "Wellness",
    description:
      "Holistic personal care products aligned with modern wellness trends.",
  },
  {
    title: "Sister Brands",
    description:
      "Reshu sits alongside Naomi, Bonjour, and Especial under the Divinity Impex umbrella.",
  },
];

export default function ReshuPage() {
  return (
    <>
      <SegmentHero
        segment={segment}
        title="Daily Luxury, Skincare Excellence"
        subtitle="Elegant personal care solutions crafted for everyday indulgence. Reshu brings international quality to personal care at accessible price points."
      />
      <FeatureGrid>
        {categories.map((cat) => (
          <FeatureCard
            key={cat.title}
            title={cat.title}
            description={cat.description}
            accent={segment.accent}
          />
        ))}
      </FeatureGrid>
      <SegmentCTA segment={segment} email="info@divinityimpex.com" />
    </>
  );
}
