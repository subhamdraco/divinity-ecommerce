"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe2, Award, Factory } from "lucide-react";
import { Counter } from "@/components/motion/Counter";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { RotatingRings } from "@/components/motion/RotatingRings";
import { PulseDot, ShimmerBorder } from "@/components/motion/Shimmer";
import { LineReveal } from "@/components/motion/TextReveal";
import { hubStats } from "@/lib/content";
import { segments } from "@/lib/segments";
import { SegmentIcon } from "@/components/ui/SegmentIcon";
import { cardHover, floatY, springBouncy, staggerContainer, staggerFast } from "@/lib/motion";

const headline = ["Crafting", "the", "Future", "of", "Global", "FMCG"];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="mesh-dark grain-overlay relative min-h-[92vh] overflow-hidden">
      <ParallaxOrbs variant="light" />
      <RotatingRings />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-6"
            variants={reduced ? undefined : staggerContainer}
            initial={reduced ? false : "hidden"}
            animate="visible"
          >
            <motion.div
              variants={reduced ? undefined : { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-hub-gold/30 bg-hub-gold/10 px-4 py-1.5"
            >
              <PulseDot />
              <span className="font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold">
                Est. 1980s · Global Operations
              </span>
            </motion.div>

            <h1 className="font-display text-[2.75rem] font-semibold leading-[1.08] text-hub-navy sm:text-5xl lg:text-6xl xl:text-7xl">
              {reduced ? (
                <>Crafting the <span className="text-gold-gradient">Future</span> of Global FMCG</>
              ) : (
                headline.map((word, i) => (
                  <motion.span
                    key={word + i}
                    className="inline-block"
                    style={{ marginRight: "0.22em" }}
                    variants={{
                      hidden: { opacity: 0, y: 40, rotateX: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: { duration: 0.55, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    {word === "Future" ? <span className="text-gold-gradient">{word}</span> : word}
                    {word === "Future" && <br />}
                  </motion.span>
                ))
              )}
            </h1>

            <LineReveal className="mt-6 max-w-lg text-base leading-relaxed text-hub-slate sm:text-lg" delay={0.55}>
              Divinity Impex — a world-class manufacturing partner delivering
              personal care, healthcare, and performance products across four
              continents and thirty countries.
            </LineReveal>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              variants={reduced ? undefined : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7 } } }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={springBouncy}>
                <Link
                  href="#segments"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-hub-gold to-[#dbb42e] px-8 py-3 text-sm font-bold text-hub-navy shadow-lg shadow-hub-gold/25"
                >
                  Explore Our Brands
                  <motion.span animate={reduced ? undefined : { x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link href="#manufacturing" className="glass-dark inline-flex min-h-12 items-center rounded-full px-8 py-3 text-sm font-semibold text-hub-navy hover:bg-hub-warm">
                  Manufacturing Process
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-2"
              variants={reduced ? undefined : staggerFast}
              initial={reduced ? false : "hidden"}
              animate="visible"
            >
              {segments.map((s, i) => (
                <motion.div
                  key={s.id}
                  variants={reduced ? undefined : { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: springBouncy } }}
                >
                  <Link
                    href={s.href}
                    className="glass-dark inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-hub-slate hover:bg-hub-warm hover:text-hub-navy"
                  >
                    <motion.span whileHover={{ rotate: 12, scale: 1.2 }} transition={springBouncy}>
                      <SegmentIcon segment={s} className="h-3.5 w-3.5" />
                    </motion.span>
                    {s.name.split(" ")[0]}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-6"
            initial={reduced ? false : { opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="glass-card-dark relative rounded-3xl p-6 sm:p-8"
              animate={reduced ? undefined : floatY(8, 6)}
            >
              <ShimmerBorder className="mb-6" />
              <p className="font-accent text-xs font-bold uppercase tracking-widest text-hub-gold">
                Global Impact at a Glance
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {hubStats.map((stat, i) => (
                  <Counter key={stat.label} value={stat.value} label={stat.label} delay={0.4 + i * 0.12} variant="nested" />
                ))}
              </div>
              <motion.div
                className="mt-5 grid grid-cols-2 gap-2"
                variants={staggerFast}
                initial="hidden"
                animate="visible"
              >
                {segments.map((s) => (
                  <motion.div key={s.id} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href={s.href}
                        className="block overflow-hidden rounded-xl p-3"
                        style={{ background: `linear-gradient(135deg, ${s.accent}44, ${s.accent}18)` }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${s.accent}55` }}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <SegmentIcon segment={s} className="h-4 w-4 text-white" />
                          </motion.div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">{s.number}</p>
                            <p className="text-xs font-semibold text-white">{s.name.split(" ")[0]}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 hidden rounded-2xl glass-card-dark px-4 py-3 sm:block"
              animate={reduced ? undefined : floatY(10, 5, 0)}
            >
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-hub-gold" />
                <div>
                  <p className="text-xs font-bold text-hub-navy">30+ Countries</p>
                  <p className="text-[10px] text-hub-slate">Global Distribution</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-4 -top-4 hidden rounded-2xl glass-card-dark px-4 py-3 sm:block"
              animate={reduced ? undefined : floatY(12, 4.5, 1.2)}
            >
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-hub-gold" />
                <div>
                  <p className="text-xs font-bold text-hub-navy">Quality First</p>
                  <p className="text-[10px] text-hub-slate">ISO Certified</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated trust marquee */}
      <div className="relative z-10 overflow-hidden border-t border-hub-border bg-hub-cream/90 py-4 backdrop-blur-sm">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={reduced ? undefined : { x: [0, -1200] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-16">
              {[
                { icon: Factory, label: "4 Manufacturing Hubs" },
                { icon: Globe2, label: "Africa · Asia · Middle East" },
                { icon: Award, label: "200+ In-House Brands" },
                { icon: Factory, label: "40+ Years Experience" },
                { icon: Globe2, label: "30+ Countries Worldwide" },
              ].map(({ icon: Icon, label }) => (
                <div key={`${dup}-${label}`} className="flex items-center gap-2.5 text-hub-slate">
                  <Icon className="h-4 w-4 text-hub-gold" aria-hidden />
                  <span className="font-accent text-xs font-semibold uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
