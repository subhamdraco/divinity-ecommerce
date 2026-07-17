"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ParallaxOrbs } from "@/components/motion/ParallaxOrbs";
import { manufacturingHubs, processSteps } from "@/lib/content";
import { cardHover } from "@/lib/motion";

/** Meaningful stage marks — Insight → Source → Shelf */
function StageMark({ kind }: { kind: "Insight" | "Source" | "Shelf" }) {
  const common = "h-8 w-8 text-white";
  if (kind === "Insight") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.2 2.2M22.3 22.3l2.2 2.2M7.5 24.5l2.2-2.2M22.3 9.7l2.2-2.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="1.8" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "Source") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="16" cy="16" rx="4.5" ry="10" stroke="currentColor" strokeWidth="2" />
        <path d="M6 16h20M7.5 11h17M7.5 21h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="8" width="10" height="16" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="17" y="8" width="10" height="16" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M8 13h4M8 17h4M20 13h4M20 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 24v2M22 24v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AnimatedTitle({ reduced }: { reduced: boolean | null }) {
  const words = ["From", "Insight", "to", "Shelf"];

  if (reduced) {
    return (
      <h2 className="font-display text-center text-3xl font-bold text-hub-charcoal sm:text-4xl">
        From Insight to Shelf
      </h2>
    );
  }

  return (
    <h2 className="font-display text-center text-3xl font-bold sm:text-4xl" aria-label="From Insight to Shelf">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className={`inline-block ${word === "Insight" || word === "Shelf" ? "text-shimmer-gold" : "text-hub-charcoal"}`}
          style={{ marginRight: "0.28em" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

export function ManufacturingSection() {
  const reduced = useReducedMotion();

  return (
    <section id="manufacturing" className="mesh-light relative overflow-hidden py-12 sm:py-16">
      <ParallaxOrbs variant="light" count={2} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur">
          <div className="text-center">
            <p className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-hub-gold">How We Operate</p>
            <div className="mt-4">
              <AnimatedTitle reduced={reduced} />
            </div>
            <motion.p
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-hub-slate sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              A rigorous three-stage process powered by global sourcing intelligence and unbeatable volume economics.
            </motion.p>
          </div>
        </Reveal>

        <div className="relative mt-10">
          <div className="absolute left-[16.67%] right-[16.67%] top-[4.5rem] hidden h-px lg:block" aria-hidden>
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-hub-gold/60 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <RevealStagger className="grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <RevealItem key={step.step} variant="up">
                <motion.article
                  className="premium-card relative rounded-3xl p-7 text-center sm:p-8"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-hub-gold/15"
                      animate={reduced ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-hub-gold to-[#dbb42e] shadow-md shadow-hub-gold/20">
                      <StageMark kind={step.meaning as "Insight" | "Source" | "Shelf"} />
                    </div>
                  </motion.div>

                  <p className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-hub-gold">
                    {step.meaning}
                  </p>
                  <span className="font-display mt-1 block text-3xl font-bold text-hub-gold/20">{step.step}</span>
                  <h3 className="font-display -mt-1 text-xl font-bold text-hub-charcoal">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-hub-slate">{step.description}</p>

                  {i < processSteps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-hub-gold lg:block" aria-hidden>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        <Reveal delay={0.15} variant="scale">
          <h3 className="font-display mt-12 text-center text-2xl font-bold text-hub-charcoal">
            Strategic Manufacturing Hubs
          </h3>
        </Reveal>
        <RevealStagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" fast>
          {manufacturingHubs.map((hub, i) => (
            <RevealItem key={hub.region} variant="scale">
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-hub-border premium-card p-5 text-center"
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(28,25,23,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="font-display text-3xl font-bold text-hub-gold/15">
                  {String(i + 1).padStart(2, "0")}
                </div>
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
