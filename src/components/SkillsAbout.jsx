import "../detailapp.css";
import { useState } from "react";

// Skills data organized by category
const skillsData = {
  Frameworks: [
    "Redux",
    "Express.js",
    "Next.js",
    "Jest",
    "Vanilla JS",
    "Bootstrap",
    "Material UI",
    "Cypress",
    "OAuth 2",
    "Tailwind CSS",
    ".NET",
    "Serverless Framework",
    "JSON Web Tokens (JWT)",
  ],
  Tools: [
    "Jira",
    "Redux Thunk",
    "Git",
    "GitHub",
    "Slack",
    "Redux Toolkit",
    "Figma",
    "Webpack",
    "Babel",
    "Mongoose",
  ],
  Languages: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Java",
    "SQL",
    "GraphQL",
    "PHP",
    "C#",
    "Python",
    "Less",
    "SCSS",
    "Python 3",
  ],
  Storage: [
    "Amazon S3 (AWS S3)",
    "JSON",
    "Databases",
    "NoSQL",
    "MongoDB",
    "PostgreSQL",
    "Amazon DynamoDB",
    "Redis",
  ],
  Platforms: [
    "Amazon Web Services (AWS)",
    "Contentful",
    "Docker",
    "Klaviyo",
    "Android",
    "Google Cloud Platform (GCP)",
    "Ethereum",
    "Heroku",
    "Blockchain",
    "Amazon EC2",
    "Vercel",
  ],
  Paradigms: [
    "REST",
    "Testing",
    "Test-driven Development (TDD)",
    "Unit Testing",
    "E2E Testing",
    "Search Engine Optimization (SEO)",
    "UX Design",
    "UI Design",
  ],
};

export default function SkillsAbout() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const toggleSkills = () => setIsSkillsOpen(!isSkillsOpen);
  const toggleEducation = () => setIsEducationOpen(!isEducationOpen);

  return (
    <div className="dropdown-container">
      {/* Skills Dropdown */}
      <div className="dropdown-item">
        <div className="dropdown-header" onClick={toggleSkills}>
          <span className="dropdown-title">Skills</span>
          <span className={`dropdown-icon ${isSkillsOpen ? "rotate" : ""}`}>
            <img
              src="assets/arrow-down-s-line.svg"
              alt="Toggle Arrow"
              className="arrow-icon"
            />
          </span>
        </div>
        <div className={`dropdown-content ${isSkillsOpen ? "open" : ""}`}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div className="skills" key={category}>
              <h3 className="skillcatagory">
                <span class="material-symbols-outlined">
                  radio_button_unchecked
                </span>
                {category}
              </h3>
              <ul className="skillslist">
                {skills.map((skill) => (
                  <li className="skillslistli" key={skill}>
                    {skill},
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Dropdown */}
      <div className="dropdown-item">
        <div className="dropdown-header" onClick={toggleEducation}>
          <span className="dropdown-title">Education</span>
          <span className={`dropdown-icon ${isSkillsOpen ? "rotate" : ""}`}>
            <img
              src="assets/arrow-down-s-line.svg"
              alt="Toggle Arrow"
              className="arrow-icon"
            />
          </span>
        </div>
        <div className={`dropdown-content ${isEducationOpen ? "open" : ""}`}>
          <p className="belack">Bachelor&apos; Degree in Computer Science</p>
          <p>National University of Sciences and Technology - Islamabad, Pakistan</p>
        </div>
      </div>
    </div>
  );
}
