import DocsShell from "@/components/docs/DocsShell";
import { CodeSpan } from "@/components/docs/DocsUI";
import CodeBlock from "@/components/ui/CodeBlock";

const IMAGE = "ghcr.io/driftq-org/driftq-core";
const DEFAULT_VERSION = "1.0.0";
const cardCls = "rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur";
const blockCodeCls = [
  "overflow-x-auto rounded-2xl px-4 py-3 font-mono text-xs leading-relaxed shadow-sm sm:text-sm",
  "!bg-zinc-950 !text-zinc-100",
  "[&_span]:!bg-transparent"
].join(" ");

const RunLocallyPage = () => (
  <DocsShell currentPath="/docs/run-locally/">
    <div className="not-prose">
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Run DriftQ-Core locally
          </h1>

          <p className="max-w-2xl text-white/70">
            The 2-minute path to running DriftQ-Core on any machine with Docker. Use a pinned version for reproducible
            runs (recommended).
          </p>
        </div>

        <div className={cardCls}>
          <div className="text-sm font-semibold text-white">
            Option A (recommended): Pull from GHCR and run
          </div>

          <p className="mt-3 text-sm text-white/70">
            Pin a version so your run is reproducible. <CodeSpan>latest</CodeSpan> tracks <CodeSpan>main</CodeSpan>{" "}
            (convenient, but can break unexpectedly).
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">mac/linux</div>
              <CodeBlock className={blockCodeCls}>{`export DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker pull ${IMAGE}:$DRIFTQ_VERSION
docker run --rm -p 8080:8080 -v driftq-data:/data ${IMAGE}:$DRIFTQ_VERSION`}</CodeBlock>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">windows powershell</div>
              <CodeBlock className={blockCodeCls}>{`$env:DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker pull ${IMAGE}:$env:DRIFTQ_VERSION
docker run --rm -p 8080:8080 -v driftq-data:/data ${IMAGE}:$env:DRIFTQ_VERSION`}</CodeBlock>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">verify</div>
              <CodeBlock className={blockCodeCls}>{`# mac/linux
curl http://localhost:8080/v1/version

# windows powershell
curl.exe http://localhost:8080/v1/version`}</CodeBlock>
            </div>

            <div className="text-sm text-white/70">
              <div className="font-semibold text-white">Useful tags</div>
              <ul className="mt-2 space-y-1">
                <li>
                  • <CodeSpan>{`${IMAGE}:${DEFAULT_VERSION}`}</CodeSpan> (recommended: reproducible)
                </li>
                <li>
                  • <CodeSpan>{`${IMAGE}:latest`}</CodeSpan> (tracks <CodeSpan>main</CodeSpan>)
                </li>
                <li>
                  • <CodeSpan>{`${IMAGE}:sha-<...>`}</CodeSpan> (exact build)
                </li>
              </ul>
            </div>

            <p className="text-sm text-white/70">
              Stop it with <CodeSpan>Ctrl+C</CodeSpan>. To wipe persisted WAL/data:
            </p>

            <CodeBlock className={blockCodeCls}>{`docker volume rm driftq-data`}</CodeBlock>
          </div>
        </div>

        <div className={cardCls}>
          <div className="text-sm font-semibold text-white">
            Option B: Docker Compose (recommended if you cloned the repo)
          </div>

          <p className="mt-3 text-sm text-white/70">
            Compose uses a named volume so WAL persists. You can override the image tag with{" "}
            <CodeSpan>DRIFTQ_VERSION</CodeSpan>.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">mac/linux</div>
              <CodeBlock className={blockCodeCls}>{`export DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker compose up`}</CodeBlock>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">windows powershell</div>
              <CodeBlock className={blockCodeCls}>{`$env:DRIFTQ_VERSION="${DEFAULT_VERSION}"
docker compose up`}</CodeBlock>
            </div>

            <div className="text-sm text-white/70">
              DriftQ listens on <CodeSpan>http://localhost:8080</CodeSpan>. WAL is stored in a named Docker volume
              mounted at <CodeSpan>/data</CodeSpan> inside the container.
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">stop</div>
              <CodeBlock className={blockCodeCls}>{`docker compose down`}</CodeBlock>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">wipe WAL/data</div>
              <CodeBlock className={blockCodeCls}>{`docker compose down -v`}</CodeBlock>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">
                minimal compose example (defaults to {DEFAULT_VERSION})
              </div>
              <CodeBlock className={blockCodeCls}>{`services:
  driftqd:
    image: ${IMAGE}:\${DRIFTQ_VERSION:-${DEFAULT_VERSION}}
    ports:
      - "8080:8080"
    volumes:
      - driftq-data:/data

volumes:
  driftq-data:`}</CodeBlock>
            </div>
          </div>
        </div>

        <div className={cardCls}>
          <div className="text-sm font-semibold text-white">Option C: Build locally (dev)</div>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">mac/linux</div>
              <CodeBlock className={blockCodeCls}>{`docker build -t driftq-core:local \\
  --build-arg VERSION=dev \\
  --build-arg COMMIT="$(git rev-parse --short HEAD)" \\
  .`}</CodeBlock>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">windows powershell</div>
              <CodeBlock className={blockCodeCls}>{`docker build -t driftq-core:local \`
  --build-arg VERSION=dev \`
  --build-arg COMMIT=$(git rev-parse --short HEAD) \`
  .`}</CodeBlock>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-white/50">run</div>
              <CodeBlock className={blockCodeCls}>{`docker run --rm -p 8080:8080 -v driftq-data:/data driftq-core:local`}</CodeBlock>
            </div>
          </div>
        </div>

        <p className="text-xs text-white/50">
          Note: this page mirrors the{" "}
          <a
            href="https://github.com/driftq-org/DriftQ-Core?tab=readme-ov-file#driftq-core"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-emerald-200 hover:text-emerald-100"
          >
            repo README
          </a>
        </p>
      </div>
    </div>
  </DocsShell>
);

export default RunLocallyPage;
