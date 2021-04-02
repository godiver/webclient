import React from "react";

import { Header } from "../component/Header";

export const WithHeader = (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  );
};
