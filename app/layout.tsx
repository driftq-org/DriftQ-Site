import "./globals.css";
import Providers from "./providers";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  metadataBase: new URL("https://drift-q.com"),
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website"
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className="min-h-screen bg-[#05070c] text-zinc-50 antialiased overflow-x-hidden">
      {/* Global background (grid + corner glows) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#05070c]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_55%_at_0%_10%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_55%_at_100%_10%,rgba(168,85,247,0.18),transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-70 [mask-image:radial-gradient(45%_45%_at_50%_0%,black,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
      </div>

      <Providers>
        <SiteHeader />
        {children}
        <SiteFooter />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
