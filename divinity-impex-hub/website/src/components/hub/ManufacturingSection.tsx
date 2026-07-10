"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { manufacturingHubs, processSteps } from "@/lib/content";
import { FlaskConical, Truck, TrendingUp } from "lucide-react";
import { cardHover } from "@/lib/motion";

const stepIcons = [FlaskConical, Truck, TrendingUp];

export function ManufacturingSection() {
  const reduced = useReducedMotion();

  return (
    <section id="manufacturing" className="mesh-light relative overflow-hidden py-20 sm:py-28">
      <ParallaxOrbs variant="light" count={2} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="How We Operate"
            title="From Insight to Shelf"
            description="A rigorous three-stage process powered by global sourcing intelligence and unbeatable volume economics."
            align="center"
            showLines
          />
        </Reveal>

        <div className="relative mt-16">
          <motion.div
            className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-hub-gold/50 to-transparent lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />
          <RevealStagger className="grid gap-8 lg:grid-cols-3">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <RevealItem key={step.step} variant="up">
                  <motion.article
                    className="premium-card relative rounded-3xl p-8 text-center"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.div
                      className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-hub-gold to-[#dbb42e] shadow-lg shadow-hub-gold/25"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-hub-navy" aria-hidden />
                    </motion.div>
                    <motion.span
                      className="font-display text-4xl font-bold text-hub-gold/20"
                      animate={reduced ? undefined : { opacity: [0.15, 0.3, 0.15] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {step.step}
                    </motion.span>
                    <h3 className="font-display -mt-2 text-xl font-semibold text-hub-navy">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-hub-slate">{step.description}</p>
                  </motion.article>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>

        <Reveal delay={0.15} variant="scale">
          <h3 className="font-display mt-20 text-center text-2xl font-semibold text-hub-navy">Strategic Manufacturing Hubs</h3>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" fast>
          {manufacturingHubs.map((hub, i) => (
            <RevealItem key={hub.region} variant="scale">
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-hub-border premium-card p-5 text-center"
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(13,27,42,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="font-display text-3xl font-bold text-hub-gold/15"
                  whileInView={{ opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
                <p className="font-accent mt-1 text-sm font-bold uppercase tracking-wider text-hub-gold">{hub.region}</p>
                <p className="mt-2 text-xs leading-relaxed text-hub-slate">{hub.detail}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
