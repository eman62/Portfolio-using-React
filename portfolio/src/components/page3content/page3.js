import { useState } from "react";
import { skillsArray } from "./data";
import ProgressElement from "./progress";

const Page3 = () => {
  const [skills, setSkills] = useState(skillsArray);

  return (
    <div className="page3" style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={headingStyle}>Skills</h1>
      </header>
      <p className="page3paragraph" style={paragraphStyle}>
        Highly motivated graduate with experience and education in computer
        science, seeking a position as a Full Stack Developer and working
        alongside a professional team in a supportive atmosphere that helps me
        develop my skills by producing comprehensive software plans and
        applications that meet all customer objectives and contribute to company
        success.
      </p>

      <main style={mainStyle}>
        <section className="skills-section" style={skillsSectionStyle}>
          <h2 style={sectionHeadingStyle}>My Focus</h2>
          <div className="skills" style={skillsContainerStyle}>
            <div className="skill-item" style={skillItemStyle}>
              <h4>UI/UX Design</h4>
            </div>
            <div className="skill-item" style={skillItemStyle}>
              <h4>Web Design</h4>
            </div>
            <div className="skill-item" style={skillItemStyle}>
              <h4>Mobile App Development</h4>
            </div>
          </div>
        </section>

        <section className="colored-divs-section" style={coloredDivsSectionStyle}>
          <br />
          <br />
          {skills.map((skill) => {
            return (
              <div className="col" key={skill.id} style={colStyle}>
                <ProgressElement data={skill} />
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Page3;


const pageStyle = {
  backgroundColor: "#f0f0f0", 
  color: "#333", 
};

const headerStyle = {
  backgroundColor: "#555", 
  color: "#fff", 
  padding: "20px 0",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2.5rem",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.6",
  margin: "20px 0",
};

const mainStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const skillsSectionStyle = {
  marginTop: "50px",
  marginBottom: "50px",
};

const sectionHeadingStyle = {
  fontSize: "2rem",
  color: "#555", 
  marginBottom: "30px",
};

const skillsContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const skillItemStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  flexBasis: "30%",
};

const coloredDivsSectionStyle = {
  backgroundColor: "#fff", 
  padding: "50px",
  borderRadius: "10px",
};

const colStyle = {
  marginBottom: "30px",
};
