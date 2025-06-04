import { useState } from "react";

export default function Projects({ onSubmit }) {
  const [formData, setFormData] = useState({
    projectName1: "",
    projectSkills1: "",
    project1github: "",
    project1Url: "",
  });

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
      projectName1: "",
      projectSkills1: "",
      project1github: "",
      project1Url: "",
    });
  };

  return (
    <div>
      <div>
        <h1>Projects</h1>
      </div>
      <div className="general-info">
        <div>
          <div>
            <label htmlFor="projectName1">Project Name:</label>
            <input
              type="text"
              id="projectName1"
              name="projectName1"
              value={formData.projectName1}
              onChange={handleInputChange}
              placeholder="Enter your project name"
            />
          </div>

          <div>
            <label htmlFor="projectSkills1">Project Skills:</label>
            <textarea
              type="text"
              id="projectSkills1"
              name="projectSkills1"
              value={formData.projectSkills1}
              onChange={handleInputChange}
              placeholder="Enter your skills"
            />
          </div>

          <div>
            <label htmlFor="project1github">Github:</label>
            <input
              type="text"
              id="project1github"
              name="project1github"
              value={formData.project1github}
              onChange={handleInputChange}
              placeholder="Enter your repo url"
            />
          </div>

          <div>
            <label htmlFor="project1Url">Website:</label>
            <input
              type="text"
              id="project1Url"
              name="project1Url"
              value={formData.project1Url}
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
    </div>
  );
}
