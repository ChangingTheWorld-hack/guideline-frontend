import React, { Fragment } from "react";
import pluralize from "pluralize-ru";

const statistics = {
  users: {
    labels: ["пользователей", "пользователь", "пользователя", "пользователей"],
    value: 10,
    iconUrl: ""
  },
  doctors: {
    labels: ["врачей", "врач", "врача", "врачей"],
    value: 10,
    iconUrl: ""
  },
  months: {
    labels: ["месяцев", "месяц", "месяца", "месяцев"],
    value: 1,
    iconUrl: ""
  }
};

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <h1>Home page</h1>
        <p>Осмысленный текст с описанием сервиса.</p>
      </div>

      <div className="home__statistics-block">
        <div className="container">
          <div className="row">
            {Object.keys(statistics).map(paramter => {
              const { labels, value, iconUrl } = statistics[paramter];
              return (
                <div key={labels[1]} className="col-xs-6 col-md-3">
                  <div className="home__statistics-item">
                    <div className="home__statistics-number">{value}</div>
                    <div className="home__statistics-text">
                      {pluralize(value, ...labels)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
