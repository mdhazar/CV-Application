import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Projects from "./Projects";
import Preview from "../components/Preview";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
export default function ResumeBuilder() {
  const [data, setData] = useState({});
  const handleFormChange = (formData) => {
    setData((prevData) => ({
      ...prevData,
      ...formData,
    }));
  };

  return (
    <div className="container">
      <div className="forms">
        <GeneralInfo onSubmit={handleFormChange} />
        <Summary onSubmit={handleFormChange} />
        <Education onSubmit={handleFormChange} />
        <Skills onSubmit={handleFormChange} />
        <Projects onSubmit={handleFormChange} />
        <Experience onSubmit={handleFormChange}/>
      </div>
      <div className="preview-section">
        <Preview data={data} />
      </div>
    </div>
  );
}
