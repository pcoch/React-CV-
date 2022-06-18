import React from "react";
import EducationInput from "./EducationInput";
import PersonalDetailsInput from "./PersonalDetailsInput";
import WorkExperienceInput from "./WorkExperienceInput";

export default function InputContainer() {
  return (
    <div className="InputContainer">
      <PersonalDetailsInput />
      <WorkExperienceInput />
      <EducationInput />
    </div>
  );
}
