export default function Preview({ data = "" }) {
  return (
    <div className="preview">
      <div className="general">
        <div className="contact">
          <h1>{data.fullName || "John Doe"}</h1>
          <div>
            <div>{data.email || "John.Doe@example.com"}</div>
            <div>{data.phone || "+90-554-123-12-13"}</div>
            <div>{data.github || "Github"}</div>
            <div>{data.linkedin || "Linkedin"}</div>
          </div>
        </div>
        <div className="summary">
          <h1>{"Summary"}</h1>
          <div>
            {data.summary ||
              "Velit consequat ut Lorem mollit deserunt id occaecat in id sunt duis aliquip. Culpa amet eiusmod sit Lorem nulla dolore adipisicing proident. Incididunt commodo et ad culpa."}
          </div>
        </div>
        <div>
          <h1>{"Education"}</h1>
          <div className="education">
            {data.school || "XYZ University"}, {data.department || "department"}
            <div>
              {data.startDate || "startDate"} | {data.endDate || "endDate"}
            </div>
          </div>
        </div>
        <div>
          <h1>{"Skills"}</h1>
        </div>
        <div className="projects">
          <h1>{"Projects"}</h1>
          <div className="education">
            {data.project1 || "Project1"}, {data.skills || "skills"}
            <div>
              {data.project1github || "github"} |{" "}
              {data.project1website || "website"}
            </div>
          </div>
          <div>
            •{" "}
            {data.project1 ||
              "Developed a full-featured CV web application using React."}
          </div>
        </div>
      </div>
    </div>
  );
}
