import { useState } from "react";

export default function Summary({ onSubmit }) {
  const [formData, setFormData] = useState({
    summary: "",
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
      summary: "",
    });
  };

  return (
    <div>
      <div>
        <h1>Summary</h1>
      </div>
      <div className="general-info">
        <div>
          <div>
            <label htmlFor="summary">Summary:</label>
            <input
              type="text"
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              placeholder="Enter summary of yourself"
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
