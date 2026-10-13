import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CaseStudyCard } from "@/components/case-study-card";
import { CASE_STUDIES, SERVICES } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  // Loosely related work: match on service names appearing in the study tag.
  const related = CASE_STUDIES.filter((c) =>
    service.name.toLowerCase().includes(c.service.toLowerCase()) ||
    c.service.toLowerCase().includes(service.name.split(" ")[0].toLowerCase())
  ).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Services · ${service.tagline}`}
        title={service.name}
        lede={service.summary}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl space-y-5">
          {service.intro.map((p) => (
            <p key={p.slice(0, 32)} className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {service.sections.map((section) => (
            <div key={section.heading} className="rounded-xl border border-border bg-card p-7 sm:p-8">
              <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
                {section.heading}
              </h2>
              {section.lede && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.lede}</p>
              )}
              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border/60 bg-deep">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                Related work
              </h2>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan"
              >
                All case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
