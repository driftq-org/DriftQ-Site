import GA4RouteTracker from "./GA4RouteTracker";
import Script from "next/script";
import { Suspense } from "react";

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA4_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />

      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>

      <Suspense fallback={null}>
        <GA4RouteTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}
