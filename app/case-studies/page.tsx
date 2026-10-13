import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CaseStudyCard } from "@/components/case-study-card";
import { CASE_STUDIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real programs, real recoveries, real returns. Each case study is available to read in full and to download as a PDF briefing.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real programs. Real recoveries. Real returns."
        lede="Each case study is available to read in full and to download as a PDF briefing."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
