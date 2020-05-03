import React, { Fragment } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="header__nav-group">
            <NavLink className="header__nav-link" to="/">
              Главная
            </NavLink>
            <NavLink className="header__nav-link" to="/user">
              Руководство
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <Switch>
            <Route path="/user" render={() => <User />} />
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
