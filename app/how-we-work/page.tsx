import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Eyebrow, SectionHeading } from "@/components/section";
import { ProcessBars } from "@/components/process-bars";
import { PROJECT_PHASES, TEAM_MAKEUP } from "@/lib/data";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "A structured, risk-based consulting process — personalised service, complete coverage, and a networked model with KPIs based solely on customer success.",
};

const DISCIPLINES = [
  {
    title: "Listening and communication",
    items: [
      "Eliminating incorrect assumptions about our customers",
      "Identifying key customer requirements, problem and outcome definitions",
      "Establishing customer listening and learning procedures",
      "Continual assessment and improving customer contact",
      "Enabling transparent customer complaint management",
      "Measuring customer satisfaction and dissatisfaction",
      "Aligning our management systems to attract and retain loyal customers",
    ],
  },
  {
    title: "Innovative solutions",
    items: [
      "Applying a step-by-step improvement approach",
      "Identifying the core business processes that add customer value — and outsourcing the rest",
      "Translating customer requirements into product and service designs",
      "Reducing production cycle times and the cost of poor quality",
      "Managing critical business processes, including supply chain, R&D and knowledge management",
      "Establishing world-class production, delivery and support processes",
      "Benchmarking to inspire continuous improvements",
    ],
  },
  {
    title: "Delivering results, measured with facts",
    items: [
      "The right frameworks selected and applied throughout the project lifecycle",
      "A balanced scorecard built on agreed KPI measures",
      "Performance on key measures communicated to the people who can act on it",
      "Understanding the cause-and-effect relationship of key measures",
      "Aligning measures and analysis with goals and strategies",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="How We Work"
        lede="We value the trust placed in us by our clients and ensure that it is sustained — by always providing personalised service and adopting a structured, risk-based approach."
      />

      {/* Complete coverage + networked model */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Complete coverage</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-light tracking-tight text-foreground sm:text-3xl">
              A scope of services that ensures nothing is overlooked
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/80">
              <p>
                Our consulting scope ensures no aspect is overlooked — anything outside delivery
                scope is still formally noted. Good design and detailed specifications deliver the
                desired results predictably, while substantially reducing project costs,
                implementation times and risk.
              </p>
              <p>
                We advocate a two-phased engagement: solution architecture, then solution
                development. We work with stakeholders to articulate problems and outcomes,
                design agnostic solution options, then select technology and design process.
                Once the solution and specifications are defined, you choose — implement through
                us, or issue it for open tender.
              </p>
            </div>
          </div>
          <div>
            <Eyebrow>A networked consulting model</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-light tracking-tight text-foreground sm:text-3xl">
              KPIs based solely on customer success
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/80">
              <p>
                In the age of collaboration it is not rational for consulting companies to base
                their KPIs on resource utilisation. Poseidon's KPIs are based solely on customer
                success and satisfaction. What does this mean?
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-primary/70" />
                  Our pricing is not based on bench strength — we mobilise resources at short
                  notice, and our customers benefit from the cost savings.
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-primary/70" />
                  A global network of best-of-breed platform partners and subject matter experts
                  puts expert advice within reach at a reasonable price.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="border-y border-border/60 bg-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <SectionHeading
            eyebrow="The discipline"
            title="Three habits behind predictable outcomes"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {DISCIPLINES.map((d) => (
              <div key={d.title} className="h-full rounded-xl border border-border bg-card/70 p-7">
                <h2 className="font-display text-lg font-medium tracking-tight text-foreground">
                  {d.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                      <span aria-hidden className="mt-2 h-1 w-4 shrink-0 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Whether legacy systems are involved or new technologies — digitisation, cloud
            implementations, big data or mobile — there is no substitute for analysis and a
            structured approach to solution architecture.
          </p>
        </div>
      </section>

      {/* Process gauges */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading eyebrow="Our process" title="A typical Poseidon engagement" />
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
      </section>

      <CtaBand />
    </>
  );
}
