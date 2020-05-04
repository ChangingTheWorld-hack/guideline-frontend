import React, { PureComponent, Fragment } from "react";
import pluralize from "pluralize-ru";
import AppModel from "models/AppModel";

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

class Home extends PureComponent {
  componentDidMount() {
    AppModel.getUsers();
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="container">
            <h1>Home page</h1>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <p>Осмысленный текст с описанием сервиса.</p>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="home__intro-video-block">
                  <iframe
                    className="home__intro-video"
                    src="https://www.youtube.com/embed/ZGGDKC3GlrI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
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
        </div>
      </Fragment>
    );
  }
}

export default Home;
