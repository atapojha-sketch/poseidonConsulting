import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE } from "@/lib/site";

// Outfit (light-to-semibold) carries the elegant, tightly-tracked display
// voice of the approved reference design; Manrope carries body copy.
const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Poseidon Consulting — Technology & Enterprise Architecture",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Navigate enterprise complexity. Deliver change effectively. Sydney-based technology consulting: enterprise, business and information architecture, vendor selection, project recovery and CTO as a service.",
  openGraph: {
    title: "Poseidon Consulting — Technology & Enterprise Architecture",
    description:
      "Technology consulting, solution architecture, project recovery and CTO as a service — clients achieve 20 to 500× return on their investment in our services.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
