import React from "react";
import { NavLink } from "react-router-dom";
import "./GuidelineSteps.scss";

const steps = [
  { label: "Заполнение формы", url: "/user", stepNumber: 1 },
  {
    label: "Просмотр отчёта",
    url: "/user/guideline",
    stepNumber: 2
  }
];

const GuidelineSteps = () => (
  <ul className="guideline-steps">
    {steps.map(({ stepNumber, label, url }) => (
      <li key={stepNumber} className="guideline-steps__step">
        <NavLink to={url} className="guideline-steps__step-link">
          <div className="guideline-steps__step-number">{stepNumber}</div>
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default GuidelineSteps;
