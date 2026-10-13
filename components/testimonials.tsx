import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
      <Quote aria-hidden className="h-6 w-6 text-primary/70" />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 border-t border-border/60 pt-4">
        <span className="block font-display text-sm font-medium text-foreground">{t.name}</span>
        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{t.role}</span>
      </figcaption>
    </figure>
  );
}
