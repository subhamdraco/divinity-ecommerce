"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { SegmentIcon } from "@/components/ui/SegmentIcon";
import type { Segment } from "@/lib/segments";
import { cardHover } from "@/lib/motion";

interface SegmentHeroProps {
  segment: Segment;
  title: string;
  subtitle: string;
}

export function SegmentHero({ segment, title, subtitle }: SegmentHeroProps) {
  const reduced = useReducedMotion();
  const titleWords = title.split(" ");

  return (
    <>
      <Breadcrumb segment={segment} />
      <section className="mesh-dark grain-overlay relative overflow-hidden py-16 sm:py-24">
        <ParallaxOrbs variant="light" count={2} />
        <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-20`} aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hub-gold/15 backdrop-blur-sm"
                  animate={reduced ? undefined : { rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <SegmentIcon segment={segment} className="h-6 w-6 text-hub-navy" />
                </motion.div>
                <motion.span
                  className="font-display text-5xl font-bold text-hub-navy/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {segment.number}
                </motion.span>
              </div>
              <motion.span
                className="font-accent inline-block rounded-full border border-hub-gold/30 bg-hub-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-hub-navy"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {segment.tagline}
              </motion.span>
              <h1 className="font-display mt-4 text-4xl font-semibold text-hub-navy sm:text-5xl lg:text-6xl">
                {reduced
                  ? title
                  : titleWords.map((word, i) => (
                      <motion.span
                        key={`${word}-${i}`}
                        className="inline-block"
                        style={{ marginRight: "0.2em" }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.45 }}
                      >
                        {word}
                      </motion.span>
                    ))}
              </h1>
              <motion.p
                className="mt-4 max-w-xl text-base leading-relaxed text-hub-slate sm:text-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {subtitle}
              </motion.p>
            </motion.div>
            <motion.div
              className="glass-card-dark hidden rounded-3xl p-8 lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-accent text-[10px] font-bold uppercase tracking-widest text-hub-gold">Quick Navigation</p>
              <Link href="/" className="mt-4 flex items-center justify-between rounded-xl border border-hub-border bg-hub-cream/50 px-4 py-3 text-sm text-hub-slate hover:bg-hub-gold/10 hover:text-hub-navy">
                Back to Hub <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export function FeatureCard({ title, description, accent }: { title: string; description: string; accent: string }) {
  return (
    <RevealItem variant="scale">
      <motion.article
        className="premium-card group rounded-2xl p-7"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        <motion.div
          className="mb-4 flex items-center gap-3"
          whileHover={{ x: 4 }}
        >
          <motion.div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: accent }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
        </motion.div>
        <h3 className="font-display text-lg font-semibold text-hub-navy transition-colors group-hover:text-hub-gold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-hub-slate">{description}</p>
      </motion.article>
    </RevealItem>
  );
}

export function FeatureGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="mesh-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</RevealStagger>
      </div>
    </section>
  );
}

export function SegmentCTA({ segment, email, website }: { segment: Segment; email?: string; website?: string }) {
  return (
    <section className="mesh-dark relative overflow-hidden py-16">
      <ParallaxOrbs variant="light" count={1} />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <motion.div
            className="glass-card-dark rounded-3xl p-8 text-center sm:p-10"
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="font-display text-2xl font-semibold text-hub-navy sm:text-3xl">Ready to learn more?</h2>
            <p className="mt-3 text-hub-slate">Connect with the {segment.name} team today.</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {email && (
                <motion.a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-7 py-2.5 text-sm font-bold text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${segment.accent}, ${segment.accent}cc)` }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </motion.a>
              )}
              {website && (
                <motion.a href={website} target="_blank" rel="noopener noreferrer" className="glass-dark inline-flex min-h-11 items-center rounded-full px-7 py-2.5 text-sm font-semibold text-hub-navy" whileHover={{ scale: 1.04 }}>
                  Visit Website
                </motion.a>
              )}
              <Link href="/" className="text-sm text-hub-slate hover:text-hub-gold">← Back to Hub</Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
