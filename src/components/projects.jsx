import "../styles/projects.scss";
import "../styles/style.scss";

const Projects = () => {
  return (
    <div className="projects-main-wrapper container">
      <div className="projects container section">
        <div className="projects-wrapper container">
          <h2 className="projects-title">projects</h2>

          <h3>new portfolio &#40;featured&#41;</h3>
          <p>
            This project represents the culmination of my knowledge and skills,
            combining ReactJS and SCSS to create my best work yet.
          </p>

          <div className="projects-ul-wrapper">
            <p>tech-used</p>
            <ul>
              <li>
                <img src="HTML5-icon.png" alt="" />
                HTML 5
              </li>
              <li>
                <img src="SCSS-icon.png" alt="" />
                SCSS
              </li>
              <li>
                <img src="JavaScript-icon.png" alt="" />
                javascript
              </li>
              <li>
                <img src="ReactJS-icon.png" alt="" />
                ReactJS
              </li>
            </ul>

            <a href="https://new-portfolio-alpha-ten.vercel.app/">
              https://new-portfolio-alpha-ten.vercel.app/
            </a>
            <a href="https://github.com/Genreee/new-portfolio">
              <button>source code</button>
            </a>
          </div>
        </div>
        <img src="new-portfolio.png" alt="" />
      </div>

      <div className="projects container section">
        <div className="projects-wrapper container">
          <h2 className="projects-title">projects</h2>

          <h3>TVIV</h3>
          <p>
            I have recently completed my first independent project after
            developing my <br /> skills through online learning resources,
            including YouTube. This project holds <br /> significance as it
            marks the beginning of my portfolio, showcasing my progress
            <br />
            and achievements.
          </p>

          <div className="projects-ul-wrapper">
            <p>tech-used</p>
            <ul>
              <li>
                <img src="HTML5-icon.png" alt="" />
                HTML 5
              </li>
              <li>
                <img src="CSS-icon.png" alt="" />
                CSS 3
              </li>
              <li>
                <img src="JavaScript-icon.png" alt="" />
                javascript
              </li>
            </ul>

            <a href="https://genre-movies.vercel.app/">
              https://genre-movies.vercel.app/
            </a>
            <a href="https://github.com/Genreee/genre-movies">
              <button>source code</button>
            </a>
          </div>
        </div>
        <img src="project-1.png" alt="" />
      </div>

      <div className="projects container section">
        <div className="projects-wrapper container">
          <h3>old portfolio</h3>
          <p>
            I created this as my first project, and while I learned a lot during
            its development,
            <br /> I am not fully satisfied with it because I copied half of
            portion. Now, I am motivated <br /> to start fresh and build a new
            project entirely on my own, without relying too much <br /> on
            external sources.
          </p>

          <div className="projects-ul-wrapper">
            <p>tech-used</p>
            <ul>
              <li>
                <img src="HTML5-icon.png" alt="" />
                HTML 5
              </li>
              <li>
                <img src="CSS-icon.png" alt="" />
                CSS 3
              </li>
              <li>
                <img src="JavaScript-icon.png" alt="" />
                javascript
              </li>
            </ul>

            <a href="https://old-portfolio-genre.vercel.app/">
              https://old-portfolio-genre.vercel.app/
            </a>
            <a href="https://github.com/Genreee/Old-Portfolio-Genre">
              <button>source code</button>
            </a>
          </div>
        </div>
        <img src="new-portfolio-screenshot.png" alt="" />
      </div>
    </div>
  );
};
export default Projects;
