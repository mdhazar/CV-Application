import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";

import Preview from "../components/Preview";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
export default function ResumeBuilder() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    summary: "",
    school: "",
    dapartment: "",
    schoolStartDate: "",
    schoolEndDate: "",
    jobTitle: "",
    projectName1: "",
    projectSkills1: "",
    projectName: "",
    project1github: "",
    project1Url: "",
    project1Summary: "",
  });
  const onChangeName = (formData) => {
    console.log("Preview received new form data:", formData);
    setData((prevData) => ({
      ...prevData,
      ...formData,
    }));
  };

  return (
    <div className="container">
      <div className="forms">
        <GeneralInfo onSubmit={onChangeName} />
        <Summary onSubmit={onChangeName} />
        <Education onSubmit={onChangeName} />
        <Skills onSubmit={onChangeName} />
      </div>
      <div>
        <Preview data={data} />
      </div>
    </div>
  );
}
