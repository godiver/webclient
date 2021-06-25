import React from "react";

import { useGoogleAnalytics } from "../hooks/googleAnalytics";

export const Test = () => {
  useGoogleAnalytics();

  return (
    <div>
      <h1>テスト</h1>
    </div>
  );
};
