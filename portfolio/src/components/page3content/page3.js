import { useState } from "react";
import { skillsArray } from './data';
import ProgressElement from "./progress";
const Page3 = () => {
  const [skills, setSkills] = useState(skillsArray);
    return(
    
       <div className="page3">
    <header>
    <h1>Skills</h1>
  </header>
  <p className="page3paragraph">Highly motivated graduate with experience and education in computer science, Seeking for a position as a Full stack developer and Working alongside a professional team in a good atmosphere that helps me to develop my skills by producing a whole software plan And application that meets all the customer's objectives and contribute to company success.</p>

  <main>
    <section class="skills-section">
      <h2>My focus</h2>
      <div class="skills">
        <div class="skill-item">
          <h4>UI/Ux design</h4>
        </div>
        <div class="skill-item">
          <h4>web design</h4>
        </div>
        <div class="skill-item">
          <h4>Mobil app developing</h4>
        </div>
      </div>
    </section>

    <section className="colored-divs-section">
        <br></br>
        <br></br>
        
        {skills.map((skill) => {
                    return (
                        <div className="col" key={skill.id}>
                            <ProgressElement data={skill} />
                        </div>
                    );
                })}
        
      </section>
  </main>
       </div>
    )
    
}

export default Page3;