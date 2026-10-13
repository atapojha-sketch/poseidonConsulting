import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Eyebrow, SectionHeading } from "@/components/section";
import { SPECIALIST_AREAS } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Poseidon Consulting Solutions seeks to demystify technology and help its customers with innovative IT solutions that drive business sustainability.",
};

const VALUES = [
  {
    title: "Dynamic",
    body: "As a dynamic technology consulting and solution architecture consultancy we have realistic insights, international experience and mastery of disciplines — backed by years of experience leading projects from conception to completion in financial services, healthcare and logistics.",
  },
  {
    title: "Clarity",
    body: "We bring clarity to complex problems by adopting an agnostic approach. Whether legacy systems are involved or new technologies — digitisation, cloud, big data, mobile — there is no substitute for analysis and a structured approach to solution architecture.",
  },
  {
    title: "Good design, robust engineering",
    body: "Good design that is well engineered, supported by detailed specifications, delivers a robust and sustainable solution in a predictable manner while substantially reducing project costs and implementation times.",
  },
  {
    title: "Agile",
    body: "In the current environment of fast-evolving business needs, complex system interactions and agile development, we help minimise project risk by delivering predictable business outcomes.",
  },
  {
    title: "Passionate",
    body: "Our passionate, experienced and dedicated team works together with one aim — to provide reliable, approachable and expert service, realising our goal to be a one-stop technology consultancy and solutions development company.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our vision"
        title="About Us"
        lede="Poseidon Consulting Solutions seeks to demystify technology and help its customers with innovative Information Technology solutions that drive business sustainability."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
          <p>
            We are a Sydney-based technology consulting company providing technology consulting,
            enterprise and business architecture, and solutions development services. We advocate
            a holistic and agnostic approach to solution architecture, ensuring the right
            solutions are designed and developed for our customers.
          </p>
          <p>
            Poseidon's world-class consulting and solutions development is delivered through its
            unique business model — a combination of in-house resources and partners. We have a
            track record of working with all our partners, so we not only know them well but trust
            their quality, and control outcomes through our project methodology.
          </p>
          <p>
            We are right-sized: our business is optimised so that we are viable for small and
            medium businesses, while experienced and equipped to deliver multi-million-dollar
            enterprise projects.
          </p>
        </div>

        {/* Product and technology agnostic */}
        <div className="mt-16">
          <Eyebrow>Product and technology agnostic</Eyebrow>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-foreground/80">
            We are both product and technology agnostic. To provide the right solution to our
            customers, Poseidon's local and international network of partners consists of
            specialists for:
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {SPECIALIST_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="h-full rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
              <h2 className="font-display text-lg font-medium tracking-tight text-foreground">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
          <Link
            href="/testimonials"
            className="flex h-full flex-col justify-between rounded-xl border border-primary/40 bg-primary/5 p-7 transition-colors hover:bg-primary/10"
          >
            <h2 className="font-display text-lg font-medium tracking-tight text-foreground">
              Read what our clients say about us
            </h2>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-border/60 bg-deep">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-20">
          <div>
            <SectionHeading eyebrow="Founder" title="Janak Mistry" lede="Principal Consultant and Director" />
            <dl className="mt-8 space-y-4 text-sm">
              <div className="rounded-xl border border-border bg-card/60 p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">Experience</dt>
                <dd className="mt-1.5 text-foreground/85">
                  20+ years on transformation projects for Westpac Bank, Perpetual Investments,
                  The World Bank Group and IBM
                </dd>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">Education</dt>
                <dd className="mt-1.5 text-foreground/85">
                  MBA (Finance & eCommerce), Scheller College of Business (Georgia Tech, USA) and
                  International University in Germany; Diploma in Architecture, Institute of
                  Environmental Design (India)
                </dd>
              </div>
            </dl>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Poseidon founder Janak Mistry has more than 20 years' experience working on
              transformation projects for companies such as Westpac Bank, Perpetual Investments,
              The World Bank Group and IBM.
            </p>
            <p>
              Before moving to Australia in 2005, Janak worked in Heidelberg (Germany), Rotterdam
              (The Netherlands), Atlanta (USA), New Delhi (India) and Singapore — finding a
              permanent home in Sydney and forging a focused new path. A former management
              consultant and business development executive to financial services and software
              companies globally, establishing his identity as an independent consultant was a
              natural progression.
            </p>
            <p className="text-sm text-muted-foreground">
              Interested in joining the network? We're always looking for talented, ambitious
              people — send your details and CV to{" "}
              <a href={`mailto:${SITE.email}`} className="text-primary underline-offset-4 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
