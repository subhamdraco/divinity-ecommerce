"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Globe2, ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { trustedBrands } from "@/lib/content";

const reachStats = [
  { value: "200+", label: "In-house Brands" },
  { value: "30+", label: "Countries" },
  { value: "5", label: "Regions" },
  { value: "4", label: "Continents" },
];

const markets = ["Americas", "Europe", "Africa", "Middle East", "Asia Pacific"];

export function BrandsSection() {
  const reduced = useReducedMotion();

  return (
    <section id="brands" className="relative overflow-hidden bg-white py-12 sm:py-16">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(184,148,47,0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(47,158,158,0.06), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="grid items-end gap-6 border-b border-hub-border pb-8 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-7">
            <p className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-hub-gold">Portfolio</p>
            <h2 className="font-display mt-3 text-4xl font-bold leading-[0.95] tracking-[0.02em] text-hub-charcoal sm:text-5xl lg:text-6xl">
              Trusted Brands,
              <br />
              <span className="text-gold-gradient">Global Reach</span>
            </h2>
          </Reveal>
          <Reveal variant="right" delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-hub-slate sm:text-base lg:ml-auto lg:text-right">
              A diverse portfolio spanning personal care, fragrance, nutrition, and performance —
              each crafted to international standards and distributed worldwide.
            </p>
          </Reveal>
        </div>

        {/* Brand index — editorial rows, not cards */}
        <RevealStagger className="mt-2 divide-y divide-hub-border" fast>
          {trustedBrands.map((brand, i) => (
            <RevealItem key={brand.name} variant="up">
              <motion.article
                className="group grid items-center gap-4 py-6 sm:gap-6 lg:grid-cols-12 lg:py-7"
                initial="rest"
                whileHover="hover"
              >
                <div className="flex items-center gap-4 lg:col-span-1">
                  <span className="font-display text-2xl font-bold text-hub-gold/35 sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-4 lg:col-span-5">
                  {brand.logo ? (
                    <div className="relative flex h-12 w-16 shrink-0 items-center justify-center sm:h-14 sm:w-20">
                      <Image
                        src={brand.logo}
                        alt=""
                        width={80}
                        height={56}
                        className="max-h-full w-auto max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14"
                      style={{ backgroundColor: `${brand.accent}18`, color: brand.accent }}
                    >
                      <span className="font-display text-lg font-bold">{brand.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-accent text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: brand.accent }}>
                      {brand.category}
                    </p>
                    <h3 className="font-display mt-1 text-2xl font-bold tracking-[0.01em] text-hub-charcoal transition-colors group-hover:text-hub-gold sm:text-3xl">
                      {brand.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-hub-slate lg:col-span-4">{brand.blurb}</p>

                <div className="flex items-center justify-between gap-3 lg:col-span-2 lg:justify-end">
                  <p className="font-accent text-[10px] font-bold uppercase tracking-wider text-hub-slate">
                    {brand.markets}
                  </p>
                  <motion.span
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-hub-border text-hub-charcoal transition-colors group-hover:border-hub-gold group-hover:bg-hub-gold group-hover:text-white"
                    variants={{
                      rest: { rotate: 0 },
                      hover: { rotate: 45 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </motion.span>
                </div>

                <motion.div
                  className="col-span-full h-px origin-left"
                  style={{ backgroundColor: brand.accent }}
                  variants={{
                    rest: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.35 }}
                  aria-hidden
                />
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Global Reach band */}
        <Reveal delay={0.1} variant="up">
          <div className="mt-8 overflow-hidden rounded-3xl bg-hub-charcoal px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <div className="mb-3 inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-hub-gold" aria-hidden />
                  <p className="font-accent text-[10px] font-bold uppercase tracking-[0.22em] text-hub-gold">
                    Global Reach
                  </p>
                </div>
                <h3 className="font-display text-3xl font-bold tracking-[0.02em] sm:text-4xl">
                  From insight to shelf, across every continent we serve.
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-10">
                {reachStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <p className="font-display text-3xl font-bold text-hub-gold sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 font-accent text-[10px] font-bold uppercase tracking-wider text-white/55">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {markets.map((m, i) => (
                <motion.span
                  key={m}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-accent text-[10px] font-bold uppercase tracking-wider text-white/80"
                  initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  {m}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
