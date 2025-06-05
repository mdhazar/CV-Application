import { useState } from "react";

export default function Experience({ onSubmit }) {
  const [formData, setFormData] = useState({
    experienceName1: "",
    experienceRole1: "",
    experienceStartDate: "",
    projexperienceEndDateect1Url: "",
  });
  const [showForm, setShowForm] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("Input changed:", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    onSubmit(formData);
  }

  const handleReset = () => {
    setFormData({
        experienceName: "",
        jobRole: "",
        experienceSummary:"",
        experienceStartDate: "",
        experienceEndDate: "",
    });
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
        <h1 onClick={toggleForm} style={{ cursor: "pointer" }}>
          Experience
        </h1>
      </div>
      {showForm && (
        <div className="general-info">
          <div>
            <div>
              <label htmlFor="experienceName">Company Name:</label>
              <input
                type="text"
                id="experienceName"
                name="experienceName"
                value={formData.experienceName1}
                onChange={handleInputChange}
                placeholder="Enter your company name"
              />
              
            </div>
            <div>
              <label htmlFor="jobRole">Job Role:</label>
              <input
                type="text"
                id="jobRole"
                name="jobRole"
                value={formData.jobRole1}
                onChange={handleInputChange}
                placeholder="Enter your job role"
              />
              
            </div>

            <div>
              <label htmlFor="experienceSummary">Experience Summary:</label>
              <textarea
                type="text"
                id="experienceSummary"
                name="experienceSummary"
                value={formData.experienceSummary1}
                onChange={handleInputChange}
                placeholder="Enter your achievements/role description"
              />
            </div>

            <div>
              <label htmlFor="experienceStartDate">Start Date:</label>
              <input
                type="text"
                id="experienceStartDate"
                name="experienceStartDate"
                value={formData.experienceStartDate}
                onChange={handleInputChange}
                placeholder="Enter your start date"
              />
            </div>

            <div>
              <label htmlFor="experienceEndDate">End Date:</label>
              <input
                type="text"
                id="experienceEndDate"
                name="experienceEndDate"
                value={formData.experienceEndDate}
                onChange={handleInputChange}
                placeholder="Enter your end date"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleReset} style={{ marginLeft: "10px" }}>
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
