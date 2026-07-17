"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { WorldMap } from "@/components/hub/WorldMap";
import { globalRegions } from "@/lib/content";
import { cardHover } from "@/lib/motion";

export function GlobalPresence() {
  return (
    <section id="global-presence" className="mesh-light relative overflow-hidden py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Worldwide Operations"
            title="A Presence Across Every Continent"
            description="Strategic manufacturing hubs and distribution networks spanning the Americas, Africa, Asia Pacific, Europe, and the Middle East."
          />
        </Reveal>

        <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <Reveal variant="left" className="flex h-full flex-col">
            <RevealStagger className="flex h-full flex-col gap-2.5" fast>
              {globalRegions.map((region) => (
                <RevealItem key={region.name} variant="left" className="flex-1">
                  <motion.div
                    className="flex h-full items-center gap-3.5 rounded-xl border border-hub-border bg-white px-4 py-3 shadow-sm"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hub-gold/10"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <MapPin className="h-4 w-4 text-hub-gold" aria-hidden />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="font-display text-[1.05rem] font-semibold leading-tight text-hub-charcoal">
                        {region.name}
                      </h3>
                      <p className="mt-0.5 text-sm leading-snug text-hub-slate">
                        {region.countries.join(" · ")}
                      </p>
                    </div>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>

          <Reveal variant="right" delay={0.15} className="flex h-full min-h-[22rem] flex-col sm:min-h-[26rem]">
            <motion.div
              className="relative min-h-0 flex-1 overflow-hidden rounded-3xl border border-hub-border bg-white shadow-lg"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              <WorldMap />
              <motion.div
                className="pointer-events-none absolute left-4 top-4 rounded-xl border border-hub-gold/20 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm"
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <p className="font-accent text-[10px] font-bold uppercase tracking-widest text-hub-gold">
                  Connected Continents
                </p>
                <p className="mt-1 text-sm font-semibold text-hub-charcoal">5 Regions · 30+ Countries</p>
              </motion.div>
            </motion.div>
            <p className="mt-3 shrink-0 text-center font-accent text-[10px] font-bold uppercase tracking-[0.18em] text-hub-slate">
              Manufacturing hubs · India · China · Turkey · Africa · UAE
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
