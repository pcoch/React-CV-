import React from "react";

export default function OutputWorkExperience(props) {
  return (
    <div className="experience-list">
      <h3>Work Experience</h3>
      <div className="experience-container">
        <div className="experience-heading">
          <h5>{props.Position}</h5>
          <h5>
            <span className="company-title">{props.Company} | </span>
            {props.StartDate} - {props.EndDate}
          </h5>
        </div>
        <p className="experience-body">{props.JobDescription}</p>
      </div>
    </div>
  );
}
