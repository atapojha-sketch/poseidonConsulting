"use client";

import { useActionState, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";
import { ENQUIRY_INTERESTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const INITIAL: EnquiryState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-lg border border-input bg-secondary px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring";

/** Single-page enquiry form: what it's about, then details — matching the
 *  reference design's contact page. */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, INITIAL);
  const [interests, setInterests] = useState<string[]>([]);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-primary/40 bg-primary/10 p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-xl font-light text-foreground">
          Received, loud and clear
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  const toggle = (interest: string) =>
    setInterests((cur) =>
      cur.includes(interest) ? cur.filter((i) => i !== interest) : [...cur, interest]
    );

  return (
    <form action={formAction} className="rounded-xl border border-border bg-card p-6 sm:p-8">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {interests.map((i) => (
        <input key={i} type="hidden" name="interests" value={i} />
      ))}

      <fieldset>
        <legend className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          How can we help you?
        </legend>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {ENQUIRY_INTERESTS.map((interest) => {
            const active = interests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                onClick={() => toggle(interest)}
                aria-pressed={active}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg border px-3.5 py-3 text-left text-sm transition-colors",
                  active
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-secondary text-foreground/80 hover:border-muted-foreground"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "grid h-4.5 w-4.5 shrink-0 place-items-center rounded-sm border",
                    active ? "border-primary bg-primary text-primary-foreground" : "border-input"
                  )}
                >
                  {active && <Check className="h-3 w-3" />}
                </span>
                {interest}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-foreground/80">
            First name <span className="text-primary">*</span>
          </span>
          <input name="firstName" required autoComplete="given-name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-foreground/80">
            Last name <span className="text-primary">*</span>
          </span>
          <input name="lastName" required autoComplete="family-name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-foreground/80">Company</span>
          <input name="company" autoComplete="organization" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-foreground/80">Mobile</span>
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-foreground/80">
            Email <span className="text-primary">*</span>
          </span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-foreground/80">
            Tell us about your project <span className="text-primary">*</span>
          </span>
          <textarea name="message" required rows={4} className={inputClass} />
        </label>
      </div>

      {state.status === "error" && (
        <p role="alert" className="mt-4 rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-sm text-foreground">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cyan disabled:opacity-60"
      >
        {pending ? "Transmitting…" : "Send enquiry"}
        {!pending && <ArrowRight className="h-4 w-4" />}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        We'll contact you within two working days.
      </p>
    </form>
  );
}
