"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, fadeUpBlur, scaleIn, slideLeft, slideRight } from "@/lib/motion";

type RevealVariant = "up" | "blur" | "scale" | "left" | "right";

const variantMap: Record<RevealVariant, Variants> = {
  up: fadeUp,
  blur: fadeUpBlur,
  scale: scaleIn,
  left: slideLeft,
  right: slideRight,
};

function withDelay(variants: Variants, delay: number): Variants {
  return {
    ...variants,
    visible: {
      ...(typeof variants.visible === "object" ? variants.visible : {}),
      transition: {
        ...(typeof variants.visible === "object" &&
        variants.visible !== null &&
        "transition" in variants.visible &&
        typeof variants.visible.transition === "object"
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      variants={delay > 0 ? withDelay(variantMap[variant], delay) : variantMap[variant]}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -30px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: fast ? 0.07 : 0.12,
            delayChildren: 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={variantMap[variant]}>
      {children}
    </motion.div>
  );
}
