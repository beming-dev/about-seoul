import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import History from "../routes/History";
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
      </Switch>
    </Router>
  );
};

export default AppRouter;
