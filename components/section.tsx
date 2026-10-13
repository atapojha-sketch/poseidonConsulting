import { cn } from "@/lib/utils";

/** Uppercase tracked label above headings — a signature of the approved
 *  reference design. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.3em] text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{lede}</p>
      )}
    </div>
  );
}
