"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { useState } from "react";

const linkCls =
  "rounded-lg px-2 py-1 text-sm transition-colors " +
  "text-white/70 hover:text-white hover:bg-white/10 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/40";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">

        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-transparent">
              <Image
                src="/logo.png"
                alt="DriftQ logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="font-semibold">{site.name}</div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/blog" className={linkCls}>
              Blog
            </Link>
            <Link href="/docs" className={linkCls}>
              Docs
            </Link>
            <Link href="/docs/roadmap" className={linkCls}>
              Roadmap
            </Link>
            <a
              href={site.githubUrl}
              className={linkCls}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/docs/quickstart"
              variant="primary"
              className="hidden lg:inline-flex"
            >
              Quickstart
            </Button>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {
          mobileOpen && (
            <div className="border-t border-white/10 py-3 lg:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  href="/blog"
                  className={linkCls + " w-full"}
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/docs"
                  className={linkCls + " w-full"}
                  onClick={() => setMobileOpen(false)}
                >
                  Docs
                </Link>

                <Link
                  href="/docs/roadmap"
                  className={linkCls + " w-full"}
                  onClick={() => setMobileOpen(false)}
                >
                  Roadmap
                </Link>

                <a
                  href={site.githubUrl}
                  className={linkCls + " w-full"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  GitHub
                </a>

                <div className="pt-2">
                  <Button
                    href="/docs/quickstart"
                    variant="primary"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Quickstart
                  </Button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </header>
  );
}

export default SiteHeader;
