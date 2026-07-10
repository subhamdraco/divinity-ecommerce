"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Segment } from "@/lib/segments";
import { SegmentIcon } from "@/components/ui/SegmentIcon";
import { cardHover, iconPop } from "@/lib/motion";

interface SegmentCardProps {
  segment: Segment;
  index?: number;
}

export function SegmentCard({ segment, index = 0 }: SegmentCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 48, scale: 0.92 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      <motion.div variants={cardHover} initial="rest" whileHover="hover" whileTap="tap">
        <Link
          href={segment.href}
          className="premium-card group relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-hub-gold"
          aria-label={`Explore ${segment.name}`}
        >
          <div className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${segment.gradient} p-6`}>
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              animate={reduced ? undefined : { backgroundPosition: ["0px 0px", "40px 40px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
            <motion.div
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
              variants={iconPop}
            >
              <ArrowUpRight className="h-5 w-5 text-white" />
            </motion.div>
            <motion.span
              className="font-display absolute right-6 top-6 text-5xl font-bold text-white/15"
              animate={reduced ? undefined : { opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {segment.number}
            </motion.span>
            <div className="relative flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <SegmentIcon segment={segment} className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <p className="font-accent text-[10px] font-bold uppercase tracking-widest text-white/70">
                  {segment.tagline}
                </p>
                <h3 className="font-display text-xl font-semibold text-white">{segment.name}</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="flex-1 text-sm leading-relaxed text-hub-slate">{segment.description}</p>
            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
              <span className="font-accent text-xs font-bold uppercase tracking-wider" style={{ color: segment.accent }}>
                Explore Segment
              </span>
              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: segment.accent }}
                whileHover={{ scale: 1.15, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
