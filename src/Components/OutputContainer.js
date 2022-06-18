import React from "react";
import OutputHeader from "./OutputHeader";
import OutputWorkExperience from "./OutputWorkExperience";
import OutputDescription from "./OutputDescription";
import OutputEducation from "./OutputEducation";

export default function OutputContainer() {
  return (
    <div className="OutputContainer">
      <OutputHeader />
      <OutputDescription />
      <OutputWorkExperience />
      <OutputEducation />
    </div>
  );
}
