import { useState, useEffect, useRef } from "react";
import GeneralInfo from "./GeneralInfo";
import Projects from "./Projects";
import Preview from "../components/Preview";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const targetRef = useRef(null);

  // Custom PDF generation function with A4 format
  const generatePDF = async () => {
    if (!targetRef.current) return;

    try {
      // A4 dimensions in mm
      const a4Width = 210;
      const a4Height = 297;

      // Generate canvas from HTML with high quality
      const canvas = await html2canvas(targetRef.current, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: targetRef.current.scrollWidth,
        windowHeight: targetRef.current.scrollHeight,
      });

      // Calculate dimensions to fit A4
      const imgWidth = a4Width;
      const imgHeight = (canvas.height * a4Width) / canvas.width;

      // Create PDF with A4 format
      const pdf = new jsPDF({
        orientation: imgHeight > a4Height ? "portrait" : "portrait",
        unit: "mm",
        format: "a4",
      });

      // Convert canvas to image
      const imgData = canvas.toDataURL("image/png");

      // Add image to PDF, handling multi-page if needed
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= a4Height;

      // Add additional pages if content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= a4Height;
      }

      // Save the PDF
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

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
        <button onClick={generatePDF} className="download-button">
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
