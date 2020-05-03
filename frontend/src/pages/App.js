import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import UserGuideline from "./UserGuideline";

const App = () => {
  return (
    <Switch>
      <Route path="/user">
        <User />
      </Route>
      <Route path="/user-guideline">
        <UserGuideline />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
