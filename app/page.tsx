import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CompassRose, ChartLines } from "@/components/chart";
import { Entrance, Item, Reveal, Stagger } from "@/components/motion";
import { Eyebrow, SectionHeading } from "@/components/section";
import { StatCard } from "@/components/stat-card";
import { ProcessBars } from "@/components/process-bars";
import { TestimonialCard } from "@/components/testimonials";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import {
  CASE_STUDIES,
  INSIGHTS,
  MARQUEE_ITEMS,
  PROJECT_PHASES,
  SERVICES,
  STATS,
  TEAM_MAKEUP,
  TESTIMONIALS,
} from "@/lib/data";

const FEATURED_STUDIES = [
  "core-banking-program-recovery",
  "big-data-solution",
  "risk-grids-for-var-calculation",
  "eftpos-settlement-digitisation",
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_0%,#0a1a26_0%,#020617_72%)]"
        />
        <ChartLines />
        <CompassRose className="absolute -right-24 top-10 h-96 w-96 opacity-90 lg:right-0" />

        <Entrance className="relative mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:pb-24 lg:pt-44">
          <Item>
            <Eyebrow>
              Technology Consulting · Enterprise Architecture · Business Architecture · Information
              Architecture
            </Eyebrow>
          </Item>
          <Item>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.04] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
              Navigate enterprise complexity.
              <br />
              <span className="text-primary">Deliver change effectively.</span>
            </h1>
          </Item>
          <Item>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design and deliver the Enterprise, Business and Information Architecture that
              achieves business outcomes — accelerating speed to market with 20 to 500 times
              return on your investment in our services.
            </p>
          </Item>
          <Item>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cyan"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
              >
                Case Studies
              </Link>
              <Link
                href="/insights/why-projects-fail"
                className="inline-flex items-center gap-1.5 px-1 py-2 text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                Why projects fail to deliver business value?
              </Link>
            </div>
          </Item>
          <Item>
            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </Item>
        </Entrance>

        {/* Service ticker */}
        <div className="relative border-t border-border/60 bg-deep/70 py-4 backdrop-blur-sm">
          <div className="flex overflow-hidden" aria-hidden>
            <div className="marquee-track flex shrink-0 items-center">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 pr-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/50"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Why Poseidon ───────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Why Poseidon?</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              Navigate enterprise complexity:
              <br />
              <span className="text-primary">deliver enterprise change effectively.</span>
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/insights/why-projects-fail"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan"
              >
                Why projects fail to deliver business value?
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Stagger>
            <ul className="space-y-5">
              {[
                "Design and deliver the Enterprise, Business and Information Architecture that achieves business outcomes.",
                "Accelerate speed to market.",
                "Achieve 20 to 500 times return on their investment in our services.",
                "Access our network of specialists in USA, Germany, The Netherlands, Singapore and India.",
              ].map((item) => (
                <li key={item}>
                  <Item className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 text-[15px] leading-relaxed text-foreground/85">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </Item>
                </li>
              ))}
            </ul>
          </Stagger>
        </div>
      </section>

      {/* ─────────────── Delivering outcomes / How we work ─────────────── */}
      <section className="border-y border-border/60 bg-deep">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Delivering outcomes"
                title="Solutions, not just software"
                lede="Quality should not mean compromise. Evaluate vendors and technology upfront; set projects up for success. Innovative yet pragmatic, backed by 20 years' experience and an international network."
              />
            </Reveal>
            <div className="lg:justify-self-end">
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-colors hover:text-cyan"
              >
                Learn more about how we work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Testimonials ───────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What our clients say"
            title="Trusted on business-critical programs"
          />
          <Link
            href="/testimonials"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan"
          >
            All client testimonials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <Item key={t.name} className="h-full">
              <TestimonialCard t={t} />
            </Item>
          ))}
        </Stagger>
      </section>

      {/* ───────────────────────── Services ───────────────────────── */}
      <section className="border-y border-border/60 bg-deep">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Services" title="Four disciplines. One outcome." />
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Item key={s.slug} className="h-full">
              <article
                className="flex h-full flex-col rounded-xl border border-border bg-card/70 p-7 transition-colors hover:border-primary/50 sm:p-8"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  {s.name}
                </span>
                <h3 className="mt-3 font-display text-2xl font-light tracking-tight text-foreground">
                  {s.tagline}
                </h3>
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
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ──────────────────── Case studies ──────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Case studies" title="Outcomes you can download" />
          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan"
          >
            All eight case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {FEATURED_STUDIES.map((slug) => {
            const study = CASE_STUDIES.find((c) => c.slug === slug)!;
            return (
              <Item key={slug} className="h-full">
                <CaseStudyCard study={study} />
              </Item>
            );
          })}
        </Stagger>
      </section>

      {/* ───────────────────── Network ───────────────────── */}
      <section className="border-y border-border/60 bg-deep">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <SectionHeading eyebrow="Network" title="One principal. A global bench." />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            <Item className="h-full">
            <div className="h-full rounded-xl border border-border bg-card/70 p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                Partners
              </p>
              <h3 className="mt-3 font-display text-xl font-light tracking-tight text-foreground">
                Technology
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We have cultivated partnerships over many years with leading providers of Cloud,
                Workflow Automation, Artificial Intelligence, Big Data, Robotic Process Automation,
                Integration and Machine Learning platforms to service each client's unique needs
                and situations.
              </p>
            </div>
            </Item>
            <Item className="h-full">
            <div className="h-full rounded-xl border border-primary/40 bg-card p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                Principal Consultant and Director
              </p>
              <h3 className="mt-3 font-display text-xl font-light tracking-tight text-foreground">
                Janak Mistry
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Management consultant with more than 20 years' experience in financial services
                industries internationally. Having graduated with a Master of Business
                Administration and design studies, he leverages his understanding of marketing,
                finance and operations to deliver effective solutions.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-cyan"
              >
                About us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            </Item>
            <Item className="h-full">
            <div className="h-full rounded-xl border border-border bg-card/70 p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                Subject Matter Experts
              </p>
              <h3 className="mt-3 font-display text-xl font-light tracking-tight text-foreground">
                Specialists
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our international network of subject matter experts in Cyber Security, Quantitative
                Modelling, Software Engineering, Analytics and Process Engineering has been
                developed over many years of complex projects — so our customers can access their
                expertise at short notice.
              </p>
            </div>
            </Item>
          </Stagger>
        </div>
      </section>

      {/* ───────────────────── Our process ───────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading eyebrow="Our process" title="A typical Poseidon engagement" />
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/60">
              A typical Poseidon project (Technology Consulting, Solution Architecture)
            </p>
            <ProcessBars items={PROJECT_PHASES} />
          </div>
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Poseidon team makeup
            </p>
            <ProcessBars items={TEAM_MAKEUP} />
          </div>
        </div>
        <Link
          href="/how-we-work"
          className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan"
        >
          How we work
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* ───────────────────── Insights ───────────────────── */}
      <section className="border-t border-border/60 bg-deep">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Thinking from the field"
              lede="Notes on enterprise architecture, technology strategy and delivering change that sticks."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {INSIGHTS.map((a) => (
              <Item key={a.slug} className="h-full">
              <article
                className="flex h-full flex-col rounded-xl border border-border bg-card/70 p-7 transition-colors hover:border-primary/50"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  {a.label}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {a.date} · {a.readTime}
                </p>
                <h3 className="mt-3 font-display text-xl font-light leading-snug tracking-tight text-foreground">
                  <Link href={`/insights/${a.slug}`} className="hover:text-primary">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.teaser}
                </p>
                <Link
                  href={`/insights/${a.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-cyan"
                >
                  Read article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
