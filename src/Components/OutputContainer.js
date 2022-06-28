import React from "react";
import OutputHeader from "./OutputHeader";
import OutputWorkExperience from "./OutputWorkExperience";
import OutputDescription from "./OutputDescription";
import OutputEducation from "./OutputEducation";

export default function OutputContainer(props) {
  return (
    <div className="OutputContainer">
      <OutputHeader personalForm={props.personalForm} />
      <OutputDescription personalForm={props.personalForm} />
      <OutputWorkExperience workForm={props.workForm} />
      <OutputEducation educationForm={props.educationForm} />
    </div>
  );
}
