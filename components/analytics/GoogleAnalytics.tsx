import Script from "next/script";
import GA4RouteTracker from "./GA4RouteTracker";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;


export default function GoogleAnalytics() {
  if (!GA4_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', {
            send_page_view: true
          });
        `}
      </Script>
      <GA4RouteTracker measurementId={GA4_ID} />
    </>
  );
}
