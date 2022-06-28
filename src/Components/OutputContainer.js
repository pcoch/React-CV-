import React from "react";
import OutputHeader from "./OutputHeader";
import OutputWorkExperience from "./OutputWorkExperience";
import OutputDescription from "./OutputDescription";
import OutputEducation from "./OutputEducation";

export default function OutputContainer(props) {
  return (
    <div className="OutputContainer">
      <OutputHeader
        PersonName={props.PersonName}
        JobTitle={props.JobTitle}
        Phone={props.Phone}
        Email={props.Email}
        Location={props.Location}
      />
      <OutputDescription Description={props.Description} />
      <OutputWorkExperience
        Company={props.Company}
        Position={props.Position}
        StartDate={props.StartDate}
        EndDate={props.EndDate}
        JobDescription={props.JobDescription}
      />
      <OutputEducation />
    </div>
  );
}
