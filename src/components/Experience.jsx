import { useState } from "react";

export default function Experience({ onSubmit }) {
  const [experiences, setExperiences] = useState([
    {
      experienceName: "",
      jobRole: "",
      experienceSummary: "",
      experienceStartDate: "",
      experienceEndDate: "",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    const newExperience = {
      experienceName: "",
      jobRole: "",
      experienceSummary: "",
      experienceStartDate: "",
      experienceEndDate: "",
    };
    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (index) => {
    if (experiences.length > 1) {
      const updatedExperiences = experiences.filter((_, i) => i !== index);
      setExperiences(updatedExperiences);
      onSubmit({ experiences: updatedExperiences });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ experiences });
  };

  const handleReset = () => {
    const resetExperiences = [
      {
        experienceName: "",
        jobRole: "",
        experienceSummary: "",
        experienceStartDate: "",
        experienceEndDate: "",
      },
    ];
    setExperiences(resetExperiences);
    onSubmit({ experiences: resetExperiences });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1 onClick={toggleForm} style={{ cursor: "pointer" }}>
        Experience {showForm ? "▼" : "▶"}
      </h1>
      {showForm && (
        <div className="general-info">
          {experiences.map((exp, index) => (
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
                  <label htmlFor={`experienceName-${index}`}>
                    Company Name:
                  </label>
                  <input
                    type="text"
                    id={`experienceName-${index}`}
                    value={exp.experienceName}
                    onChange={(e) =>
                      handleInputChange(index, "experienceName", e.target.value)
                    }
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor={`jobRole-${index}`}>Job Role:</label>
                  <input
                    type="text"
                    id={`jobRole-${index}`}
                    value={exp.jobRole}
                    onChange={(e) =>
                      handleInputChange(index, "jobRole", e.target.value)
                    }
                    placeholder="Enter your job role"
                  />
                </div>

                <div>
                  <label htmlFor={`experienceSummary-${index}`}>
                    Experience Summary:
                  </label>
                  <textarea
                    id={`experienceSummary-${index}`}
                    value={exp.experienceSummary}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "experienceSummary",
                        e.target.value
                      )
                    }
                    placeholder="Enter your achievements/role description"
                    rows={4}
                  />
                </div>

                <div>
                  <label htmlFor={`experienceStartDate-${index}`}>
                    Start Date:
                  </label>
                  <input
                    type="text"
                    id={`experienceStartDate-${index}`}
                    value={exp.experienceStartDate}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "experienceStartDate",
                        e.target.value
                      )
                    }
                    placeholder="Enter your start date"
                  />
                </div>

                <div>
                  <label htmlFor={`experienceEndDate-${index}`}>
                    End Date:
                  </label>
                  <input
                    type="text"
                    id={`experienceEndDate-${index}`}
                    value={exp.experienceEndDate}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "experienceEndDate",
                        e.target.value
                      )
                    }
                    placeholder="Enter your end date"
                  />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  {experiences.length > 1 && (
                    <button
                      onClick={() => removeExperience(index)}
                      style={{
                        backgroundColor: "#ff4757",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "3px",
                      }}
                      title="Remove experience"
                    >
                      ✕
                    </button>
                  )}
                  <button
                    onClick={addExperience}
                    style={{
                      backgroundColor: "#2ed573",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "3px",
                    }}
                    title="Add new experience"
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
