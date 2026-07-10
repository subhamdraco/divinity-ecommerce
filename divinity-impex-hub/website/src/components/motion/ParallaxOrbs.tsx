"use client";

import { motion, useReducedMotion } from "framer-motion";
import { blobDrift } from "@/lib/motion";

interface ParallaxOrbsProps {
  variant?: "dark" | "light";
  count?: number;
}

const orbConfig = {
  dark: [
    { color: "rgba(201,162,39,0.35)", size: 480, top: "0%", left: "-10%", d: 20, delay: 0 },
    { color: "rgba(0,107,179,0.28)", size: 400, top: "40%", left: "75%", d: 24, delay: 3 },
    { color: "rgba(14,124,123,0.22)", size: 320, top: "70%", left: "20%", d: 18, delay: 6 },
    { color: "rgba(196,91,122,0.2)", size: 280, top: "15%", left: "55%", d: 22, delay: 2 },
  ],
  light: [
    { color: "rgba(184,148,47,0.28)", size: 400, top: "10%", left: "80%", d: 22, delay: 0 },
    { color: "rgba(21,42,71,0.14)", size: 350, top: "60%", left: "-5%", d: 26, delay: 4 },
    { color: "rgba(14,124,123,0.16)", size: 300, top: "80%", left: "60%", d: 20, delay: 2 },
  ],
};

export function ParallaxOrbs({ variant = "dark", count }: ParallaxOrbsProps) {
  const reduced = useReducedMotion();
  const orbs = orbConfig[variant].slice(0, count ?? orbConfig[variant].length);

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={blobDrift(orb.d, orb.delay)}
        />
      ))}
    </div>
  );
}
