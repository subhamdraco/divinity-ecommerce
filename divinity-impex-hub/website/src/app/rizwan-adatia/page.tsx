import type { Metadata } from "next";
import {
  SegmentHero,
  FeatureCard,
  FeatureGrid,
  SegmentCTA,
} from "@/components/segments/SegmentPage";
import { getSegment } from "@/lib/segments";

const segment = getSegment("rizwan-adatia")!;

export const metadata: Metadata = {
  title: "Rizwan Adatia — Entrepreneur · Philanthropist · Speaker",
  description: segment.description,
};

const ventures = [
  {
    title: "COGEF Group",
    description:
      "A global trade conglomerate operating in 10 African countries with offices in China and the UAE — a leader in FMCG and ethical business practices.",
  },
  {
    title: "RAF Global",
    description:
      "Founded in 2015, positively impacting millions through economic integration, sustainable agriculture, health, education, and good governance.",
  },
  {
    title: "Human for Humans",
    description:
      "A global compassion movement encouraging individuals, businesses, and organizations to work collectively for the greater good of humanity.",
  },
  {
    title: "Speaking & Media",
    description:
      "56 global awards, motivational speaking on meditation, positive thinking, and social impact. Biopic 'Rizwan' viewed by 2.5M+ people.",
  },
];

const pillars = [
  "Meditation & Inner Peace",
  "Yoga & Mind-Body Connection",
  "Stress Management",
  "Health & Family Well-being",
  "Balance in Life",
  "Power of Positive Thinking",
];

export default function RizwanAdatiaPage() {
  return (
    <>
      <SegmentHero
        segment={segment}
        title="Visionary Entrepreneur, Philanthropist, and Advocate for Positive Change"
        subtitle="From humble beginnings in Porbandar, Gujarat to global leadership — Rizwan Adatia's journey embodies resilience, compassion, and purpose-driven success."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl italic text-hub-navy sm:text-3xl">
              &ldquo;Success is measured by the lives we uplift.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-hub-slate">— Rizwan Adatia</footer>
          </blockquote>
        </div>
      </section>

      <FeatureGrid>
        {ventures.map((venture) => (
          <FeatureCard
            key={venture.title}
            title={venture.title}
            description={venture.description}
            accent={segment.accent}
          />
        ))}
      </FeatureGrid>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-10 text-center text-2xl font-semibold text-hub-navy">
            Core Pillars of Happiness & Fulfilment
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-sm font-medium text-hub-navy">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hub-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-4xl font-semibold" style={{ color: segment.accent }}>
            56
          </p>
          <p className="mt-2 text-hub-slate">Global Awards & Recognitions</p>
          <p className="mt-6 text-sm leading-relaxed text-hub-slate">
            Including Guinness World Records, Hind Ratna Award, Burj CEO Award, and US Special Congressional Recognition.
          </p>
        </div>
      </section>

      <SegmentCTA
        segment={segment}
        email="info@rizwanadatia.com"
        website="https://www.rizwanadatia.org"
      />
    </>
  );
}
