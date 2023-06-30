import "../styles/header.scss";
import "../styles/style.scss";
import ImageToggle from "./darkmode";

const Header = () => {
  return (
    <header className="container">
      <ul>
        <li>
          <ImageToggle />
        </li>
        <li>
          <a className="anchor" href="#about">
            about
          </a>
        </li>
        <li>
          <a className="anchor" href="#services">
            services
          </a>
        </li>
        <li>
          <a className="anchor" href="#skills">
            skills
          </a>
        </li>
        <li>
          <a className="anchor" href="#projects">
            projects
          </a>
        </li>
        <li>
          <a className="anchor" href="#contact">
            contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
