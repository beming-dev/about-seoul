import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import History from "../routes/History";
import Home from "../routes/Home";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
