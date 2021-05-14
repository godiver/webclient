import React from "react";

import { Header } from "../component/Header";

export const WithHeader = (props) => {
  return (
    <div className="relative">
      <Header></Header>
      {props.children}
    </div>
  );
};
