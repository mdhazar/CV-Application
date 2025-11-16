import { useState, useEffect } from "react";
import GeneralInfo from "./GeneralInfo";
import Projects from "./Projects";
import Preview from "../components/Preview";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { usePDF } from "react-to-pdf";

export default function ResumeBuilder() {
  // Load initial data from localStorage
  const [data, setData] = useState(() => {
    try {
      const savedData = localStorage.getItem("cv-resume-data");
      return savedData ? JSON.parse(savedData) : {};
    } catch (error) {
      console.error("Error loading saved data:", error);
      return {};
    }
  });

  // Configure ATS-friendly PDF with A4 format
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });

  // Auto-save data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cv-resume-data", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, [data]);

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
