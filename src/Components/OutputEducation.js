import React from "react";

export default function OutputEducation(props) {
  return (
    <div className="education-list">
      <h3>Education</h3>
      <div className="education-container">
        <div className="education-heading">
          <h5>{props.educationForm.course}</h5>
          <h5>
            <span className="university-title">
              {props.educationForm.university} |{" "}
            </span>
            {props.educationForm.startdate}– {props.educationForm.enddate}
          </h5>
        </div>
      </div>
    </div>
  );
}
