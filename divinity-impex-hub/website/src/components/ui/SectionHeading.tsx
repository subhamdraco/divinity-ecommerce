"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  showLines?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  showLines = false,
}: SectionHeadingProps) {
  const reduced = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  const titleWords = title.split(" ");

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <motion.div
          className={showLines && align === "center" ? "section-eyebrow-line mb-4" : "mb-3"}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p
            className={`font-accent shrink-0 text-xs font-bold uppercase tracking-[0.25em] text-hub-gold ${
              showLines && align === "center" ? "px-4" : ""
            }`}
          >
            {eyebrow}
          </p>
        </motion.div>
      )}
      <h2
        className="font-display text-3xl font-bold leading-[1.05] tracking-[0.02em] text-hub-navy sm:text-4xl lg:text-[2.85rem]"
      >
        {reduced
          ? title
          : titleWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block"
                style={{ marginRight: "0.25em" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
              >
                {word}
              </motion.span>
            ))}
      </h2>
      {description && (
        <motion.p
          className={`mt-4 text-base leading-relaxed sm:text-lg text-hub-slate`}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {description}
        </motion.p>
      )}
      {!showLines && (
        <motion.div
          className={`mt-5 h-0.5 bg-hub-gold ${align === "center" ? "mx-auto" : ""}`}
          initial={reduced ? false : { width: 0, opacity: 0 }}
          whileInView={{ width: 64, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          aria-hidden
        />
      )}
    </div>
  );
}
