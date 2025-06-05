import { useState } from "react";

export default function Projects({ onSubmit }) {
  const [formData, setFormData] = useState({
    projectName: "",
    projectSkills: "",
    projectGithub: "",
    projectUrl: "",
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
      projectName: "",
      projectSkills: "",
      projectGithub: "",
      projectUrl: "",
      projectSummary:"",
    });
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
        <h1 onClick={toggleForm} style={{ cursor: "pointer" }}>
          Projects
        </h1>
      </div>
      {showForm && (
        <div className="general-info">
          <div>
            <div>
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                placeholder="Enter your project name"
              />
            </div>

            <div>
              <label htmlFor="projectSkills">Project Skills:</label>
              <input
                type="text"
                id="projectSkills"
                name="projectSkills"
                value={formData.projectSkills}
                onChange={handleInputChange}
                placeholder="Enter your skills"
              />
            </div>

            <div>
              <label htmlFor="projectGithub">Github:</label>
              <input
                type="text"
                id="projectGithub"
                name="projectGithub"
                value={formData.projectGithub}
                onChange={handleInputChange}
                placeholder="Enter your repo url"
              />
            </div>

            <div>
              <label htmlFor="projectUrl">Website:</label>
              <input
                type="text"
                id="projectUrl"
                name="projectUrl"
                value={formData.projectUrl}
                onChange={handleInputChange}
                placeholder="Enter your live project site url"
              />
            </div>
            <div>
              <label htmlFor="projectSummary">Project Summary:</label>
              <textarea
                type="text"
                id="projectSummary"
                name="projectSummary"
                value={formData.projectSummary}
                onChange={handleInputChange}
                placeholder="Enter your project description"
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
