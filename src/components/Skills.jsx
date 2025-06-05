import { useState } from "react";

export default function Skills({ onSubmit }) {
  const [formData, setFormData] = useState({
    skills: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("Input changed:", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    onSubmit(formData);
  }

  const handleReset = () => {
    setFormData({
      skills: "",
    });
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
        <h1 onClick={toggleForm} style={{ cursor: "pointer" }}>
          Skills
        </h1>
      </div>
      {showForm && (
        <div className="general-info">
          <div>
            <div>
              <textarea
                rows={4}
                cols={30}
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="Enter your skills"
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
