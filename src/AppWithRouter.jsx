// App.jsと統合したらApp.jsxにファイル名を変更する
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import { VideosSearch } from "./pages/top/Top";
import { VideosIndex } from "./pages/videos/VideosIndex";
import { WatchIndex } from "./pages/watch/Watch";
import { Test } from "./pages/Test";
import { SignUp } from "./pages/signup/SignUp";

export const AppWithRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VideosSearch}></Route>
        <Route exact path="/videos" component={VideosIndex}></Route>
        <Route exact path="/watch" component={WatchIndex}></Route>
        <Route exact path="/test" component={Test}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </Router>
  );
};
