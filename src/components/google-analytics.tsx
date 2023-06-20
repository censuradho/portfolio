import { appSettings } from "@/config/app";
import Script from "next/script";

export function GoogleAnalytics () {
  if (!appSettings.analytics) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${appSettings.analytics}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${appSettings.analytics}');
        `}
      </Script>
    </>
  )
}