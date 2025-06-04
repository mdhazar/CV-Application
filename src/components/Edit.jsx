import { useState } from "react";

export default function Edit({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
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
      fullName: "",
      email: "",
      phone: "",
      github: "",
    });
  };

  return (
    <div>
      <div>
        <h1>Edit General Information</h1>
      </div>
      <div className="general-info">
        <div>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="github">GitHub:</label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
              placeholder="Enter your GitHub username"
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
