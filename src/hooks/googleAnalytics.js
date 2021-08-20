import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export function useGoogleAnalytics() {
  const [completed, setCompleted] = useState(false);
  const { listen } = useHistory();
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    const scriptSettingGoogleAnalytics = document.createElement("script");
    scriptSettingGoogleAnalytics.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GTAG_ID}`;
    scriptSettingGoogleAnalytics.async = true;
    document.head.appendChild(scriptSettingGoogleAnalytics);
    const scriptProcessingGoogleAnalytics = document.createElement("script");
    scriptProcessingGoogleAnalytics.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', ${process.env.REACT_APP_GTAG_ID});`;
    document.head.appendChild(scriptProcessingGoogleAnalytics);

    setCompleted(true);
  }, []);

  useEffect(() => {
    listen((location) => {
      if (!window.gtag) return;
      window.gtag("config", process.env.REACT_APP_GTAG_ID, {
        page_path: location.pathname,
      });
    });
  }, [listen, completed]);
}
