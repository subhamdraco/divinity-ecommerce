"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { springBouncy } from "@/lib/motion";

interface CounterProps {
  value: string;
  label: string;
  delay?: number;
  variant?: "nested" | "standalone";
}

function parseValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export function Counter({ value, label, delay = 0, variant = "standalone" }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduced) return;
    const timeout = setTimeout(() => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(`${Math.round(num * eased)}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, num, suffix, delay, reduced]);

  const boxClass =
    variant === "nested"
      ? "rounded-xl border border-hub-border bg-hub-gold/5 p-4"
      : "glass-card-dark rounded-2xl p-5 sm:p-6";

  return (
    <motion.div
      ref={ref}
      className={boxClass}
      initial={reduced ? false : { opacity: 0, scale: 0.8, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ ...springBouncy, delay }}
      whileHover={reduced ? undefined : { scale: 1.04, transition: { duration: 0.2 } }}
    >
      <motion.p
        className="font-display text-2xl font-semibold text-hub-gold sm:text-3xl"
        key={display}
        initial={reduced ? false : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        {display}
      </motion.p>
      <p className="mt-0.5 text-xs text-hub-slate">{label}</p>
    </motion.div>
  );
}
