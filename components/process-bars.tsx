"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Horizontal "depth gauge" bars — replaces the original site's static
 * percentage counters with bars that fill when scrolled into view.
 */
export function ProcessBars({ items }: { items: { label: string; pct: number }[] }) {
  const reduced = useReducedMotion();
  const barColor = "bg-primary";

  return (
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={item.label}>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <span className="text-sm leading-snug text-foreground/85">{item.label}</span>
            <span className="tnum font-display text-sm font-semibold text-primary">{item.pct}%</span>
          </div>
          <div
            className="h-1.5 overflow-hidden rounded-full bg-secondary"
            role="img"
            aria-label={`${item.label}: ${item.pct} percent`}
          >
            <motion.div
              className={`h-full rounded-full ${barColor}`}
              initial={{ width: reduced ? `${item.pct}%` : 0 }}
              whileInView={{ width: `${item.pct}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 0.8, 0.3, 1] }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
