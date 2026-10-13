import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technology Consulting, CTO as a Service, Solution Architecture and Software Engineering — four disciplines working to one outcome: delivering business value.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four disciplines. One outcome."
        lede="Technology Consulting, CTO as a Service, Solution Architecture and Software Engineering — four disciplines working to one outcome: delivering business value."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50 sm:p-8"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                {s.name}
              </span>
              <h2 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">
                {s.tagline}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.intro[0]}
              </p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-cyan"
              >
                Learn more
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
