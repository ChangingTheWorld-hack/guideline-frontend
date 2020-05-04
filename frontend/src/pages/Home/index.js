import React, { PureComponent, Fragment } from "react";
import pluralize from "pluralize-ru";
import AppModel from "models/AppModel";

const modes = [
  {
    modeTitle: "Базовый режим",
    modeOptions: [
      { label: "Подготовка отчёта за 5 секунд" },
      { label: "Без регистрации" }
    ]
  },
  {
    modeTitle: "Продвинутый режим",
    modeOptions: [
      { label: "Визуализация графов лечения" },
      { label: "Требуется регистрация" }
    ]
  }
];

class Home extends PureComponent {
  state = {
    statistics: {
      users: {
        labels: [
          "пользователей",
          "пользователь",
          "пользователя",
          "пользователей"
        ],
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
    }
  };

  componentDidMount() {
    const { statistics } = this.state;
    AppModel.getUsers().then(({ users }) =>
      this.setState({
        statistics: {
          ...statistics,
          doctors: { ...statistics.doctors, value: users.length }
        }
      })
    );
  }

  render() {
    const { statistics } = this.state;
    return (
      <Fragment>
        <div className="content">
          <div className="container">
            <h1>Начало работы</h1>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <p className="home__intro-text">
                  "Гермес" - онлайн-платформа для оказания медицинских
                  консультаций врачам и пользователям без медицинского
                  образования.
                </p>
                <p className="home__intro-text">
                  В основе онлайн-платформы используются руководства по лечению
                  болезней, основанные на статьях медицинских журналов и научных
                  конференций.
                </p>
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
          <div className="home__modes">
            <div className="container">
              <div className="row">
                {modes.map(({ modeTitle, modeOptions }, index) => (
                  <div key={index} className="col-xs-12 col-md-6">
                    <div className="home__mode">
                      <div className="home__mode-card">
                        <div className="home__mode-title">{modeTitle}</div>
                        <div className="home__mode-card-body">
                          {modeOptions.map(({ label }, optionId) => (
                            <div
                              key={optionId}
                              className="home__mode-card-item"
                            >
                              {label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
