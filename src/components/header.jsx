import "../styles/header.scss";
import "../styles/style.scss";

const Header = () => {
  return (
    <header className="container">
      <ul>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">service</a>
        </li>
        <li>
          <a href="#">skills</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
