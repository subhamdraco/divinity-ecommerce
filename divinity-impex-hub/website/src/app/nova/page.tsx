import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SegmentHero,
  FeatureCard,
  SegmentCTA,
} from "@/components/segments/SegmentPage";
import { getSegment } from "@/lib/segments";

const segment = getSegment("nova")!;

export const metadata: Metadata = {
  title: "NOVA Inner Compass — Leadership & Human Development",
  description: segment.description,
};

const challenges = [
  "Leadership silos & communication breakdowns",
  "Slow decision-making & change resistance",
  "Low accountability & weak execution discipline",
  "Cross-functional misalignment",
];

const outcomes = [
  "Stronger alignment & better decision quality",
  "Improved accountability & greater collaboration",
  "Leadership resilience & faster execution",
  "Healthier organisational culture",
];

const framework = [
  { step: "Aware", detail: "Understand leadership behaviours and performance realities." },
  { step: "Align", detail: "Create shared understanding, trust, and direction." },
  { step: "Activate", detail: "Experience new perspectives and behavioural shifts." },
  { step: "Apply", detail: "Translate insights into workplace action." },
  { step: "Amplify", detail: "Sustain growth through accountability and reflection." },
];

const stats = [
  { value: "8,500+", label: "Sessions Delivered" },
  { value: "13.4M+", label: "Participants Reached" },
  { value: "21", label: "Countries" },
  { value: "16", label: "World Records" },
];

export default function NovaPage() {
  return (
    <>
      <SegmentHero
        segment={segment}
        title="Building Better Leaders. Stronger Teams. Better Outcomes."
        subtitle="NOVA Inner Compass helps organisations strengthen leadership effectiveness, improve alignment, and create high-performing cultures through experiential learning."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-hub-navy">
                What NOVA Solves
              </h2>
              <ul className="mt-6 space-y-3">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-hub-slate">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-hub-navy">
                Measurable Impact
              </h2>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-hub-slate">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: segment.accent }} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-hub-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-2xl font-semibold text-hub-navy">
            5A Leadership Transformation Framework
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-5">
            {framework.map((item, i) => (
              <div key={item.step} className="rounded-xl bg-white p-5 text-center shadow-sm">
                <span className="font-display text-2xl font-bold" style={{ color: segment.accent }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-accent mt-2 text-sm font-bold uppercase tracking-wider text-hub-navy">
                  {item.step}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-hub-slate">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-gray-100 p-6 text-center">
                <p className="font-display text-3xl font-semibold" style={{ color: segment.accent }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-hub-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hub-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-10 text-center text-2xl font-semibold text-hub-navy">
            Explore NOVA Programs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/nova/corporate"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: segment.accent }}
            >
              <p className="font-accent text-xs font-semibold uppercase tracking-widest" style={{ color: segment.accent }}>
                For Organisations
              </p>
              <h3 className="font-display mt-2 text-xl font-semibold text-hub-navy">
                Corporate Leadership
              </h3>
              <p className="mt-3 text-sm text-hub-slate">
                Clarity Shift, Inner Clarity · Outer Impact, and senior management development programs.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: segment.accent }}>
                Explore Corporate <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/nova/schools"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: segment.accent }}
            >
              <p className="font-accent text-xs font-semibold uppercase tracking-widest" style={{ color: segment.accent }}>
                For Institutions
              </p>
              <h3 className="font-display mt-2 text-xl font-semibold text-hub-navy">
                Schools & Education
              </h3>
              <p className="mt-3 text-sm text-hub-slate">
                Student character development, teacher & parent impact, and community partnership models.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: segment.accent }}>
                Explore Schools <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SegmentCTA
        segment={segment}
        email="info@novaicompass.com"
        website="https://www.novaicompass.com"
      />
    </>
  );
}
