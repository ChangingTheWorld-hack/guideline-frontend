import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import UserGuideline from "components/UserGuideline";
import GuidelineSteps from "components/GuidelineSteps";
import UserForm from "components/UserForm";

const User = () => {
  return (
    <Fragment>
      <h1>Руководство по лечению</h1>
      <GuidelineSteps />
      <Switch>
        <Route
          exact
          path="/user/:userId/guideline"
          render={() => <UserGuideline />}
        />
        <Route path="/" render={() => <UserForm />} />
      </Switch>
    </Fragment>
  );
};

export default User;
