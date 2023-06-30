import "../styles/contact.scss";
import "../styles/style.scss";
import Contacticons from "./contact-icons";

const Contact = () => {
  return (
    <div id="contact" className="contact-wrapper container section">
      <div className="contact container section">
        <h2 className="contact-title titles">contact</h2>

        <p>
          Thank you for considering me! I'm excited to work together and exceed
          your expectations. From simple websites to complex web applications,
          I'll bring your vision to life. Let's create something special for
          your business. Looking forward to hearing from you!
        </p>
      </div>
      <Contacticons />
    </div>
  );
};
export default Contact;
