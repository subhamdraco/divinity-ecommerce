"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { ShimmerBorder } from "@/components/motion/Shimmer";
import { pulseScale } from "@/lib/motion";

export function CTASection() {
  const reduced = useReducedMotion();

  return (
    <section className="mesh-dark grain-overlay relative overflow-hidden py-12 sm:py-16">
      <ParallaxOrbs variant="light" count={2} />
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        animate={reduced ? undefined : pulseScale}
        aria-hidden
      >
        <p className="font-display text-[12rem] font-bold text-hub-navy select-none opacity-[0.03]">IMPEX</p>
      </motion.div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-hub-gold">Partner With Us</p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-hub-navy sm:text-4xl lg:text-5xl">
                Let&apos;s Build the Future of FMCG Together
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-hub-slate">
                Join a global network of distributors and partners benefiting from premium manufacturing, volume economics, and four decades of market expertise.
              </p>
            </motion.div>
            <motion.div
              className="glass-card-dark rounded-3xl p-8 sm:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              <ShimmerBorder className="mb-6" />
              <h3 className="font-display text-xl font-semibold text-hub-navy">Start a Conversation</h3>
              <p className="mt-2 text-sm text-hub-slate">UAE Headquarters · Global Operations</p>
              <div className="mt-6 flex flex-col gap-3">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link href="#contact" className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-hub-gold to-[#dbb42e] px-8 py-3 text-sm font-bold text-hub-navy shadow-lg shadow-hub-gold/20">
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.a
                  href="mailto:info@divinityimpex.com"
                  className="glass-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-hub-navy"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="h-4 w-4" />
                  info@divinityimpex.com
                </motion.a>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
