"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ShimmerProps {
  className?: string;
}

export function ShimmerBorder({ className = "" }: ShimmerProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={`h-px bg-hub-gold/40 ${className}`} />;

  return (
    <div className={`relative h-px overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-white/10" />
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-hub-gold to-transparent"
        animate={{ x: ["-100%", "400%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
      />
    </div>
  );
}

export function PulseDot({ color = "#c9a227" }: { color?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />;

  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}
