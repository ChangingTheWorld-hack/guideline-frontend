import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import UserGuideline from "components/UserGuideline";
import GuidelineSteps from "components/GuidelineSteps";
import UserForm from "components/UserForm";

const User = () => {
  return (
    <Fragment>
      <div className="container">
        <h1>Рекомендация по лечению</h1>
        <GuidelineSteps />
        <Switch>
          <Route
            exact
            path="/user/:userId/guideline"
            render={({
              match: {
                params: { userId }
              }
            }) => <UserGuideline userId={userId} />}
          />
          <Route path="/" render={() => <UserForm />} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default User;
