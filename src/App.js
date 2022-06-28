import React, { useState } from "react";
import InputContainer from "./Components/InputContainer";
import OutputContainer from "./Components/OutputContainer";
import "./Styles/App.css";
import "./Styles/Output.css";
import "./Styles/Input.css";

function App() {
  //state for personal details list
  const [personalForm, setPersonalForm] = useState({
    name: "Crystal Smith",
    title: "Software Developer",
    phone: "1234 456 789",
    email: "smitty@gmail.com",
    location: "Brissy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPersonalForm({ ...personalForm, [name]: value });
  };

  // state for work experience
  const [workForm, setWorkForm] = useState({
    company: "Shopify",
    position: "Software Developer",
    startdate: "2018",
    enddate: "Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  });

  const handleWorkChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setWorkForm({ ...workForm, [name]: value });
  };

  //state for education
  const [educationForm, setEducationForm] = useState({
    course: "Computer Science Degree",
    university: "Harvard University",
    startdate: "2015",
    enddate: "2018",
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEducationForm({ ...educationForm, [name]: value });
  };

  return (
    <div className="App">
      <InputContainer
        handlePersonalChange={handlePersonalChange}
        personalForm={personalForm}
        handleWorkChange={handleWorkChange}
        workForm={workForm}
        handleEducationChange={handleEducationChange}
        educationForm={educationForm}
      />
      <OutputContainer
        personalForm={personalForm}
        workForm={workForm}
        educationForm={educationForm}
      />
    </div>
  );
}

export default App;
