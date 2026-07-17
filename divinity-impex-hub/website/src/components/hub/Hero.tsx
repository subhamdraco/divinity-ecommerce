"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe2, Award, Factory } from "lucide-react";
import { Counter } from "@/components/motion/Counter";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { PulseDot, ShimmerBorder } from "@/components/motion/Shimmer";
import { LineReveal } from "@/components/motion/TextReveal";
import { SegmentIcon } from "@/components/ui/SegmentIcon";
import { hubStats } from "@/lib/content";
import { segments } from "@/lib/segments";
import { floatY, springBouncy, staggerContainer, staggerFast } from "@/lib/motion";

const headline = ["Crafting", "the", "Future", "of", "Global", "FMCG"];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="mesh-dark grain-overlay relative overflow-hidden bg-white lg:min-h-[calc(100svh-5.75rem)]">
      <ParallaxOrbs variant="light" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pt-4 pb-6 sm:px-6 sm:pt-5 sm:pb-8 lg:min-h-[calc(100svh-5.75rem)] lg:justify-center lg:px-8 lg:pt-4 lg:pb-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left — compact copy */}
          <motion.div
            className="flex h-full flex-col justify-center lg:col-span-5"
            variants={reduced ? undefined : staggerContainer}
            initial={reduced ? false : "hidden"}
            animate="visible"
          >
            <motion.div
              variants={reduced ? undefined : { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-hub-gold/25 bg-hub-gold/8 px-4 py-1.5"
            >
              <PulseDot />
              <span className="font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-hub-gold">
                Est. 1980s · Global Operations
              </span>
            </motion.div>

            <h1 className="font-display text-3xl font-bold leading-[1.05] tracking-[0.02em] text-hub-charcoal sm:text-4xl lg:text-[2.95rem]">
              {reduced ? (
                <>Crafting the <span className="text-gold-gradient">Future</span> of Global FMCG</>
              ) : (
                headline.map((word, i) => (
                  <motion.span
                    key={word + i}
                    className="inline-block"
                    style={{ marginRight: "0.22em" }}
                    variants={{
                      hidden: { opacity: 0, y: 30, rotateX: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: { duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    {word === "Future" ? <span className="text-gold-gradient">{word}</span> : word}
                    {word === "Future" && <br />}
                  </motion.span>
                ))
              )}
            </h1>

            <LineReveal className="mt-5 max-w-md text-sm leading-relaxed text-hub-slate sm:text-base lg:text-[1.05rem]" delay={0.45}>
              A world-class manufacturing partner delivering personal care, healthcare, and
              performance products across four continents and thirty countries.
            </LineReveal>

            <motion.div
              className="mt-5 flex flex-wrap gap-3"
              variants={reduced ? undefined : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { delay: 0.6 } } }}
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={springBouncy}>
                <Link
                  href="#brands"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-hub-gold to-[#dbb42e] px-7 py-2.5 text-sm font-bold text-white shadow-md shadow-hub-gold/20"
                >
                  Explore Our Brands
                  <motion.span animate={reduced ? undefined : { x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#manufacturing"
                  className="glass-dark inline-flex min-h-11 items-center rounded-full px-7 py-2.5 text-sm font-semibold text-hub-charcoal hover:border-hub-gold/30"
                >
                  Manufacturing Process
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 hidden grid-cols-2 gap-2 sm:grid"
              variants={reduced ? undefined : staggerFast}
              initial={reduced ? false : "hidden"}
              animate="visible"
            >
              {hubStats.map((stat, i) => (
                <Counter key={stat.label} value={stat.value} label={stat.label} delay={0.5 + i * 0.08} variant="nested" />
              ))}
            </motion.div>
          </motion.div>

          {/* Right — four brand logos, all above the fold */}
          <motion.div
            className="relative flex h-full flex-col lg:col-span-7"
            initial={reduced ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="glass-card-dark relative flex h-full flex-col justify-center rounded-[1.75rem] p-4 sm:p-5 lg:p-6"
              animate={reduced ? undefined : floatY(6, 5)}
            >
              <ShimmerBorder className="mb-3" />
              <p className="font-accent text-[11px] font-bold uppercase tracking-widest text-hub-gold">
                Our Four Brands
              </p>
              <div className="mt-3 grid grid-cols-2 place-items-center gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3 lg:gap-x-4 lg:gap-y-3">
                {segments.map((segment, i) => {
                  const isPortraitLogo = segment.id === "rizwan-adatia";
                  const floatDelay = `${i * 0.45}s`;
                  const spinDuration = `${10 + i * 1.5}s`;
                  return (
                    <motion.div
                      key={segment.id}
                      className="w-full max-w-[240px]"
                      initial={reduced ? false : { opacity: 0, y: 24, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.div
                        whileHover={{ y: -6, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={springBouncy}
                      >
                        <Link href={segment.href} className="group flex flex-col items-center text-center">
                          <div
                            className={`relative flex aspect-square w-[min(100%,clamp(8.75rem,22vh,12.5rem))] items-center justify-center ${reduced ? "" : "brand-float"}`}
                            style={reduced ? undefined : { animationDelay: floatDelay }}
                          >
                            {/* Soft glow */}
                            <span
                              aria-hidden
                              className="pointer-events-none absolute inset-[-6%] rounded-[32%] opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                              style={{
                                background: `radial-gradient(circle, ${segment.accent}28 0%, transparent 70%)`,
                              }}
                            />

                            {/* Gradient frame */}
                            <div
                              className={`absolute inset-0 rounded-[30%] p-[3px] shadow-[0_14px_36px_-14px_rgba(28,25,23,0.35)] transition-shadow duration-300 group-hover:shadow-[0_20px_44px_-12px_rgba(184,148,47,0.35)] ${reduced ? "" : "brand-ring-spin"}`}
                              style={{
                                background: `conic-gradient(from 140deg, ${segment.accent}, #e8d5a0, ${segment.accent}aa, #fff6d6, ${segment.accent})`,
                                animationDuration: spinDuration,
                              }}
                            >
                              <div
                                className={`h-full w-full rounded-[28%] bg-white p-[5px] ${reduced ? "" : "brand-ring-spin"}`}
                                style={
                                  reduced
                                    ? undefined
                                    : { animationDuration: spinDuration, animationDirection: "reverse" }
                                }
                              >
                                <div
                                  className="brand-shine relative flex h-full w-full items-center justify-center overflow-hidden rounded-[24%]"
                                  style={{
                                    backgroundColor: "#ffffff",
                                    backgroundImage: isPortraitLogo
                                      ? undefined
                                      : `radial-gradient(circle at 30% 24%, #ffffff 0%, ${segment.accentLight} 58%, #ffffff 100%)`,
                                    boxShadow: `inset 0 0 0 1px ${segment.accent}28`,
                                  }}
                                >
                                  {!isPortraitLogo && (
                                    <span
                                      aria-hidden
                                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.95)_0%,transparent_45%)]"
                                    />
                                  )}
                                  {segment.logo ? (
                                    <Image
                                      src={isPortraitLogo ? "/photos/rizwan-adatia.jpg" : segment.logo}
                                      alt={`${segment.name} logo`}
                                      width={280}
                                      height={280}
                                      className={
                                        isPortraitLogo
                                          ? "h-full w-full object-cover object-[center_16%] transition-transform duration-500 group-hover:scale-105"
                                          : "relative z-[1] h-[68%] w-[68%] object-contain drop-shadow-[0_6px_12px_rgba(28,25,23,0.1)] transition-transform duration-500 group-hover:scale-105"
                                      }
                                    />
                                  ) : (
                                    <div
                                      className="relative z-[1] flex h-[68%] w-[68%] items-center justify-center rounded-[20%]"
                                      style={{ backgroundColor: `${segment.accent}14`, color: segment.accent }}
                                    >
                                      <SegmentIcon segment={segment} className="h-10 w-10 sm:h-12 sm:w-12" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="mt-2.5 font-display text-base font-semibold tracking-[0.04em] text-hub-charcoal sm:text-lg">
                            {segment.name}
                          </p>
                          <p className="mt-0.5 line-clamp-1 max-w-[12rem] font-accent text-[10px] font-bold uppercase tracking-[0.14em] text-hub-slate">
                            {segment.tagline}
                          </p>
                        </Link>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 hidden rounded-2xl glass-card-dark px-3 py-2 xl:block"
              animate={reduced ? undefined : floatY(8, 4, 0)}
            >
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-hub-gold" />
                <div>
                  <p className="text-xs font-bold text-hub-charcoal">30+ Countries</p>
                  <p className="text-[10px] text-hub-slate">Global Distribution</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-2 -top-2 hidden rounded-2xl glass-card-dark px-3 py-2 xl:block"
              animate={reduced ? undefined : floatY(10, 3.5, 1)}
            >
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-hub-gold" />
                <div>
                  <p className="text-xs font-bold text-hub-charcoal">Quality First</p>
                  <p className="text-[10px] text-hub-slate">ISO Certified</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-hub-border bg-white py-3">
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
