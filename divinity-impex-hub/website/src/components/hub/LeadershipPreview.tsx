"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { floatY } from "@/lib/motion";

const credentials = ["56 Global Awards", "10 African Countries", "4,000+ Employees", "Human for Humans"];

export function LeadershipPreview() {
  const reduced = useReducedMotion();

  return (
    <section id="leadership" className="mesh-light relative overflow-hidden py-12 sm:py-16">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-hub-cream/80 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal variant="left">
            <motion.div className="relative" animate={reduced ? undefined : floatY(6, 7)}>
              <div className="relative aspect-[4/5] max-h-[500px] overflow-hidden rounded-3xl border border-hub-border bg-hub-warm shadow-lg">
                <Image
                  src="/photos/rizwan-adatia.jpg"
                  alt="Mr. Rizwan Adatia — Director, Philanthropist, and Motivational Speaker"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hub-charcoal/75 via-hub-charcoal/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <p className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-hub-gold-light">
                    Visionary Leadership
                  </p>
                  <p className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
                    Mr. Rizwan Adatia
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    Director · Philanthropist · Motivational Speaker
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {credentials.map((c, i) => (
                  <motion.span
                    key={c}
                    className="rounded-full border border-hub-gold/30 bg-hub-gold/5 px-3 py-1 font-accent text-[10px] font-bold uppercase tracking-wider text-hub-charcoal"
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
              className="relative mt-8 rounded-2xl border border-hub-border bg-white p-7 shadow-sm"
              whileHover={{ scale: 1.01, boxShadow: "0 20px 60px rgba(28,25,23,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="absolute -top-3 left-6 h-8 w-8 text-hub-gold/30" aria-hidden />
              <p className="font-display text-xl italic leading-relaxed text-hub-charcoal sm:text-2xl">
                &ldquo;Success is measured by the lives we uplift.&rdquo;
              </p>
              <footer className="mt-4 font-accent text-xs font-bold uppercase tracking-widest text-hub-gold">
                — Rizwan Adatia
              </footer>
            </motion.blockquote>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/rizwan-adatia"
                className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-hub-charcoal px-8 py-3 text-sm font-semibold text-white shadow-xl"
              >
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
