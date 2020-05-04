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
        users: _get(data, "_embedded.persons", [])
      }));
  }

  createRequest = () => {
    return axios.post(
      "https://guideline-backend.herokuapp.com/consultation",
      this.data
    );
  };
}
