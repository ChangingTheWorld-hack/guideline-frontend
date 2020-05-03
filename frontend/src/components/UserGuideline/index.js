import React, { PureComponent } from "react";
import UserGuidelineChart from "components/UserGuidelineChart";
import data from "./example.json";

class UserGuideline extends PureComponent {
  render() {
    return <UserGuidelineChart data={data} />;
  }
}

export default UserGuideline;
