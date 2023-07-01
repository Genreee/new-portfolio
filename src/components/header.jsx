import "../styles/header.scss";
import ImageToggle from "./darkmode";
import "../styles/mobile-nav.scss";
import "../styles/darkmode.scss";
import "../styles/style.scss";

const Header = () => {
  

  
  return (
    <header className="container">
      <ul>
        <li>
          <button className="darkmode-btn">
            <ImageToggle />
          </button>
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
