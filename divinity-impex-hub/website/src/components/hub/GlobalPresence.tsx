"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { globalRegions } from "@/lib/content";
import { cardHover } from "@/lib/motion";

const mapDots = [
  { x: "18%", y: "35%", label: "Americas", color: "#006BB3", delay: 0 },
  { x: "48%", y: "28%", label: "Europe", color: "#C9A227", delay: 0.2 },
  { x: "52%", y: "55%", label: "Africa", color: "#0E7C7B", delay: 0.4 },
  { x: "62%", y: "38%", label: "Middle East", color: "#C45B7A", delay: 0.6 },
  { x: "78%", y: "42%", label: "Asia Pacific", color: "#B8860B", delay: 0.8 },
];

export function GlobalPresence() {
  const reduced = useReducedMotion();

  return (
    <section id="global-presence" className="mesh-light relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Worldwide Operations"
              title="A Presence Across Every Continent"
              description="Strategic manufacturing hubs and distribution networks spanning the Americas, Africa, Asia Pacific, Europe, and the Middle East."
            />
            <RevealStagger className="mt-8 space-y-3" fast>
              {globalRegions.map((region) => (
                <RevealItem key={region.name} variant="left">
                  <motion.div
                    className="flex items-start gap-4 rounded-xl border border-hub-border bg-hub-warm/80 p-4 shadow-sm"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hub-navy/5"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <MapPin className="h-4 w-4 text-hub-gold" aria-hidden />
                    </motion.div>
                    <div>
                      <h3 className="font-display font-semibold text-hub-navy">{region.name}</h3>
                      <p className="mt-0.5 text-sm text-hub-slate">{region.countries.join(" · ")}</p>
                    </div>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>

          <Reveal variant="right" delay={0.15}>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-hub-border glass-card-dark shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(30,58,95,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                animate={reduced ? undefined : { backgroundPosition: ["0px 0px", "40px 40px"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              >
                <Globe2 className="h-48 w-48 text-hub-navy/5" aria-hidden />
              </motion.div>
              {mapDots.map((dot) => (
                <motion.div
                  key={dot.label}
                  className="absolute"
                  style={{ left: dot.x, top: dot.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: dot.delay, type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div
                    animate={reduced ? undefined : { scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: dot.delay }}
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: dot.color, boxShadow: `0 0 16px ${dot.color}` }}
                    />
                  </motion.div>
                  <motion.span
                    className="absolute left-5 top-0 whitespace-nowrap font-accent text-[10px] font-bold uppercase tracking-wider text-hub-navy/70"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: dot.delay + 0.3 }}
                  >
                    {dot.label}
                  </motion.span>
                </motion.div>
              ))}
              <motion.div
                className="absolute bottom-4 left-4 right-4 glass-card-dark rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-accent text-[10px] font-bold uppercase tracking-widest text-hub-gold">Manufacturing Hubs</p>
                <p className="mt-1 text-sm text-hub-slate">India · China · Turkey · Africa · UAE</p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
