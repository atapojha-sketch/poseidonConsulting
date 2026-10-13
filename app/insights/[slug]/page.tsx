import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { INSIGHTS } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.teaser };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = INSIGHTS.filter((a) => a.slug !== article.slug);

  return (
    <>
      <PageHero eyebrow={`Insights · ${article.label}`} title={article.title} lede={article.teaser}>
        <p className="mt-6 text-xs text-muted-foreground">
          {article.date} · {article.readTime}
        </p>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="space-y-10">
          {article.body.map((block, i) => (
            <div key={block.heading ?? i}>
              {block.heading && (
                <h2 className="font-display text-2xl font-light tracking-tight text-foreground">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs && (
                <div className={block.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className="text-[15px] leading-relaxed text-foreground/80 sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {block.bullets && (
                <ul className="mt-5 space-y-3">
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

        <Link
          href="/insights"
          className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-cyan"
        >
          <ArrowLeft className="h-4 w-4" />
          All insights
        </Link>
      </section>

      {others.length > 0 && (
        <section className="border-t border-border/60 bg-deep">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-2xl font-light tracking-tight text-foreground">
              More from the field
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="rounded-xl border border-border bg-card/70 p-6 transition-colors hover:border-primary/50"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                    {a.label}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-light leading-snug text-foreground">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
