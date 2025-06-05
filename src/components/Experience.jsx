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
        experienceName1: "",
        experienceRole1: "",
        experienceStartDate: "",
        projexperienceEndDateect1Url: "",
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
              <label htmlFor="experienceName1">Company Name:</label>
              <input
                type="text"
                id="experienceName1"
                name="experienceName1"
                value={formData.experienceName1}
                onChange={handleInputChange}
                placeholder="Enter your project name"
              />
            </div>

            <div>
              <label htmlFor="experienceRole1">Job Role:</label>
              <textarea
                type="text"
                id="experienceRole1"
                name="experienceRole1"
                value={formData.experienceRole1}
                onChange={handleInputChange}
                placeholder="Enter your skills"
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
                placeholder="Enter your repo url"
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
                placeholder="Enter your live project site url"
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
