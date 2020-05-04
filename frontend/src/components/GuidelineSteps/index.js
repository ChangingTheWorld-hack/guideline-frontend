import React from "react";
import { NavLink } from "react-router-dom";
import "./GuidelineSteps.scss";

const steps = [
  { label: "Заполнение формы", url: "/user" },
  {
    label: "Просмотр отчёта",
    url: "/user/guideline"
  }
];

const GuidelineSteps = () => (
  <ul className="guideline-steps">
    {steps.map(({ label, url }, index) => (
      <li key={index} className="guideline-steps__step">
        <NavLink to={url} className="guideline-steps__step-link">
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default GuidelineSteps;
