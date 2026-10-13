import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Eyebrow } from "@/components/section";
import { TestimonialCard } from "@/components/testimonials";
import { TESTIMONIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "What Our Clients Say",
  description:
    "Trusted on business-critical, regulatory and transformation programs by banks, payment networks, founders and global institutions.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="What our clients say"
        title="Trusted on business-critical programs"
        lede="Trusted on business-critical, regulatory and transformation programs by banks, payment networks, founders and global institutions."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Eyebrow className="mb-8">In their words</Eyebrow>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
