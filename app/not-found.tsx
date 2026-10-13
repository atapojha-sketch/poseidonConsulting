import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Trident } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 pt-24 text-center sm:px-6">
      <span className="grid h-16 w-16 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
        <Trident className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
        Lost at sea
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        The page you're after isn't on our charts. It may have moved in the redesign.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cyan"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  );
}
