import "../styles/about.scss";
import "../styles/style.scss";

const About = () => {
  return (
    <div id="about" className="about-wrapper container section">
      <div className="about section">
        <h2 className="about-title titles">about</h2>

        <p>
          I am a passionate Frontend Web Developer from Negros <br /> Occidental
          Philippines, a 22 years old specialized in <br /> building beautiful
          and professional looking web applications.
        </p>

        <p className="visit-link">you can visit my repositories@</p>
        <a href="https://github.com/Genreee?tab=repositories">
          https://github.com/Genreee?tab=repositories
        </a>
      </div>
      <img src="about.jpg" alt="Genre's picture " />
    </div>
  );
};
export default About;
