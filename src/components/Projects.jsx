import { useState } from "react";

export default function Projects({ onSubmit }) {
  const [projects, setProjects] = useState([
    {
      projectName: "",
      projectSkills: "",
      projectGithub: "",
      projectUrl: "",
      projectSummary: "",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setProjects(updatedProjects);
  };

  const addProject = () => {
    const newProject = {
      projectName: "",
      projectSkills: "",
      projectGithub: "",
      projectUrl: "",
      projectSummary: "",
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (index) => {
    if (projects.length > 1) {
      const updatedProjects = projects.filter((_, i) => i !== index);
      setProjects(updatedProjects);
      onSubmit({ projects: updatedProjects });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ projects });
  };

  const handleReset = () => {
    const resetProjects = [
      {
        projectName: "",
        projectSkills: "",
        projectGithub: "",
        projectUrl: "",
        projectSummary: "",
      },
    ];
    setProjects(resetProjects);
    onSubmit({ projects: resetProjects });
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1 onClick={toggleForm} className="header">
        Projects
        <div className={`arrow ${showForm ? 'expanded' : ''}`}></div>
      </h1>
      {showForm && (
        <div className="general-info">
          {projects.map((p, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div>
                  <label htmlFor={`projectName-${index}`}>Project Name:</label>
                  <input
                    type="text"
                    id={`projectName-${index}`}
                    value={p.projectName}
                    onChange={(e) =>
                      handleInputChange(index, "projectName", e.target.value)
                    }
                    placeholder="Enter your project name"
                  />
                </div>

                <div>
                  <label htmlFor={`projectSkills-${index}`}>
                    Project Skills:
                  </label>
                  <input
                    type="text"
                    id={`projectSkills-${index}`}
                    value={p.projectSkills}
                    onChange={(e) =>
                      handleInputChange(index, "projectSkills", e.target.value)
                    }
                    placeholder="Enter your skills"
                  />
                </div>

                <div>
                  <label htmlFor={`projectGithub-${index}`}>Github:</label>
                  <input
                    type="text"
                    id={`projectGithub-${index}`}
                    value={p.projectGithub}
                    onChange={(e) =>
                      handleInputChange(index, "projectGithub", e.target.value)
                    }
                    placeholder="Enter your repo url"
                  />
                </div>

                <div>
                  <label htmlFor={`projectUrl-${index}`}>Website:</label>
                  <input
                    type="text"
                    id={`projectUrl-${index}`}
                    value={p.projectUrl}
                    onChange={(e) =>
                      handleInputChange(index, "projectUrl", e.target.value)
                    }
                    placeholder="Enter your live project site url"
                  />
                </div>

                <div>
                  <label htmlFor={`projectSummary-${index}`}>
                    Project Summary:
                  </label>
                  <textarea
                    id={`projectSummary-${index}`}
                    value={p.projectSummary}
                    onChange={(e) =>
                      handleInputChange(index, "projectSummary", e.target.value)
                    }
                    placeholder="Enter your project description"
                    rows={4}
                  />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  {projects.length > 1 && (
                    <button
                      onClick={() => removeProject(index)}
                      style={{
                        backgroundColor: "#ff4757",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "3px",
                      }}
                    >
                      ✕
                    </button>
                  )}
                  <button
                    onClick={addProject}
                    style={{
                      backgroundColor: "#2ed573",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "3px",
                    }}
                  >
                    ＋
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
