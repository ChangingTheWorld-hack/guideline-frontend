import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import nanoid from "nanoid";
import UserGuideline from "components/UserGuideline";
import GuidelineSteps from "components/GuidelineSteps";
import UserForm from "components/UserForm";
import AppModel from "models/AppModel";

const User = ({ history }) => {
  const [guidelineData, setGuidelineData] = useState({});

  const onSubmit = data => {
    new AppModel({ data: { ...data, id: nanoid() } })
      .createRequest()
      .then(guidelineData => {
        setGuidelineData(guidelineData.data);
        history.push("/user/guideline");
      });
  };

  return (
    <Fragment>
      <div className="content">
        <div className="container">
          <h1>Консультация к лечению</h1>
          <GuidelineSteps />
          <Route
            exact
            path="/user/guideline"
            render={() => <UserGuideline guidelineData={guidelineData} />}
          />
          <Route
            exact
            path="/user"
            render={() => <UserForm onSubmit={onSubmit} />}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default User;
