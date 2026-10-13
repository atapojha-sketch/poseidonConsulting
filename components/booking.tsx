"use client";

import { useActionState, useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { submitBooking, type EnquiryState } from "@/app/actions";
import { cn } from "@/lib/utils";

const INITIAL: EnquiryState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-lg border border-input bg-secondary px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring";

// Mon–Fri, 09:00–16:00 AEST, 30-minute sessions.
const SLOT_TIMES = Array.from({ length: 14 }, (_, i) => {
  const h = 9 + Math.floor(i / 2);
  const m = i % 2 === 0 ? "00" : "30";
  return `${String(h).padStart(2, "0")}:${m}`;
});

type Day = { iso: string; label: string; weekday: string; dayNum: number; month: string };

function upcomingWeekdays(count: number): Day[] {
  const days: Day[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1); // start tomorrow
  while (days.length < count) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      days.push({
        iso: d.toISOString().slice(0, 10),
        label: d.toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
        weekday: d.toLocaleDateString("en-AU", { weekday: "short" }),
        dayNum: d.getDate(),
        month: d.toLocaleDateString("en-AU", { month: "short" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

export function Booking() {
  const [state, formAction, pending] = useActionState(submitBooking, INITIAL);
  // The day list depends on "today", so it must be computed on the client
  // after mount — the statically prerendered HTML would otherwise bake in
  // the build date and mismatch on hydration.
  const [days, setDays] = useState<Day[]>([]);
  const [day, setDay] = useState<Day | null>(null);
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setDays(upcomingWeekdays(10));
  }, []);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-primary/40 bg-primary/10 p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </span>
        <h2 className="mt-4 font-display text-xl font-light text-foreground">Request received</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  const slot = day && time ? `${day.label}, ${time}` : "";

  return (
    <form action={formAction} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="slot" value={slot} />

      <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          1 · Pick a day
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {days.length === 0 &&
            Array.from({ length: 10 }, (_, i) => (
              <div key={i} aria-hidden className="h-[74px] animate-pulse rounded-lg border border-border bg-secondary" />
            ))}
          {days.map((d) => (
            <button
              key={d.iso}
              type="button"
              onClick={() => setDay(d)}
              aria-pressed={day?.iso === d.iso}
              className={cn(
                "rounded-lg border px-2 py-3 text-center transition-colors",
                day?.iso === d.iso
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-secondary text-foreground/75 hover:border-muted-foreground"
              )}
            >
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                {d.weekday}
              </span>
              <span className="tnum mt-1 block font-display text-lg font-light text-foreground">
                {d.dayNum}
              </span>
              <span className="block text-[10px] text-muted-foreground">{d.month}</span>
            </button>
          ))}
        </div>

        <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          2 · Pick a time <span className="normal-case tracking-normal text-muted-foreground">(AEST)</span>
        </p>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {SLOT_TIMES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTime(t)}
              disabled={!day}
              aria-pressed={time === t}
              className={cn(
                "tnum rounded-lg border px-2 py-2 text-sm transition-colors disabled:opacity-40",
                time === t
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-secondary text-foreground/75 hover:border-muted-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
        {!day && (
          <p className="mt-3 text-xs text-muted-foreground">Pick a day to unlock the times.</p>
        )}
      </div>

      <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          3 · Your details
        </p>
        <div className="mt-4 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-foreground/80">
              Name <span className="text-primary">*</span>
            </span>
            <input name="name" required autoComplete="name" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-foreground/80">
              Email <span className="text-primary">*</span>
            </span>
            <input name="email" type="email" required autoComplete="email" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-foreground/80">Mobile</span>
            <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-foreground/80">
              What should we prepare for?
            </span>
            <textarea name="notes" rows={3} className={inputClass} />
          </label>
        </div>

        <div
          aria-live="polite"
          className={cn(
            "mt-5 rounded-lg border px-3.5 py-2.5 text-sm",
            slot
              ? "border-primary/40 bg-primary/10 text-foreground"
              : "border-border bg-secondary text-muted-foreground"
          )}
        >
          {slot ? `Requested: ${slot} AEST` : "No time selected yet"}
        </div>

        {state.status === "error" && (
          <p role="alert" className="mt-4 rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-sm text-foreground">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending || !slot}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cyan disabled:opacity-50"
        >
          {pending ? "Sending request…" : "Request this time"}
          {!pending && <ArrowRight className="h-4 w-4" />}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Thirty minutes, no obligation. We confirm every booking by email.
        </p>
      </div>
    </form>
  );
}
