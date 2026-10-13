import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import type { CaseStudy } from "@/lib/data";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <span className="self-start text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
        {study.sector}
      </span>
      <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-foreground">
        <Link href={`/case-studies/${study.slug}`} className="hover:text-primary">
          {study.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
      <div className="mt-6 flex items-center gap-4">
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-cyan"
        >
          Read
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={`/case-studies/${study.slug}?print=1`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <FileDown className="h-3.5 w-3.5" />
          Download PDF
        </Link>
      </div>
    </article>
  );
}
