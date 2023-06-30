import "../styles/skills.scss";
import "../styles/style.scss";
import Techstack from "./tech-stack";



const Skills = () => {
  return (
    <div id="skills" className="skills-wrapper container section">
      <div className="skills container section">
        <h2 className="skills-title titles">skills</h2>

        <p>
          Proficient in HTML, CSS, and SCSS framework, with excellent knowledge
          of structured and responsive design principles
        </p>
        <p>
          7 months of experience in JavaScript, including version control with
          Git, GitHub, and build tools like Vite.
        </p>
        <p>Familiarity with front-end frameworks like React JS.</p>
        <p>
          Strong problem-solving and analytical skills, meticulous attention to
          detail, and excellent communication and collaboration abilities.
        </p>
      </div>
      <Techstack />
    </div>
  );
};
export default Skills;
