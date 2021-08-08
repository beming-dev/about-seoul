import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Community from "../routes/Community";
import History from "../routes/History";
import Discover from "../routes/Discover";
import Home from "../routes/Home";
import News from "../routes/News";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/discover">
          <Discover />
        </Route>
        <Route exact path="/community">
          <Community />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
