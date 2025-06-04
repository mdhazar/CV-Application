import { useState } from "react";

export default function Edit(onSubmit) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
  });
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

  return (
    <div>
      <div>
        <h1>Edit General Information</h1>
      </div>
      <div className="general-info">
        <form onSubmit={handleSubmit}>
          <input value={formData.fullName} onChange={handleInputChange} />
          <input value={formData.email} onChange={handleInputChange} />
          <input value={formData.phone} onChange={handleInputChange} />
          <input value={formData.github} onChange={handleInputChange} />
        </form>
        <button type="submit"> Submit </button>
      </div>
    </div>
  );
}
