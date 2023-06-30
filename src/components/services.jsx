import "../styles/services.scss";
import "../styles/style.scss";
import Certificates from "./certificates";


const Services = () => {
  return (
    <div id="services" className="services-wrapper container">
      <div className="services container section">
        <h2 className="services-title titles">services</h2>

        <p>Frontend web Development</p>
        <p>Responsive Design</p>
        <p>Excellent UI/UX</p>
      </div>
      <Certificates />
    </div>
  );
};
export default Services;
