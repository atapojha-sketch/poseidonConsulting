"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Wordmark } from "@/components/logo";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Poseidon Consulting — home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {/* Services dropdown (pure CSS hover/focus — no JS needed) */}
          <div className="group relative">
            <Link
              href="/services"
              className={cn(
                "flex items-center gap-1 rounded-md px-2.5 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground",
                pathname.startsWith("/services") && "text-primary"
              )}
            >
              Services
              <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-64 rounded-xl border border-border bg-card p-1.5 shadow-xl shadow-black/40">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
                  >
                    <span className="block text-sm font-medium text-foreground">{s.name}</span>
                    <span className="block text-xs text-muted-foreground">{s.tagline}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground",
                pathname.startsWith(item.href) && "text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/book"
            className="ml-3 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cyan"
          >
            Book a consultation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border/60 bg-background/95 px-4 pb-6 pt-3 backdrop-blur-md lg:hidden"
        >
          <p className="px-1 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Services
          </p>
          <Link
            href="/services"
            className="block rounded-lg px-3 py-2.5 text-[15px] text-foreground/90 hover:bg-secondary"
          >
            All services
          </Link>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block rounded-lg px-3 py-2.5 text-[15px] text-foreground/90 hover:bg-secondary"
            >
              {s.name}
            </Link>
          ))}
          <div className="my-3 h-px bg-border/60" />
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-[15px] text-foreground/90 hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-4 block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Book a consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
