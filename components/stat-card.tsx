"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Animated counter stat. Counts up once when scrolled into view;
 * renders the final value immediately for reduced-motion users.
 */
export function StatCard({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 0.8, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <div className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm sm:p-6">
      <span ref={ref} className="tnum font-display text-3xl font-light tracking-tight text-primary sm:text-4xl">
        {prefix}
        {display.toLocaleString("en-AU")}
        {suffix}
      </span>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] leading-relaxed text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
