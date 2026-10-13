import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { INSIGHTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on enterprise architecture, technology strategy and delivering change that sticks.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking from the field"
        lede="Notes on enterprise architecture, technology strategy and delivering change that sticks."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {INSIGHTS.map((a) => (
            <article
              key={a.slug}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                {a.label}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {a.date} · {a.readTime}
              </p>
              <h2 className="mt-3 font-display text-xl font-light leading-snug tracking-tight text-foreground">
                <Link href={`/insights/${a.slug}`} className="hover:text-primary">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.teaser}</p>
              <Link
                href={`/insights/${a.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-cyan"
              >
                Read article
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
