import { useState } from "react";
import Edit from "./Edit";
import General from "./General";

export default function Preview() {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
  });
  const onChangeName = (formData) => {
    setContact(formData);
  };
  return (
    <div>
      <Edit onSubmit={onChangeName} />
      <General
        fullName={contact.fullName}
        email={contact.email}
        phone={contact.phone}
        github={contact.github}
      />
    </div>
  );
}
