# Poseidon Consulting Solutions — website redesign

A ground-up rebuild of [poseidonconsulting.com.au](https://www.poseidonconsulting.com.au)
(the old WordPress site is currently down with a critical error). Content was
extracted from the Internet Archive's March 2025 snapshot and restructured;
the visual design is new.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · Motion (framer-motion) · lucide-react

## Design system

- **Look:** dark, green-accented maritime theme — near-black `#0a0a0a` background,
  brand green `#61b875`, minimal line icons (trident mark, compass, helm, anchor, waves),
  sonar-ring hero animation, Plus Jakarta Sans display / Inter body.
- Tokens live in `app/globals.css` (`:root` + Tailwind 4 `@theme inline`).
- All business facts (phone, email, address) live in `lib/site.ts`;
  all page content (services, case studies, testimonials, stats) in `lib/data.ts`.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, stats, bento "Why Poseidon", services, case-study previews, process, testimonials, contact |
| `/services/[slug]` | 4 services (technology-consulting, cto-as-a-service, solution-architecture, software-engineering) |
| `/case-studies` + `/case-studies/[slug]` | All 8 original case studies, with Situation/Approach/Outcome and stat cards |
| `/how-we-work` | Process, networked model, engagement/team-split gauges |
| `/why-projects-fail` | The original thought-leadership page |
| `/about` | Vision, values, founder, partner/SME network (careers folded in) |
| `/contact` | Two-step enquiry form |

## Run

```bash
npm install
npm run dev
```

## Enquiry email

The contact form posts to a server action (`app/actions.ts`) that sends via
Resend when configured:

- `RESEND_API_KEY` — Resend API key
- `ENQUIRY_FROM_EMAIL` — verified "from" address
- `ENQUIRY_TO_EMAIL` — optional; defaults to info@poseidonconsulting.com.au

Until set, the form tells visitors honestly to phone/email instead.
