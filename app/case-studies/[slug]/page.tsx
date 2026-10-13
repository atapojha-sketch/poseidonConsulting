import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CaseStudyCard } from "@/components/case-study-card";
import { PrintActions } from "@/components/print-actions";
import { CASE_STUDIES } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) notFound();

  const related = CASE_STUDIES.filter((c) => c.slug !== study.slug)
    .filter((c) => c.service === study.service || c.sector === study.sector)
    .slice(0, 3);

  return (
    <>
      <PageHero eyebrow={`${study.sector} · ${study.service}`} title={study.title} lede={study.summary}>
        <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
          {study.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
              <span className="tnum font-display text-2xl font-light tracking-tight text-primary">
                {s.value}
              </span>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <PrintActions />
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            {study.body.map((block) => (
              <div key={block.heading}>
                <h2 className="font-display text-2xl font-light tracking-tight text-foreground">
                  {block.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className="text-[15px] leading-relaxed text-foreground/80">
                      {p}
                    </p>
                  ))}
                </div>
                {block.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/80">
                        <span aria-hidden className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-primary/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-xl border border-primary/30 bg-deep p-7 lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-medium text-foreground">Outcome</h2>
            <ul className="mt-4 space-y-3.5">
              {study.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <Link
          href="/case-studies"
          className="no-print mt-14 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-cyan"
        >
          <ArrowLeft className="h-4 w-4" />
          All case studies
        </Link>
      </section>

      {related.length > 0 && (
        <section className="no-print border-t border-border/60 bg-deep">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">
              Related work
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((c) => (
                <CaseStudyCard key={c.slug} study={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="no-print">
        <CtaBand />
      </div>
    </>
  );
}
