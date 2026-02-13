export const Callout = (props: { tone?: "neutral" | "good" | "warn" | "bad"; title: string; children: React.ReactNode; }) => {
  const tone = props.tone ?? "neutral";

  const cls = tone === "good"
    ? "border-emerald-500/20 bg-emerald-500/10"
    : tone === "warn"
      ? "border-amber-500/20 bg-amber-500/10"
      : tone === "bad"
        ? "border-rose-500/20 bg-rose-500/10"
        : "border-white/10 bg-white/5";

  return (
    <div className={`not-prose rounded-2xl border p-4 ${cls}`}>
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="mt-2 text-sm leading-6 opacity-90">{props.children}</div>
    </div>
  );
}

export const UseCase = (props: { title: string; problem: React.ReactNode; how: React.ReactNode; outcome: React.ReactNode; tags?: string[]; }) => (
  <section className="not-prose rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-soft backdrop-blur">
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-white">{props.title}</h3>

        {
          props.tags?.length
          ?
            <div className="flex flex-wrap gap-2">
              {
                props.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))
              }
            </div>
          : null
        }
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
            Problem
          </div>
          <div className="mt-2 text-sm leading-6 text-white/70">
            {props.problem}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
            How DriftQ helps
          </div>
          <div className="mt-2 text-sm leading-6 text-white/70">
            {props.how}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
            Outcome
          </div>
          <div className="mt-2 text-sm leading-6 text-white/70">
            {props.outcome}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const GradientWord = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-emerald-200 via-emerald-100 to-fuchsia-200 bg-clip-text text-transparent">
    {children}
  </span>
);

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[0.95em] text-white/90">
    {children}
  </code>
);

export const CodeSpan = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-white/90">
    {children}
  </code>
);
