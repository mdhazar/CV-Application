import { useState } from "react";

export default function Education({ onSubmit }) {
  const [formData, setFormData] = useState({
    school: "",
    department: "",
    schoolStartDate: "",
    schoolEndDate: "",
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
      school: "",
      department: "",
      schoolStartDate: "",
      schoolEndDate: "",
    });
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
        <h1 onClick={toggleForm} style={{ cursor: "pointer" }}>
          Education
        </h1>
      </div>
      {showForm && (
        <div className="general-info">
          <div>
            <div>
              <label htmlFor="school">School:</label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                placeholder="Enter your school name"
              />
            </div>

            <div>
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="Enter your department/major"
              />
            </div>

            <div>
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="text"
                id="schoolStartDate"
                name="schoolStartDate"
                value={formData.schoolStartDate}
                onChange={handleInputChange}
                placeholder="Enter your start date"
              />
            </div>

            <div>
              <label htmlFor="endDate">End Date:</label>
              <input
                type="text"
                id="schoolEndDate"
                name="schoolEndDate"
                value={formData.schoolEndDate}
                onChange={handleInputChange}
                placeholder="Enter your end date"
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
