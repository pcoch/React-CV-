import React from "react";

export default function OutputWorkExperience(props) {
  return (
    <div className="experience-list">
      <h3>Work Experience</h3>
      <div className="experience-container">
        <div className="experience-heading">
          <h5>{props.workForm.position}</h5>
          <h5>
            <span className="company-title">{props.workForm.company} | </span>
            {props.workForm.startdate} - {props.workForm.enddate}
          </h5>
        </div>
        <p className="experience-body">{props.workForm.description}</p>
      </div>
    </div>
  );
}
