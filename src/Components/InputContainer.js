import React from "react";
import InputEducation from "./InputEducation";
import InputPersonalDetails from "./InputPersonalDetails";
import InputWorkExperience from "./InputWorkExperience";

export default function InputContainer(props) {
  return (
    <div className="InputContainer">
      <InputPersonalDetails
        handlePersonalChange={props.handlePersonalChange}
        personalForm={props.personalForm}
      />
      <InputWorkExperience
        handleWorkChange={props.handleWorkChange}
        workForm={props.workForm}
      />

      <InputEducation
        handleEducationChange={props.handleEducationChange}
        educationForm={props.educationForm}
      />
    </div>
  );
}
