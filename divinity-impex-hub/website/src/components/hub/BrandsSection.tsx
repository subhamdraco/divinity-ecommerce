"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { trustedBrands } from "@/lib/content";
import { cardHover } from "@/lib/motion";

const brandStyles = [
  { accent: "#C45B7A" },
  { accent: "#006BB3" },
  { accent: "#0E7C7B" },
  { accent: "#B8860B" },
];

export function BrandsSection() {
  const reduced = useReducedMotion();

  return (
    <section id="brands" className="mesh-dark grain-overlay relative overflow-hidden py-20 sm:py-28">
      <ParallaxOrbs variant="light" count={3} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <SectionHeading
            eyebrow="Portfolio"
            title="Trusted Brands, Global Reach"
            description="A diverse portfolio spanning personal care, fragrance, nutrition, and performance — each crafted to international standards."
            align="center"
            showLines
          />
        </Reveal>
        <RevealStagger className="mt-16 grid gap-4 sm:grid-cols-2">
          {trustedBrands.map((brand, i) => {
            const style = brandStyles[i];
            const isFeatured = i === 0;
            return (
              <RevealItem key={brand.name} variant="scale" className={isFeatured ? "sm:col-span-2" : ""}>
                <motion.article
                  className={`glass-card-dark group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-7 ${isFeatured ? "min-h-[200px]" : "min-h-[160px]"}`}
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl"
                    style={{ backgroundColor: style.accent }}
                    animate={reduced ? undefined : { opacity: [0.15, 0.35, 0.15], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    aria-hidden
                  />
                  <div>
                    <p className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">{brand.category}</p>
                    <h3 className={`font-display mt-2 font-semibold text-hub-navy ${isFeatured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{brand.name}</h3>
                  </div>
                  {isFeatured && (
                    <p className="mt-4 text-sm leading-relaxed text-hub-slate">
                      Premium quality at accessible price points — distributed across Africa, Middle East, and Asia Pacific.
                    </p>
                  )}
                  <motion.div
                    className="mt-4 h-0.5 rounded-full"
                    style={{ backgroundColor: style.accent }}
                    initial={{ width: 32 }}
                    whileHover={{ width: 80 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
