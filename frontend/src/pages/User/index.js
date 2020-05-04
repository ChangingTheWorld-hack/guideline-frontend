import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import UserGuideline from "components/UserGuideline";
import GuidelineSteps from "components/GuidelineSteps";
import UserForm from "components/UserForm";

const User = () => {
  return (
    <Fragment>
      <div className="content">
        <div className="container">
          <h1>Консультация к лечению</h1>
          <GuidelineSteps />
          <Switch>
            <Route
              exact
              path="/user/guideline"
              render={() => <UserGuideline />}
            />
            <Route
              path="/"
              render={({ history }) => <UserForm history={history} />}
            />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
