import Link from "next/link";
import DocsShell from "@/components/docs/DocsShell";

const StartersPage = () => {
  return (
    <DocsShell currentPath="/docs/starters">
      <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Starters</h1>
      <p className="mt-3 text-base leading-relaxed text-white/70">
        Want real, runnable examples (not just API docs)? Use the DriftQ-Starters repo. Each starter is a complete
        project with its own README and run steps.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <div className="text-sm font-semibold text-white">DriftQ-Starters</div>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Browse the starter templates here:
        </p>

        <a
          href="https://github.com/driftq-org/DriftQ-Starters"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 underline underline-offset-4 decoration-transparent hover:text-emerald-100 hover:decoration-emerald-200/60"
        >
          Open DriftQ-Starters on GitHub →
        </a>

        <div className="mt-4 text-xs text-white/50">
          Tip: pick a starter that matches your stack, then follow its README exactly (versions + commands can evolve).
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">When to use starters</h2>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          <li>• You want a working project scaffold with DriftQ wired in</li>
          <li>• You want copy/paste examples for produce/consume/ack/nack</li>
          <li>• You want “real app” patterns (retries, DLQ, leases) without guessing</li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-white/50">
        If you’re just getting started, do{" "}
        <Link
          href="/docs/quickstart"
          className="text-emerald-200 underline underline-offset-4 decoration-transparent hover:text-emerald-100 hover:decoration-emerald-200/60"
        >
          Quickstart
        </Link>{" "}
        first, then jump into a starter.
      </p>
    </DocsShell>
  );
};

export default StartersPage;
