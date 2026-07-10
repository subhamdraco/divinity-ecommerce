"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { floatY } from "@/lib/motion";

const credentials = ["56 Global Awards", "10 African Countries", "4,000+ Employees", "Human for Humans"];

export function LeadershipPreview() {
  const reduced = useReducedMotion();

  return (
    <section id="leadership" className="mesh-light relative overflow-hidden py-20 sm:py-28">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-hub-cream/80 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <motion.div className="relative" animate={reduced ? undefined : floatY(6, 7)}>
              <div className="relative flex aspect-[4/5] max-h-[500px] items-end overflow-hidden rounded-3xl border border-hub-border bg-gradient-to-br from-hub-gold-light via-[#ddd5c8] to-[#d4cdc0] shadow-lg" role="img" aria-label="Rizwan Adatia">
                <div className="absolute inset-0 bg-gradient-to-t from-hub-navy/20 via-transparent to-transparent" />
                <motion.div
                  animate={reduced ? undefined : { rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Quote className="absolute left-6 top-6 h-10 w-10 text-hub-gold/40" aria-hidden />
                </motion.div>
                <div className="relative w-full p-8">
                  <p className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-hub-gold">Visionary Leadership</p>
                  <p className="font-display mt-2 text-3xl font-semibold text-hub-navy sm:text-4xl">Mr. Rizwan Adatia</p>
                  <p className="mt-2 text-sm text-hub-slate">Director · Philanthropist · Motivational Speaker</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {credentials.map((c, i) => (
                  <motion.span
                    key={c}
                    className="rounded-full border border-hub-gold/30 bg-hub-gold/5 px-3 py-1 font-accent text-[10px] font-bold uppercase tracking-wider text-hub-navy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(201,162,39,0.15)" }}
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>

          <Reveal variant="right" delay={0.12}>
            <SectionHeading
              eyebrow="Purpose-Driven Success"
              title="Leadership That Transcends the Boardroom"
              description="Mr. Rizwan Adatia's philosophy drives Divinity Impex to look beyond profits — focusing on long-term human impact across business and philanthropy."
            />
            <motion.blockquote
              className="relative mt-8 rounded-2xl border border-hub-border bg-gradient-to-br from-[#ebe4d8] to-[#e0d9cc] p-7 shadow-sm"
              whileHover={{ scale: 1.01, boxShadow: "0 20px 60px rgba(13,27,42,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="absolute -top-3 left-6 h-8 w-8 text-hub-gold/30" aria-hidden />
              <p className="font-display text-xl italic leading-relaxed text-hub-navy sm:text-2xl">
                &ldquo;Success is measured by the lives we uplift.&rdquo;
              </p>
              <footer className="mt-4 font-accent text-xs font-bold uppercase tracking-widest text-hub-gold">— Rizwan Adatia</footer>
            </motion.blockquote>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/rizwan-adatia" className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-hub-navy px-8 py-3 text-sm font-semibold text-white shadow-xl">
                Discover His Journey
                <motion.span animate={reduced ? undefined : { x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
