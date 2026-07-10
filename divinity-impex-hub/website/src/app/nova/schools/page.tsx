import type { Metadata } from "next";
import { SegmentHero, FeatureCard, FeatureGrid, SegmentCTA } from "@/components/segments/SegmentPage";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getSegment } from "@/lib/segments";

const segment = getSegment("nova")!;

export const metadata: Metadata = {
  title: "NOVA — Schools & Student Development",
  description:
    "Transformative experiential student development programs focusing on character, resilience, and positive decision-making.",
};

const outcomes = [
  {
    title: "Improved Focus",
    description: "Better focus on studies, goals, and long-term personal development.",
  },
  {
    title: "Discipline & Responsibility",
    description: "Reduced distraction mindset with greater emotional resilience.",
  },
  {
    title: "Character & Values",
    description: "Stronger awareness of values, respect for parents, teachers, and society.",
  },
  {
    title: "Teacher & Parent Impact",
    description: "Improved student motivation, discipline, communication, and emotional wellbeing.",
  },
  {
    title: "Sponsor Partnerships",
    description: "Collaboration model for sponsors supporting education and youth development.",
  },
  {
    title: "Direct School Engagement",
    description: "Schools may engage the program independently or through community partnerships.",
  },
];

export default function NovaSchoolsPage() {
  return (
    <>
      <Breadcrumb segment={segment} subPage="Schools" />
      <section className="mesh-dark py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-hub-gold">
            Student Focus & Character Development
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold text-hub-navy sm:text-5xl">
            Schools & Education
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-hub-slate">
            Helping students stay focused in an increasingly distracted world through immersive experiential learning.
          </p>
        </div>
      </section>
      <FeatureGrid>
        {outcomes.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            accent={segment.accent}
          />
        ))}
      </FeatureGrid>
      <SegmentCTA segment={segment} email="info@novaicompass.com" website="https://www.novaicompass.com" />
    </>
  );
}
