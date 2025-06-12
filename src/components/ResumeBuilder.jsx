import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Projects from "./Projects";
import Preview from "../components/Preview";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { usePDF } from "react-to-pdf";

export default function ResumeBuilder() {
  const [data, setData] = useState({});
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });

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
        <Experience onSubmit={handleFormChange} />
        <button onClick={() => toPDF()} className="download-button">
          Download PDF
        </button>
      </div>
      <div className="preview-section">
        <div ref={targetRef}>
          <Preview data={data} />
        </div>
      </div>
    </div>
  );
}
