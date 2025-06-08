import { useState } from "react";

export default function Skills({ onSubmit }) {
  const [skill, setSkill] = useState([""]);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (index, value) => {
    const updatedSkill = [...skill];
    updatedSkill[index] = value;
    setSkill(updatedSkill);
  };

  const addSkill = () => {
    setSkill([...skill, ""]);
  };

  const removeSkill = (index) => {
    const updatedSkill = skill.filter((_, i) => i !== index);
    setSkill(updatedSkill);
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ skill });
  }

  const handleReset = () => {
    setSkill([""]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
      <h1 onClick={toggleForm} className="header">
        Skills 
        <div className={`arrow ${showForm ? 'expanded' : ''}`}></div>
      </h1>
      </div>
      {showForm && (
        <div className={`general-info ${showForm ? 'show' : ''}`}>
          <div>
            {skill.map((skillItem, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <textarea
                    rows={4}
                    value={skillItem}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Enter skill ${index + 1}`}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      style={{
                        backgroundColor: "#ff4757",
                        color: "white",
                        fontSize: "1rem",
                        padding: "10px 10px",
                      }}
                    >
                      ✕
                    </button>
                    <button
                      type="button"
                      onClick={addSkill}
                      style={{
                        backgroundColor: "#2ed573",
                        color: "white",
                        fontSize: "1rem",
                        padding: "0.65em",
                      }}
                    >
                      ＋
                    </button>
                  </div>
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
