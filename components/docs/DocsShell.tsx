"use client";

import Link from "next/link";
import { docsNav } from "@/lib/docs-nav";
import { normalizeDocsPath } from "@/lib/utils";
import { useMemo, useState } from "react";

const DocsShell = (props: { currentPath: string; children: React.ReactNode }) => {
  const [q, setQ] = useState("");
  const current = useMemo(() => normalizeDocsPath(props.currentPath), [props.currentPath]);
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) {
      return docsNav;
    }

    return docsNav
      .map((s) => ({
        ...s,
        items: s.items.filter((i) => i.title.toLowerCase().includes(query))
      }))
      .filter((s) => s.items.length > 0);
  }, [q]);

  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
          <aside className="max-h-[60vh] overflow-auto md:sticky md:top-20 md:h-[calc(100vh-120px)] md:max-h-none md:overflow-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-soft backdrop-blur">
              <div className="mb-4">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search docs…"
                  className="
                    w-full rounded-xl border px-3 py-2 text-sm outline-none
                    border-white/10 bg-white/5 text-white placeholder:text-white/40
                    focus:ring-2 focus:ring-emerald-300/30
                  "
                />
              </div>

              <nav className="space-y-6">
                {
                  filtered.map((section) => (
                    <div key={section.title}>
                      <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        {section.title}
                      </div>

                      <ul className="mt-2 space-y-1">
                        {
                          section.items.map((item) => {
                            const href = normalizeDocsPath(item.href);
                            const active = current === href || (href !== "/docs/" && current.startsWith(href));

                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className={[
                                    "block rounded-lg px-2 py-1 text-sm transition-colors",
                                    active
                                      ? "bg-emerald-300 text-zinc-950"
                                      : "text-white/70 hover:bg-white/10 hover:text-white"
                                  ].join(" ")}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            );
                          })
                        }
                      </ul>
                    </div>
                  ))
                }
              </nav>
            </div>
          </aside>

          <main className="min-w-0">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur sm:p-8">
              <div
                className={[
                  "prose prose-invert max-w-none",
                  "leading-relaxed prose-p:leading-relaxed prose-li:my-1 prose-ul:my-4 prose-li:leading-relaxed",

                  "prose-headings:tracking-tight prose-headings:scroll-mt-24",
                  "prose-h1:text-4xl prose-h1:font-black sm:prose-h1:text-5xl",
                  "prose-h2:text-2xl prose-h2:font-extrabold",
                  "prose-h3:text-xl prose-h3:font-bold",

                  "[&_a]:text-emerald-200 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-transparent",
                  "[&_a:hover]:text-emerald-100 [&_a:hover]:decoration-emerald-200/60",

                  "[&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-[#0b1020] [&_pre]:p-4 [&_pre]:text-zinc-100",
                  "[&_pre]:overflow-x-auto",

                  "[&_code]:rounded-md [&_code]:border [&_code]:border-white/10 [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.95em] [&_code]:text-white/90",

                  "[&_blockquote]:rounded-xl [&_blockquote]:border-l-2 [&_blockquote]:border-emerald-300/60 [&_blockquote]:bg-white/5 [&_blockquote]:px-4 [&_blockquote]:py-3",
                ].join(" ")}
              >
                {props.children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocsShell;
