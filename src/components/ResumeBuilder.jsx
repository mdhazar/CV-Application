import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Projects from "./Projects";
import Preview from "../components/Preview";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
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
    project1github: "",
    projectGithub1: "",
    project1Summary: "",
  });
  const onFormSubmit = (formData) => {
    setData((prevData) => ({
      ...prevData,
      ...formData,
    }));
  };

  return (
    <div className="container">
      <div className="forms">
        <GeneralInfo onSubmit={onFormSubmit} />
        <Summary onSubmit={onFormSubmit} />
        <Education onSubmit={onFormSubmit} />
        <Skills onSubmit={onFormSubmit} />
        <Projects onSubmit={onFormSubmit} />
        <Experience onSubmit={onFormSubmit}/>
      </div>
      <div>
        <Preview data={data} />
      </div>
    </div>
  );
}
