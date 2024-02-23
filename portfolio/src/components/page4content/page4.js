import { useState } from "react";
import { skillsArray } from "./data";
import SkillElement from "./skillDiv";

const Page4 = () => {
  const [skills, setSkills] = useState(skillsArray);

  return (
    <div className="page4" style={pageStyle}>
      {skills.map((skill) => {
        return <SkillElement key={skill.id} data={skill} />;
      })}
    </div>
  );
};

export default Page4;

const pageStyle = {
  margin: "100px auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};