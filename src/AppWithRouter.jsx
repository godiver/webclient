// App.jsと統合したらApp.jsxにファイル名を変更する
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import Top from "./pages/Top";
import { VideosIndex } from "./pages/videos/VideosIndex";
import { WatchIndex } from "./pages/watch/Watch";

export const AppWithRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top}></Route>
        <Route exact path="/videos" component={VideosIndex}></Route>
        <Route exact path="/watch" component={WatchIndex}></Route>
      </Switch>
    </Router>
  );
};
