import "../styles/about.scss";
import "../styles/style.scss";

const About = () => {
  return (
    <div className="about container section">
      <div className="about-wrapper">
        <h2 className="about-title">about</h2>

        <p>
          I am a passionate Frontend Web Developer from Negros <br /> Occidental
          Philippines, a 22 years old specialized in <br /> building beautiful
          and professional looking website
        </p>
      </div>
      <img src="about.jpg" alt="about picture" />
    </div>
  );
};
export default About;
