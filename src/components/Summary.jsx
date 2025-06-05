import { useState } from "react";

export default function Summary({ onSubmit }) {
  const [formData, setFormData] = useState({
    summary: "",
  });
  const [showForm, setShowForm] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  const handleReset = () => {
    setFormData({
      summary: "",
    });
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
        <h1 onClick={toggleForm} style={{ cursor: "pointer" }}>
          Summary
        </h1>
      </div>
      {showForm && (
        <div className="general-info">
          <div>
            <div>
              <textarea
                rows={4}
                cols={40}
                type="text"
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                placeholder="Enter your summary"
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
