import React from "react";
import InputEducation from "./InputEducation";
import InputPersonalDetails from "./InputPersonalDetails";
import InputWorkExperience from "./InputWorkExperience";

export default function InputContainer() {
  return (
    <div className="InputContainer">
      <InputPersonalDetails />
      <InputWorkExperience />
      <InputEducation />
    </div>
  );
}
