import "../styles/projects.scss";
import "../styles/style.scss";

const Projects = () => {
  return (
    <div id="projects" className="projects-main-wrapper container">
      <div className="projects container section">
        <div className="projects-wrapper container section">
          <h2 className="projects-title titles">projects</h2>

          <h3 className="project-h3">new portfolio &#40;featured&#41;</h3>
          <p className="p-new-portfolio">
            This project represents the culmination of my knowledge and skills,
            combining ReactJS and SCSS to create my best work yet.
          </p>

          <div className="projects-ul-wrapper">
            <p>tech-used</p>
            <ul>
              <li>
                <img src="HTML5-icon.png" alt="HTML5 icon png" />
                HTML 5
              </li>
              <li>
                <img src="SCSS-icon.png" alt="SCSS icon png" />
                SCSS
              </li>
              <li>
                <img src="JavaScript-icon.png" alt="JavaScript icon png" />
                javascript
              </li>
              <li>
                <img src="ReactJS-icon.png" alt="ReactJS icon png" />
                ReactJS
              </li>
            </ul>

            <a href="index.html">https://new-portfolio-alpha-ten.vercel.app/</a>
            <a href="https://github.com/Genreee/new-portfolio">
              <button>source code</button>
            </a>
          </div>
        </div>
        <img src="new-portfolio.png" alt="new-portfolio website screenshot" />
      </div>

      <div className="projects container section">
        <div className="projects-wrapper container">
          <h3 className="project-h3">TVIV</h3>
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
                <img src="HTML5-icon.png" alt="HTML5 icon png" />
                HTML 5
              </li>
              <li>
                <img src="CSS-icon.png" alt="CSS icon png" />
                CSS 3
              </li>
              <li>
                <img src="JavaScript-icon.png" alt="JavaScript icon png" />
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
        <img src="project-1.png" alt="Genre movie website screenshot" />
      </div>

      <div className="projects container section">
        <div className="projects-wrapper container">
          <h3 className="project-h3">old portfolio</h3>
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
                <img src="HTML5-icon.png" alt="HTML5 icon png" />
                HTML 5
              </li>
              <li>
                <img src="CSS-icon.png" alt="CSS icon png" />
                CSS 3
              </li>
              <li>
                <img src="JavaScript-icon.png" alt="JavaScript icon png" />
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
        <img
          src="new-portfolio-screenshot.png"
          alt="new-portfolio-screenshot png"
        />
      </div>
    </div>
  );
};
export default Projects;
