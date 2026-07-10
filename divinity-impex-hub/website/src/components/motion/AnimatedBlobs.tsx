"use client";

import { motion, useReducedMotion } from "framer-motion";
import { blobDrift } from "@/lib/motion";

interface AnimatedBlobsProps {
  variant?: "dark" | "light";
}

export function AnimatedBlobs({ variant = "dark" }: AnimatedBlobsProps) {
  const reduced = useReducedMotion();

  const blobs = [
    { color: variant === "dark" ? "#c9a227" : "#c9a22780", size: 420, top: "5%", left: "-5%", duration: 18 },
    { color: variant === "dark" ? "#006bb3" : "#006bb360", size: 360, top: "50%", left: "70%", duration: 22, delay: 2 },
    { color: variant === "dark" ? "#0e7c7b" : "#0e7c7b50", size: 300, top: "75%", left: "20%", duration: 20, delay: 4 },
    { color: variant === "dark" ? "#c45b7a" : "#c45b7a40", size: 250, top: "20%", left: "55%", duration: 16, delay: 1 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            opacity: variant === "dark" ? 0.35 : 0.5,
          }}
          animate={reduced ? undefined : blobDrift(blob.duration, blob.delay ?? 0)}
        />
      ))}
    </div>
  );
}
