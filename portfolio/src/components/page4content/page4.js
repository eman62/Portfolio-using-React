import { useState } from "react";
import { skillsArray } from "./data";
import SkillElement from "./skillDiv";
const Page4 = () => {
  const [skills, setSkills] = useState(skillsArray);
    return(
    <div className="page4">
      
        {skills.map((skill) => {
                    return (
                            <SkillElement data={skill} />
                    );
                })}
        
    
      </div>
    )
    
}

export default Page4;