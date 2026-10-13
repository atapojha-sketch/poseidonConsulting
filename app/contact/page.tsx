import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Fill in the details and we'll contact you within two working days. Call 1300 110 239 or email info@poseidonconsulting.com.au.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Contact Us"
        lede="Fill in the details below and we will contact you within two working days."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Phone</p>
                <a href={`tel:${SITE.phone}`} className="tnum mt-1 block font-display text-lg font-medium text-foreground transition-colors hover:text-primary">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Email</p>
                <a href={`mailto:${SITE.email}`} className="mt-1 block break-all text-sm font-medium text-foreground transition-colors hover:text-primary">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Office</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/85">
                  {SITE.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{SITE.legalName}</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
