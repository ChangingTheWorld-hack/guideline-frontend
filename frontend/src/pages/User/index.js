import React, { Fragment } from "react";
import GuidelineSteps from "components/GuidelineSteps";
import UserForm from "components/UserForm";

const User = () => {
  return (
    <Fragment>
      <h1>Руководство по лечению</h1>
      <GuidelineSteps />
      <UserForm />
    </Fragment>
  );
};

export default User;
