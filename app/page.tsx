import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

// TODO move these to shared file
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
      <div className={pillCls}>Streaming consume</div>
      <div className={pillCls}>Retries + DLQ</div>
      <div className={pillCls}>Idempotency</div>
      <div className={pillCls}>Observability</div>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div>
        <div className="text-sm font-semibold text-white">Streaming consume that feels reliable</div>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Lease-based streaming consumption so you can safely retry, nack, and recover without writing a distributed
          systems thesis.
        </p>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50">Leases</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Messages are owned temporarily. If a consumer dies, ownership expires and work gets redelivered.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50">Ack / Nack</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Explicit success/failure signals with ownership checks. No “at-least-once” surprises.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className={pillCls}>Observe in real time</div>
          <div className={pillCls}>prometheus-ready</div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>consumer_lag</span>
              <span>group=g1 topic=demo</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-emerald-300" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>inflight_messages</span>
              <span>group=g1 topic=demo</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[32%] rounded-full bg-fuchsia-300" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>dlq_messages_total</span>
              <span>topic=demo</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[12%] rounded-full bg-amber-300" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/50">
          The defaults are boring on purpose. You can wire alerts, dashboards, and SLOs without custom glue.
        </p>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <main>
    {/* HERO */}
    <section className="relative overflow-hidden">
      <div className={`${containerCls} pt-14 pb-16 sm:pt-20 sm:pb-20`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-6">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-[12px] border border-white/10 bg-white/5 px-1 py-0.5 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Open-source • Developer-first •
              <span className="beta-badge">BETA</span>
              • Built for reliability
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              The <span className="bg-gradient-to-r from-emerald-200 via-emerald-100 to-fuchsia-200 bg-clip-text text-transparent">AI-native</span> backbone for reliable agent workflows.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              DriftQ turns retry hell into a reliable, observable system with durable topics, idempotency, leases, DLQ,
              streaming consumption, and a built-in dashboard UI so your agent workflow code stays simple.
            </p>

            {/* TODO Diagram */}
            {/* <div className="flex justify-center py-10">
              <svg width="1020" height="400" viewBox="0 0 1020 400" fill="none" xmlns="http://www.w3.org/2000/svg">

                <rect x="30" y="110" width="150" height="82" rx="18" fill="#1F2937" stroke="#22C55E" stroke-width="5"/>
                <text x="105" y="155" text-anchor="middle" fill="#F1F5F9" font-family="system-ui, sans-serif" font-size="20" font-weight="700">AI Agent</text>


                <path d="M190 151 L265 151" stroke="#22C55E" stroke-width="5.5" marker-end="url(#arrow)"/>


                <rect x="275" y="110" width="120" height="82" rx="18" fill="#1F2937" stroke="#22C55E" stroke-width="5"/>
                <text x="335" y="155" text-anchor="middle" fill="#F1F5F9" font-family="system-ui, sans-serif" font-size="19" font-weight="600">Produce</text>

                <path d="M405 151 L475 151" stroke="#22C55E" stroke-width="5.5" marker-end="url(#arrow)"/>

                <rect x="485" y="65" width="240" height="170" rx="22" fill="#111827" stroke="#22C55E" stroke-width="5.5"/>
                <text x="605" y="120" text-anchor="middle" fill="#F1F5F9" font-family="system-ui, sans-serif" font-size="26" font-weight="700">DriftQ</text>
                <text x="605" y="152" text-anchor="middle" fill="#86EFAC" font-family="system-ui, sans-serif" font-size="16" font-weight="500">Durable Topic</text>


                <rect x="500" y="255" width="95" height="50" rx="12" fill="#1F2937" stroke="#22C55E" stroke-width="3"/>
                <text x="547" y="285" text-anchor="middle" fill="#F1F5F9" font-size="14" font-weight="500">Idempotency</text>

                <rect x="610" y="255" width="95" height="50" rx="12" fill="#1F2937" stroke="#22C55E" stroke-width="3"/>
                <text x="657" y="285" text-anchor="middle" fill="#F1F5F9" font-size="14" font-weight="500">Leases</text>

                <rect x="720" y="255" width="95" height="50" rx="12" fill="#1F2937" stroke="#22C55E" stroke-width="3"/>
                <text x="767" y="285" text-anchor="middle" fill="#F1F5F9" font-size="14" font-weight="500">DLQ</text>

                <rect x="830" y="255" width="95" height="50" rx="12" fill="#1F2937" stroke="#22C55E" stroke-width="3"/>
                <text x="877" y="285" text-anchor="middle" fill="#F1F5F9" font-size="14" font-weight="500">Retries</text>


                <path d="M735 151 L805 151" stroke="#22C55E" stroke-width="5.5" marker-end="url(#arrow)"/>


                <rect x="815" y="110" width="150" height="82" rx="18" fill="#1F2937" stroke="#22C55E" stroke-width="5"/>
                <text x="890" y="155" text-anchor="middle" fill="#F1F5F9" font-family="system-ui, sans-serif" font-size="20" font-weight="700">Consume</text>


                <path d="M880 210 Q 720 340 530 210" fill="none" stroke="#22C55E" stroke-width="4.5" stroke-dasharray="9 6"/>
                <text x="640" y="325" fill="#86EFAC" font-family="system-ui, sans-serif" font-size="15" font-weight="500">Retry / Replay</text>


                <defs>
                  <marker id="arrow" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto">
                    <path d="M2 2 L12 7 L2 12" fill="#22C55E"/>
                  </marker>
                </defs>
              </svg>
            </div> */}

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
              <span className={pillCls}>Go core</span>
              <span className={pillCls}>WAL-backed</span>
              <span className={pillCls}>REST + streaming</span>
              <span className={pillCls}>Built-in /ui dashboard</span>
              <span className={pillCls}>Metrics-ready</span>
            </div>
          </Reveal>

          <Reveal delayMs={90} className="min-w-0">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">Quickstart</div>
                  <div className="mt-1 text-sm text-white/70">Run, create a topic, produce, and stream-consume.</div>
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
                <div className="text-xs text-white/50">This is the happy path. Open `http://localhost:8080/ui/` for the embedded dashboard.</div>
                <Link
                  href="/docs/quickstart"
                  className="text-sm font-semibold text-emerald-200 hover:text-emerald-100 underline underline-offset-4 decoration-transparent hover:decoration-emerald-200/60"
                >
                  See the full guide →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* DASHBOARD */}
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
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Covers overview, topics, producers, consumers, dead letters, and workflows</li>
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

    {/* RELIABILITY PRIMITIVES */}
    <section className="relative">
      <div className={`${containerCls} py-16 sm:py-20`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Reliability primitives that don’t leak
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              You shouldn’t have to rebuild “durability + retries + observability” every time you ship a workflow.
              DriftQ makes the failure modes explicit and the happy path fast.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Durable topics + WAL</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Idempotency keys (first-class)</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Leases + streaming consume</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> Retries + DLQ with reasons</li>
            </ul>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Reveal delayMs={0} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Streaming consume</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  NDJSON streaming endpoint + CLI helpers. Keep consumers simple and stateless.
                </p>
              </Reveal>

              <Reveal delayMs={70} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Leases</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Ownership prevents duplicate work, and expiration guarantees recovery.
                </p>
              </Reveal>

              <Reveal delayMs={140} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Retry + DLQ</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Bounded retries with reasoned DLQ routing, so “poison messages” stop being a mystery.
                </p>
              </Reveal>

              <Reveal delayMs={210} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Observability</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Inflight, lag, DLQ totals, and backpressure rejection counters out of the box.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FEATURE PANEL */}
    <section className="relative">
      <div className={`${containerCls} py-16 sm:py-20`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Failure is normal. Make it boring.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              DriftQ is designed for workflows that touch flaky downstreams (LLMs, third-party APIs, webhooks, long
              running jobs). The system should recover — not your on-call.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className={pillCls}>ingestion</span>
              <span className={pillCls}>webhooks</span>
              <span className={pillCls}>notifications</span>
              <span className={pillCls}>pipeline steps</span>
              <span className={pillCls}>agent tasks</span>
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

    {/* CTA */}
    <section className="relative">
      <div className={`${containerCls} pb-20`}>
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft backdrop-blur sm:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Ship reliable workflows without rebuilding infrastructure.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  If queue and worker pain is already your reality, DriftQ is worth a serious look. If it’s not… keep things simple until it is.
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
