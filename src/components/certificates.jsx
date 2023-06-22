import "../styles/certificates.scss";
import "../styles/style.scss";
import ImageSlider from "./slider";

const Certificates = () => {
  const images = [
    "HTML.jpg",
    "CSS.jpg",
    "JavaScript.jpg",
    "CodingFundamentals.jpg",
    "CodingFundamentals2.jpg",
  ];

  return (
    <div className="certificates container section">
      <h2 className="certificates-title">certificates</h2>

      <div className="certificates-box">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};
export default Certificates;
