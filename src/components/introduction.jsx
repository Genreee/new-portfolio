import "../styles/introduction.scss";
import "../styles/style.scss";

const Introduction = () => {
  return (
    <div className="introduction container">
      <img src="./profile.jpg" alt="" />
      <p>
        <span className="genre">hi! im genre</span> <br />
        <span className="frontend-developer">frontend developer</span>
      </p>

      <div className="resume_cv-wrapper">
        <a href="/Genreglennresume.pdf" download="Genreglennresume.pdf">
          <button className="button-resume">resume</button>
        </a>
        <a href="/Genreglenncv.pdf" download="Genreglenncv.pdf">
          <button className="button-cv">cv</button>
        </a>
      </div>


    </div>
  );
};

export default Introduction;
