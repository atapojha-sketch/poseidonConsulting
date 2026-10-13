import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CompassRose } from "@/components/chart";
import { Eyebrow } from "@/components/section";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_100%,#081225_0%,#020617_75%)]"
      />
      <CompassRose className="absolute -left-20 -bottom-20 h-72 w-72 opacity-70" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div>
          <Eyebrow>Contact us</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Ready to chart a course?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Fill in the details and we will contact you within two working days — or book a
            thirty-minute consultation directly.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cyan"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
