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
            {data.summary && data.summary.length > 0
              ? data.summary.map((summary, index) => (
                  <div key={index}>{summary}</div>
                ))
              : "Velit consequat ut Lorem mollit deserunt id occaecat in id sunt duis aliquip. Culpa amet eiusmod sit Lorem nulla dolore adipisicing proident. Incididunt commodo et ad culpa."}
          </div>
        </div>
        <div>
          <h1>{"Education"}</h1>
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="education">
                <div>
                  {edu.school || "XYZ University"},{" "}
                  {edu.department || "Department"}
                </div>
                <div>
                  {edu.schoolStartDate || "Start Date"} |{" "}
                  {edu.schoolEndDate || "End Date"}
                </div>
              </div>
            ))
          ) : (
            <div className="education">
              XYZ University, Department
              <div>Start Date | End Date</div>
            </div>
          )}
        </div>
        <div>
          <h1>Skills</h1>
          <div style={{ whiteSpace: "pre-line" }}>
            {data.skill && data.skill.length > 0
              ? data.skill.map((skill, index) => (
                  <div key={index}>• {skill}</div>
                ))
              : `Front End: Javascript, TypeScript, React, React Native, Expo, Redux, Axios, Vue.js, NextJs, jQuery
Back End: Java, Python, NodeJs, OOP, Data Structures, Design Patterns, Maven, Spring Core, Spring Boot, Spring Security, SQL, PostgreSQL, MySql, JWT, Git, .Net, Docker
Additional: AWS, Azure, Firebase, Postman, Swagger, CI/CD, Debugging, Figma, Shadcn`}
          </div>
        </div>
        <div className="projects">
          <h1>{"Projects"}</h1>
          {data.projects && data.projects.length > 0 ? (
            data.projects.map((project, index) => (
              <div key={index}>
                <div className="education">
                  {project.projectName || "Project"},{" "}
                  {project.projectSkills || "Skills"}
                  <div>
                    <a
                      href={`https://github.com/${project.projectGithub}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {"Github"}
                    </a>{" "}
                    |{" "}
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {"Website"}
                    </a>
                  </div>
                </div>
                <div>
                  •{" "}
                  {project.projectSummary ||
                    "Developed a full-featured CV web application using React."}
                </div>
              </div>
            ))
          ) : (
            <div>
              <div className="education">
                Project, Skills
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {"Github"}
                  </a>{" "}
                  |{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {"Website"}
                  </a>
                </div>
              </div>
              <div>
                • Developed a full-featured CV web application using React.
              </div>
            </div>
          )}
        </div>
        <div className="experience">
          <h1>Experience</h1>
          {data.experiences && data.experiences.length > 0 ? (
            data.experiences.map((exp, index) => (
              <div key={index}>
                <div className="experience">
                  {exp.experienceName || "XYZ company"},{" "}
                  {exp.jobRole || "Front end developer"}
                  <div>
                    {exp.experienceStartDate || "Start Date"} |{" "}
                    {exp.experienceEndDate || "End Date"}
                  </div>
                </div>
                <div>
                  •{" "}
                  {exp.experienceSummary ||
                    "Developed a full-featured CV web application using React."}
                </div>
              </div>
            ))
          ) : (
            <div>
              <div className="experience">
                XYZ company, Front end developer
                <div>Start Date | End Date</div>
              </div>
              <div>
                • Developed a full-featured CV web application using React.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
