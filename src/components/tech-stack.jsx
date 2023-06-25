import "../styles/tech-stack.scss";
import "../styles/style.scss";

const Techstack = () => {
  return (
    <div className="tech-stack container section">
      <h2 className="tech-stack-title">tech-stack</h2>

      <div class="tech-stack-ul-wrapper">
        <ul className="about__ul">
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/JavaScript-icon.png"
              alt="JavaScript icon"
            />
            JavaScript (ES6+)
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/CSS-icon.png"
              alt="CSS icon"
            />
            CSS
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/HTML5-icon.png"
              alt="laptop icon"
            />
            HTML5
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/Java-icon.png"
              alt="Java icon"
            />
            Java
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/Git-icon.png"
              alt="Git icon"
            />
            Git
          </li>
        </ul>
        <ul className="about__ul">
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/ReactJS-icon.png"
              alt="ReactJS icon"
            />
            ReactJS
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/SCSS-icon.png"
              alt="SCSS icon"
            />
            SCSS
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/Vite-icon.jpg"
              alt="Vite icon"
            />
            Vite
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/Python-icon.png"
              alt="Python icon"
            />
            Python
          </li>
          <li className="about__list">
            <img
              className="about__icon-img"
              src="/Github-icon.png"
              alt="Github icon"
            />
            Github
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Techstack;
