import React, { useState } from "react";
import "../styles/certificates.scss";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={`slider ${isZoomed ? "zoomed" : ""}`}>
      <button onClick={prevSlide}>Back</button>
      <img
        src={images[currentIndex]}
        alt="Slider"
        onClick={toggleZoom}
        className={isZoomed ? "zoomed" : ""}
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
