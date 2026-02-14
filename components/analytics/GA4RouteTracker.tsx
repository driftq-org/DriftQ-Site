"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  measurementId: string;
};


export default function GA4RouteTracker({ measurementId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? "";

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (!measurementId) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (typeof window.gtag !== "function") {
      return;
    }

    const url = search ? `${pathname}?${search}` : pathname;
    window.gtag("config", measurementId, { page_path: url });
  }, [pathname, search, measurementId]);

  return null;
}
