import { useState } from "react";

export default function Education({ onSubmit }) {
  const [education, setEducation] = useState([
    {
      school: "",
      department: "",
      schoolStartDate: "",
      schoolEndDate: "",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    const newEducation = {
      school: "",
      department: "",
      schoolStartDate: "",
      schoolEndDate: "",
    };
    setEducation([...education, newEducation]);
  };

  const removeEducation = (index) => {
    if (education.length > 1) {
      const updatedEducation = education.filter((_, i) => i !== index);
      setEducation(updatedEducation);
      onSubmit({ education: updatedEducation });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ education });
  }

  const handleReset = () => {
    const resetEducation = [
      {
        school: "",
        department: "",
        schoolStartDate: "",
        schoolEndDate: "",
      },
    ];
    setEducation(resetEducation);
    onSubmit({ education: resetEducation });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
        <h1 onClick={toggleForm} className="header">
          Education
          <div className={`arrow ${showForm ? 'expanded' : ''}`}></div>
        </h1>
      </div>
      {showForm && (
        <div className="general-info">
          <div>
            {education.map((edu, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <label htmlFor={`school-${index}`}>School:</label>
                  <input
                    type="text"
                    id={`school-${index}`}
                    name="school"
                    value={edu.school}
                    onChange={(e) =>
                      handleInputChange(index, "school", e.target.value)
                    }
                    placeholder="Enter your school name"
                  />
                </div>

                <div>
                  <label htmlFor={`department-${index}`}>Department:</label>
                  <input
                    type="text"
                    id={`department-${index}`}
                    name="department"
                    value={edu.department}
                    onChange={(e) =>
                      handleInputChange(index, "department", e.target.value)
                    }
                    placeholder="Enter your department/major"
                  />
                </div>

                <div>
                  <label htmlFor={`startDate-${index}`}>Start Date:</label>
                  <input
                    type="text"
                    id={`startDate-${index}`}
                    name="schoolStartDate"
                    value={edu.schoolStartDate}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "schoolStartDate",
                        e.target.value
                      )
                    }
                    placeholder="Enter your start date"
                  />
                </div>

                <div>
                  <label htmlFor={`endDate-${index}`}>End Date:</label>
                  <input
                    type="text"
                    id={`endDate-${index}`}
                    name="schoolEndDate"
                    value={edu.schoolEndDate}
                    onChange={(e) =>
                      handleInputChange(index, "schoolEndDate", e.target.value)
                    }
                    placeholder="Enter your end date"
                  />
                </div>

                <div
                  style={{ marginTop: "10px", display: "flex", gap: "10px" }}
                >
                  {education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      style={{
                        backgroundColor: "#ff4757",
                        color: "white",
                        fontSize: "1rem",
                      }}
                    >
                      ✕
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={addEducation}
                    style={{
                      backgroundColor: "#2ed573",
                      color: "white",
                      fontSize: "1rem",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
