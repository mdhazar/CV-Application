import React from "react";
import Edit from "./Edit";
import Preview from "../components/Preview";
export default function ResumeBuilder() {
  const onChangeName = (formData) => {
    console.log("Preview received new form data:", formData);
    return formData;
  };

  return (
    <div className="container">
      <div className="forms">
        <Edit onSubmit={onChangeName} />
      </div>

      <Preview />
    </div>
  );
}
