import axios from "axios";
import _get from "lodash/get";

export default class AppModel {
  constructor({ data }) {
    this.data = data;
  }

  static getUsers(token) {
    return axios
      .get("https://guideline-backend.herokuapp.com/persons", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json"
        },
        cancelToken: token
      })
      .then(({ data }) => ({
        persons: _get(data, "persons", [])
      }));
  }

  createRequest = () => {
    return axios.put(
      "https://guideline-backend.herokuapp.com/profile",
      this.data
    );
  };
}
