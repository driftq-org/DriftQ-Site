import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const containerCls = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const pillCls = "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70";
const blockCodeCls = [
  "min-w-0 max-w-full overflow-x-auto rounded-2xl px-4 py-3 font-mono text-xs leading-relaxed shadow-sm sm:text-sm",
  "!bg-zinc-950 !text-zinc-100",
  "[&_span]:!bg-transparent"
].join(" ");

const HomeTabs = () => (
  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur sm:p-7">
    <div className="flex flex-wrap gap-2">
      <div className={pillCls}>Replayable runtime</div>
      <div className={pillCls}>Guardrails + governance</div>
      <div className={pillCls}>Secure tool calls</div>
      <div className={pillCls}>Observability</div>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div>
        <div className="text-sm font-semibold text-white">Workflow execution that stays inspectable</div>
        <p className="mt-2 text-sm leading-6 text-white/70">
          DriftQ keeps runs replayable and governed, so you can pause for humans, inspect lineage, branch a replay,
          or stage risky side effects without rebuilding runtime plumbing yourself.
        </p>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50">Replay + lineage</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Re-drive from the step that changed, compare alternate branches, and inspect what changed across runs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50">Guardrails</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Policy, risk scoring, HITL approvals, tenant boundaries, and secure tool execution are first-class.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className={pillCls}>Observe in real time</div>
          <div className={pillCls}>OTel + metrics</div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>workflow_runs_total</span>
              <span>status=completed tenant=acme</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-emerald-300" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>human_tasks_waiting</span>
              <span>queue=review</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[32%] rounded-full bg-fuchsia-300" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>tool_call_duration_ms</span>
              <span>tool=send_email route=primary</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[12%] rounded-full bg-amber-300" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/50">
          Core telemetry is OpenTelemetry-native, so traces and metrics can flow into the rest of your stack.
        </p>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <main>
    <section className="relative overflow-hidden">
      <div className={`${containerCls} pt-14 pb-16 sm:pt-20 sm:pb-20`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-6">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-[12px] border border-white/10 bg-white/5 px-1 py-0.5 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Open-source • Developer-first •
              <span className="beta-badge">BETA</span>
              • Durable broker + governed runtime
            </div>

            <h1 className="text-2xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.04]">
              A <span className="bg-gradient-to-r from-emerald-200 via-emerald-100 to-fuchsia-200 bg-clip-text text-transparent">durable broker</span> and replayable AI runtime for governed agent orchestration.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              DriftQ combines durable messaging with replayable workflows, policy and risk checks, human-in-the-loop
              approvals, secure tool execution, agent memory, and production-ready observability in one Go core.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="docs/run-locally" variant="primary">Run Locally</Button>
              <Button
                href="docs/"
                variant="primary"
                className="!bg-white !text-zinc-950 hover:!bg-zinc-100"
              >
                View Docs
              </Button>
            </div>

            <div className="flex max-w-full flex-wrap gap-2 pt-2">
              <span className={pillCls}>Replay + forensics</span>
              <span className={pillCls}>Policy + HITL</span>
              <span className={pillCls}>Secure tool gateway</span>
              <span className={pillCls}>OTel + metrics</span>
              <span className={pillCls}>Multi-agent runtime</span>
            </div>
          </Reveal>

          <Reveal delayMs={90} className="min-w-0">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">Quickstart</div>
                  <div className="mt-1 text-sm text-white/70">Run the server, verify the broker, then jump into the runtime docs.</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  driftqctl
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/50">1) Run</div>
                    <div className="text-xs text-white/50">docker</div>
                  </div>

                  <pre className={`${blockCodeCls} mt-3 whitespace-pre`}>
{`docker run --rm \\
-p 8080:8080 \\
-v driftq-data:/data \\
ghcr.io/driftq-org/driftq-core:1.3.0`}
                  </pre>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/50">2) Create topic</div>
                    <div className="text-xs text-white/50">CLI</div>
                  </div>
                  <p className={`${blockCodeCls} mt-3`}>{`driftqctl topics create --name demo --partitions 1`}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
                      3) Produce + consume
                    </div>
                    <div className="text-xs text-white/50">streaming</div>
                  </div>

                  <pre className={`${blockCodeCls} mt-3 whitespace-pre`}>
{`# produce
curl -X POST http://localhost:8080/v1/produce \\
-H "content-type: application/json" \\
-d '{"topic":"demo","value":"hello"}'

# consume (stream)
driftqctl topics peek --topic demo --group g1`}
                  </pre>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-white/50">The same server also exposes replay, policy, eval, agent-state, and runtime debug routes.</div>
                <Link
                  href="/docs/quickstart"
                  className="text-sm font-semibold text-emerald-200 hover:text-emerald-100 underline underline-offset-4 decoration-transparent hover:decoration-emerald-200/60"
                >
                  See the full guide ?
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="relative">
      <div className="mx-auto w-full max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-3">
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Embedded dashboard, same binary
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              DriftQ-Core ships a built-in dashboard under <code>/ui/</code>. No separate service, no extra deploy,
              and no detached admin app to keep in sync.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Served by the same <code>driftqd</code> process as the API</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Included in the Docker image and local Docker flow</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Covers overview, topics, runs, artifacts, runtime state, and debug surfaces</li>
            </ul>

            <p className="mt-6 text-sm text-white/50">
              Run DriftQ, then open <code>http://localhost:8080/ui/</code>.
            </p>
          </Reveal>

          <Reveal delayMs={110} className="lg:col-span-9">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07101f] shadow-soft">
              <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-white">Built-in dashboard preview</div>
                  <div className="mt-1 text-xs text-white/50">Imported from the current DriftQ-Core repo UI assets</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-200">
                  /ui/
                </div>
              </div>

              <Image
                src="/images/ui-dashboard.png"
                alt="DriftQ embedded dashboard UI showing overview metrics, topics, and live events"
                width={1463}
                height={753}
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="relative">
      <div className={`${containerCls} py-16 sm:py-20`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Runtime primitives that do not leak complexity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              You should not have to rebuild durability, replay, governance, tool safety, and observability every time
              you ship an AI workflow. DriftQ keeps the hard parts explicit and the happy path fast.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Durable topics + WAL-backed storage</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Replay, lineage, and what-if branch timelines</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Policy, risk, HITL, and tenant governance</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Tool gateway, receipts, and OpenTelemetry-native telemetry</li>
            </ul>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Reveal delayMs={0} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Replay + forensics</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Time-travel replay, run diffs, workflow diffs, root-cause views, and branching what-if simulations.
                </p>
              </Reveal>

              <Reveal delayMs={70} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Guardrails + HITL</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  RBAC, policy checks, runtime risk scoring, approvals, edits, timeouts, and governed resume flows.
                </p>
              </Reveal>

              <Reveal delayMs={140} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Secure tool execution</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Approved tool registry, schema validation, secret redaction, tool-call audit logs, and staged side effects.
                </p>
              </Reveal>

              <Reveal delayMs={210} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Observability</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  OTel traces, runtime metrics, broker telemetry, and traceable run, node, tool, and approval spans.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative">
      <div className={`${containerCls} py-16 sm:py-20`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Failure is normal. Make recovery boring.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              DriftQ is designed for workflows that touch flaky downstreams: LLMs, tools, third-party APIs, webhooks,
              and long-running jobs. The system should recover with evidence, not just dump the problem on your on-call.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className={pillCls}>multi-agent tasks</span>
              <span className={pillCls}>tool calls</span>
              <span className={pillCls}>approvals</span>
              <span className={pillCls}>workflow releases</span>
              <span className={pillCls}>replay branches</span>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Want a deeper tour? Start with <Link href="/docs/use-cases" className="text-emerald-200 hover:text-emerald-100 underline underline-offset-4 decoration-transparent hover:decoration-emerald-200/60">Use Cases</Link>.
            </p>
          </Reveal>

          <Reveal delayMs={120} className="lg:col-span-7">
            <HomeTabs />
          </Reveal>
        </div>
      </div>
    </section>

    <section className="relative">
      <div className={`${containerCls} pb-20`}>
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft backdrop-blur sm:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Ship governed AI workflows without rebuilding your runtime stack.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  If you already feel the pain of retries, tool safety, replay, runtime visibility, or human approvals,
                  DriftQ is worth a serious look. If not, keep things simple until you need the trust layer.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <Button href="/docs/quickstart" variant="primary">Quickstart</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </main>
);

export default HomePage;
