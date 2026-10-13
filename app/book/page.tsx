import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Booking } from "@/components/booking";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Thirty minutes that can save a program. Pick a time — we'll come prepared to talk outcomes, architecture and the fastest path to value. No obligation.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title="Thirty minutes that can save a program."
        lede="Pick a time that suits you. We will come prepared to talk outcomes, architecture and the fastest path to value — no obligation. We confirm every booking by email."
      >
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Monday to Friday · 09:00 – 16:00 AEST · 30-minute sessions
        </p>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Booking />
      </section>
    </>
  );
}
