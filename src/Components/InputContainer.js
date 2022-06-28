import React from "react";
import InputEducation from "./InputEducation";
import InputPersonalDetails from "./InputPersonalDetails";
import InputWorkExperience from "./InputWorkExperience";

export default function InputContainer(props) {
  return (
    <div className="InputContainer">
      <InputPersonalDetails
        UpdateName={props.UpdateName}
        PersonName={props.PersonName}
        UpdateTitle={props.UpdateTitle}
        JobTitle={props.JobTitle}
        UpdatePhone={props.UpdatePhone}
        Phone={props.Phone}
        UpdateEmail={props.UpdateEmail}
        Email={props.Email}
        UpdateLocation={props.UpdateLocation}
        Location={props.Location}
        UpdateDescription={props.UpdateDescription}
        Description={props.Description}
      />
      <InputWorkExperience
        UpdateCompany={props.UpdateCompany}
        Company={props.Company}
        UpdatePosition={props.UpdatePosition}
        Position={props.Position}
        UpdateStartDate={props.UpdateStartDate}
        StartDate={props.StartDate}
        UpdateEndDate={props.UpdateEndDate}
        EndDate={props.EndDate}
        UpdateJobDescription={props.UpdateJobDescription}
        JobDescription={props.JobDescription}
      />

      <InputEducation />
    </div>
  );
}
