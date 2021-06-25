import { useEffect } from "react";

export function useGoogleAnalytics() {
  useEffect(() => {
    console.log(process.env.GTAG_ID);
    if (process.env.NODE_ENV === "production") return;
    const scriptSettingGoogleAnalytics = document.createElement("script");
    scriptSettingGoogleAnalytics.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`;
    scriptSettingGoogleAnalytics.async = true;
    document.body.appendChild(scriptSettingGoogleAnalytics);
    const scriptProcessingGoogleAnalytics = document.createElement("script");
    scriptProcessingGoogleAnalytics.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', ${process.env.GTAG_ID});`;
  }, []);
}
