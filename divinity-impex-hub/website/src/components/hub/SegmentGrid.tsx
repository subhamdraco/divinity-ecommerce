"use client";

import { SegmentCard } from "@/components/ui/SegmentCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { segments } from "@/lib/segments";

export function SegmentGrid() {
  return (
    <section id="segments" className="mesh-light relative overflow-hidden py-12 sm:py-16">
      <ParallaxOrbs variant="light" count={2} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="Business Verticals"
            title="Four Pillars of Excellence"
            description="Each division carries its own identity and expertise — united under one global vision of quality, innovation, and human impact."
            align="center"
            showLines
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment, i) => (
            <SegmentCard key={segment.id} segment={segment} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
