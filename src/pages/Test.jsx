import React from "react";

import { useGoogleAnalytics } from "../hooks/googleAnalytics";

export const Test = () => {
  if (process.env.NODE_ENV === "production") return;
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

  useGoogleAnalytics();

  return (
    <div>
      <h1>テスト</h1>
    </div>
  );
};
