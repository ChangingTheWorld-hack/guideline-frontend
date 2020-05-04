import React, { PureComponent } from "react";
import UserGuidelineChart from "components/UserGuidelineChart";
import data from "./example.json";
import "./UserGuideline.scss";

class UserGuideline extends PureComponent {
  state = {
    reports: [
      {
        label: "Паническая атака",
        description: `Необъяснимый, мучительный для больного приступ тяжёлой тревоги, 
          сопровождаемый беспричинным страхом, в сочетании с различными 
          вегетативными (соматическими) симптомами.`,
        symptoms: [
          "Давление редко повышается выше 180/120 мм рт. ст.",
          "Учащённое сердцебиение",
          "Дрожат руки",
          "Тошнота",
          "Бросает в пот",
          "Головокружение",
          "Асимметрии в улыбке и движениях нет",
          "Мысли спутаны, но речь разборчива",
          "Симптомы достигают пика в течении 10-15 минут и после этого промежутка все симптомы сходят на нет"
        ],
        doctors: ["невролог"]
      }
    ]
  };

  render() {
    const { reports } = this.state;
    return (
      <div className="user-guideline">
        <UserGuidelineChart data={data} />
        <div className="user-guideline__details">
          <h3>{reports[0].label}</h3>
          <p>{reports[0].description}</p>
          <div className="user-guideline__doctor-block">
            <img
              src="https://image.flaticon.com/icons/svg/1021/1021799.svg"
              width="42"
              className="user-guideline__doctor-icon"
              alt="Доктор"
            />
            <div>
              <div className="user-guideline__doctor-title">
                К какому врачу обратиться:
              </div>
              <div className="user-guideline__doctor-text">
                {reports[0].doctors.join(", ")}
              </div>
            </div>
          </div>
          <p>Симптомы:</p>
          <ul>
            {reports[0].symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserGuideline;
