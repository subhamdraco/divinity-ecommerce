export const spring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 22,
};

export const springBouncy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeOutExpo = [0.19, 1, 0.22, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeUpBlur = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    transition: spring,
  },
  tap: { scale: 0.97, transition: { duration: 0.15 } },
};

export const iconPop = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 8, transition: springBouncy },
};

export const blobDrift = (duration: number, delay = 0) => ({
  x: [0, 40, -30, 0],
  y: [0, -35, 20, 0],
  scale: [1, 1.12, 0.92, 1],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

export const floatY = (distance = 14, duration = 5, delay = 0) => ({
  y: [0, -distance, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

export const rotateSlow = {
  rotate: 360,
  transition: { duration: 40, repeat: Infinity, ease: "linear" as const },
};

export const pulseScale = {
  scale: [1, 1.05, 1],
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
};
