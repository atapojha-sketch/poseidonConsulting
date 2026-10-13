import { cn } from "@/lib/utils";

/**
 * Compass rose ornament (with cardinal letters) used on page heroes and
 * the contact CTA, matching the reference design. Decorative only.
 */
export function CompassRose({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
    >
      <g fill="none" stroke="var(--chart-line-strong)" strokeWidth="1">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="78" />
        <circle cx="100" cy="100" r="30" opacity="0.7" />
        <path d="M100 4v192M4 100h192" opacity="0.6" />
        <path d="M32 32l136 136M168 32L32 168" opacity="0.35" />
        {/* needle — swings gently like a compass settling (CSS keyframes) */}
        <g className="compass-needle">
          <path d="M100 42l10 58-10 58-10-58z" fill="var(--chart-line-strong)" stroke="none" opacity="0.5" />
        </g>
      </g>
      <g
        fill="var(--chart-line-strong)"
        fontSize="11"
        fontFamily="var(--font-outfit), sans-serif"
        textAnchor="middle"
      >
        <text x="100" y="18">N</text>
        <text x="186" y="104">E</text>
        <text x="100" y="192">S</text>
        <text x="14" y="104">W</text>
      </g>
    </svg>
  );
}

/**
 * Nautical-chart contour lines: faint teal isobath curves drawn across a
 * section background. Decorative only.
 */
export function ChartLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full select-none", className)}
    >
      <g fill="none" stroke="var(--chart-line)" strokeWidth="1">
        <path d="M-50 220 C 200 140, 420 300, 700 230 S 1100 120, 1400 240 S 1650 300, 1700 260" />
        <path d="M-50 330 C 220 260, 460 420, 760 340 S 1150 230, 1450 350 S 1660 400, 1700 370" />
        <path d="M-50 450 C 240 380, 480 540, 800 460 S 1180 350, 1480 470 S 1670 510, 1700 490" />
        <path d="M-50 580 C 260 510, 500 660, 820 580 S 1200 470, 1500 590 S 1680 630, 1700 610" />
        <path d="M-50 710 C 280 640, 520 790, 840 710 S 1220 600, 1520 720 S 1690 760, 1700 740" />
        <path d="M-50 840 C 300 770, 540 920, 860 840 S 1240 730, 1540 850 S 1700 890, 1700 870" />
        <circle cx="1240" cy="260" r="110" opacity="0.6" />
        <circle cx="1240" cy="260" r="70" opacity="0.6" />
        <path d="M1240 130v260M1110 260h260" opacity="0.5" />
      </g>
    </svg>
  );
}
