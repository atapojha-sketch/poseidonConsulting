"use client";

import { useEffect } from "react";
import { FileDown } from "lucide-react";

/**
 * "Download PDF" = the browser's print-to-PDF of this page (the print
 * stylesheet renders it as a clean, light briefing). When the page is
 * opened with ?print=1 (from a listing card), the dialog opens itself.
 * The query string is read client-side so the route stays static.
 */
export function PrintActions() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") === "1") {
      // Give fonts/layout a beat to settle before the dialog captures.
      const t = setTimeout(() => window.print(), 600);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
    >
      <FileDown className="h-4 w-4" />
      Download PDF
    </button>
  );
}
