import Link from "next/link";
import { Wordmark } from "@/components/logo";
import { SERVICES } from "@/lib/data";
import { SITE } from "@/lib/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/testimonials", label: "What Our Clients Say" },
  { href: "/insights", label: "Insights" },
];

const WORK_LINKS = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/book", label: "Book a Consultation" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-deep">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Technology Consulting, Enterprise Architecture, Business Architecture, Information
              Architecture. Navigate complexity — delivering outcomes.
            </p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-muted-foreground">
              {SITE.legalName}
              <br />
              {SITE.address.join(", ")}
            </address>
            <p className="mt-3 text-sm text-muted-foreground">
              <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-primary">
                {SITE.phoneDisplay}
              </a>
              {" · "}
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-primary">
                {SITE.email}
              </a>
            </p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <nav aria-label="Footer — company">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — services">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — work with us">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Work With Us
            </p>
            <ul className="mt-4 space-y-2.5">
              {WORK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Sydney, Australia</p>
        </div>
      </div>
    </footer>
  );
}
