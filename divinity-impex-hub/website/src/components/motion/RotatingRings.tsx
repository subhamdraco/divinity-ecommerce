"use client";

import { motion, useReducedMotion } from "framer-motion";
import { rotateSlow } from "@/lib/motion";

export function RotatingRings() {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 lg:block" aria-hidden>
        <div className="absolute inset-0 rounded-full border border-hub-navy/5" />
        <div className="absolute inset-8 rounded-full border border-hub-gold/20" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 lg:block" aria-hidden>
      <motion.div className="absolute inset-0 rounded-full border border-hub-navy/8" animate={rotateSlow} />
      <motion.div
        className="absolute inset-8 rounded-full border border-dashed border-hub-gold/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-20 rounded-full border border-hub-gold/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-32 rounded-full bg-gradient-to-br from-hub-gold/20 to-transparent"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
