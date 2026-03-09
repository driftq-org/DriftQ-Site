import Link from "next/link";
import { site } from "@/lib/site";

const linkCls =
  "text-white/70 hover:text-white transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]";

const lastUpdatedLabel = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC"
}).format(new Date(`${site.lastUpdated}T00:00:00Z`));

const SiteFooter = () => (
  <footer className="border-t border-white/10 bg-black">
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-white">{site.name}</div>
          <div className="mt-1 text-sm text-white/70">{site.tagline}</div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/docs" className={linkCls}>Docs</Link>
          <Link href="/docs/observability/metrics" className={linkCls}>Metrics</Link>
          <Link href="/docs/roadmap" className={linkCls}>Roadmap</Link>
          <a href={site.githubUrl} className={linkCls} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          Copyright {new Date().getFullYear()} DriftQ. Built for developers shipping reliable AI workflows.
        </div>
        <div>
          Site last updated: {lastUpdatedLabel}
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
