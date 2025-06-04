export default function Preview({ data = "" }) {
  return (
    <div className="preview">
      <div className="general">
        <div className="contact">
          <h1>{data.fullName || "John Doe"}</h1>
          <div>
            <div>{data.email || "John.Doe@example.com"}</div>
            <div>{data.phone || "+90-554-123-12-13"}</div>
            <div>
              <a
                href={`https://github.com/${data.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.github || "Github"}
              </a>
            </div>
            <div>
              <a
                href={`https://linkedin.com/in/${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.linkedin || "Linkedin"}
              </a>
            </div>
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
              {data.schoolStartDate || "startDate"} |{" "}
              {data.schoolEndDate || "endDate"}
            </div>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <div style={{ whiteSpace: "pre-line" }}>
            {data?.skills ||
              `Front End: Javascript, TypeScript, React, React Native, Expo, Redux, Axios, Vue.js, NextJs, jQuery
                Back End: Java, Python, NodeJs, OOP, Data Structures, Design Patterns, Maven, Spring Core, Spring Boot, Spring Security, SQL, PostgreSQL, MySql, JWT, Git, .Net, Docker
                Additional: AWS, Azure, Firebase, Postman, Swagger, CI/CD, Debugging, Figma, Shadcn`}
          </div>
        </div>
        <div className="projects">
          <h1>{"Projects"}</h1>
          <div className="education">
            {data.projectName1 || "Project1"}, {data.projectSkills1 || "skills"}
            <div>
              <a
                href={`https://github.com/${data.project1github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.project1github || "github"}
              </a>{" "}
              |{" "}
              <a
                href={data.project1Url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.project1Url || "website"}
              </a>
            </div>
          </div>
          <div>
            •{" "}
            {data.project1Summary ||
              "Developed a full-featured CV web application using React."}
          </div>
        </div>
      </div>
    </div>
  );
}
