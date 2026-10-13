"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * The site's three entrance primitives. One easing + duration vocabulary
 * everywhere so motion reads as a single system:
 *  - <Entrance> — on-load stagger for heroes (plays once, immediately)
 *  - <Reveal>   — scroll-triggered rise for section headings / blocks
 *  - <Stagger>+<Item> — scroll-triggered cascade for card grids
 * All collapse to static rendering under prefers-reduced-motion.
 */

const EASE = [0.22, 0.65, 0.3, 1] as const;
const RISE = 28;
const DURATION = 0.7;

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: RISE },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

const itemVariantsStill: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

/** On-load staggered entrance (hero). Children wrapped in <Item>. */
export function Entrance({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={groupVariants} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

/** Scroll-triggered staggered cascade (card grids). Children wrapped in <Item>. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function Item({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} variants={reduced ? itemVariantsStill : itemVariants}>
      {children}
    </motion.div>
  );
}

/** Scroll-triggered single rise (section headings, standalone blocks). */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : RISE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduced ? 0.4 : DURATION, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
