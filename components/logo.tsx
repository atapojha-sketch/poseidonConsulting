import { cn } from "@/lib/utils";

/**
 * Minimal, geometric trident mark — the site's maritime signature.
 * Drawn as thin strokes so it reads "futuristic instrument", not clipart.
 */
export function Trident({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      {/* centre tine + shaft */}
      <path d="M12 2v20" />
      {/* side tines */}
      <path d="M5 4v3a7 7 0 0 0 7 7 7 7 0 0 0 7-7V4" />
      {/* barbs */}
      <path d="M9.5 4.5 12 2l2.5 2.5" />
      {/* base */}
      <path d="M8.5 22h7" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
        <Trident className="h-5 w-5" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Poseidon <span className="text-primary">Consulting</span>
      </span>
    </span>
  );
}
