import type { Metadata } from "next";
import { SegmentHero, FeatureCard, FeatureGrid, SegmentCTA } from "@/components/segments/SegmentPage";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getSegment } from "@/lib/segments";

const segment = getSegment("nova")!;

export const metadata: Metadata = {
  title: "NOVA — Corporate Leadership Programs",
  description:
    "High-impact experiential leadership programs including Clarity Shift and Inner Clarity · Outer Impact.",
};

const programs = [
  {
    title: "Clarity Shift",
    description:
      "A high-impact experiential program strengthening leadership thinking, communication, alignment, and decision-making through behavioural insights and guided debriefs.",
  },
  {
    title: "Inner Clarity · Outer Impact",
    description:
      "Focuses on the human side of leadership — self-awareness, communication, resilience, and leadership presence under pressure.",
  },
  {
    title: "Senior Management Development",
    description:
      "Offsites, annual conferences, and strategic alignment sessions for senior and mid-management teams.",
  },
  {
    title: "CSR & Community Programs",
    description:
      "Large-scale employee engagement and corporate-to-community bridge programs delivered at scale.",
  },
];

export default function NovaCorporatePage() {
  return (
    <>
      <Breadcrumb segment={segment} subPage="Corporate" />
      <section className="mesh-dark py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-hub-gold">
            Signature Corporate Experiences
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold text-hub-navy sm:text-5xl">
            Corporate Leadership
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-hub-slate">
            Helping leaders gain clarity and move forward with purpose. Leadership · Vision · Decision-Making · Alignment.
          </p>
        </div>
      </section>
      <FeatureGrid>
        {programs.map((program) => (
          <FeatureCard
            key={program.title}
            title={program.title}
            description={program.description}
            accent={segment.accent}
          />
        ))}
      </FeatureGrid>
      <SegmentCTA segment={segment} email="info@novaicompass.com" website="https://www.novaicompass.com" />
    </>
  );
}
