import React, { useState } from "react";
import InputContainer from "./Components/InputContainer";
import OutputContainer from "./Components/OutputContainer";
import "./Styles/App.css";
import "./Styles/Output.css";
import "./Styles/Input.css";

function App() {
  //state for personal details list
  //state for name
  const [PersonName, setName] = useState("Crystal Smith");
  const UpdateName = (e) => {
    setName(e.target.value);
  };

  //state for title
  const [JobTitle, setTitle] = useState("Software Engineer");
  const UpdateTitle = (e) => {
    setTitle(e.target.value);
  };

  //state for phone
  const [Phone, setPhone] = useState("0408 777 010");
  const UpdatePhone = (e) => {
    setPhone(e.target.value);
  };

  //state for email
  const [Email, setEmail] = useState("smitty@gmail.com");
  const UpdateEmail = (e) => {
    setEmail(e.target.value);
  };

  //state for location
  const [Location, setLocation] = useState("Brisbane");
  const UpdateLocation = (e) => {
    setLocation(e.target.value);
  };

  //state for description
  const [Description, setDescription] = useState(
    "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud."
  );
  const UpdateDescription = (e) => {
    setDescription(e.target.value);
  };

  //state for work experience list
  //state for company
  const [Company, setCompany] = useState("Shopify");
  const UpdateCompany = (e) => {
    setCompany(e.target.value);
  };

  //state for position
  const [Position, setPosition] = useState("Software Engineer");
  const UpdatePosition = (e) => {
    setPosition(e.target.value);
  };

  //state for start date
  const [StartDate, setStartDate] = useState("2018");
  const UpdateStartDate = (e) => {
    setStartDate(e.target.value);
  };

  //state for End date
  const [EndDate, setEndDate] = useState("Present");
  const UpdateEndDate = (e) => {
    setEndDate(e.target.value);
  };

  //state for End date
  const [JobDescription, setJobDescription] = useState(
    "This job is rad. This is some text about how rad it is."
  );
  const UpdateJobDescription = (e) => {
    setJobDescription(e.target.value);
  };

  return (
    <div className="App">
      <InputContainer
        UpdateName={UpdateName}
        PersonName={PersonName}
        UpdateTitle={UpdateTitle}
        JobTitle={JobTitle}
        UpdatePhone={UpdatePhone}
        Phone={Phone}
        UpdateEmail={UpdateEmail}
        Email={Email}
        UpdateLocation={UpdateLocation}
        Location={Location}
        UpdateDescription={UpdateDescription}
        Description={Description}
        UpdateCompany={UpdateCompany}
        Company={Company}
        UpdatePosition={UpdatePosition}
        Position={Position}
        UpdateStartDate={UpdateStartDate}
        StartDate={StartDate}
        UpdateEndDate={UpdateEndDate}
        EndDate={EndDate}
        UpdateJobDescription={UpdateJobDescription}
        JobDescription={JobDescription}
      />
      <OutputContainer
        PersonName={PersonName}
        JobTitle={JobTitle}
        Phone={Phone}
        Email={Email}
        Location={Location}
        Description={Description}
        Company={Company}
        Position={Position}
        StartDate={StartDate}
        EndDate={EndDate}
        JobDescription={JobDescription}
      />
    </div>
  );
}

export default App;
