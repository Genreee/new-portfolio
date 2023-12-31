import React, { useState } from "react";
import "../styles/style.scss";

function ImageToggle() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleImage = () => {
    setIsLightMode(!isLightMode);
    updateTheme(isLightMode);
  };

  const updateTheme = (isLightMode) => {
    const body = document.body;
    const anchors = document.getElementsByClassName("anchor");
    const anchornav = document.getElementsByClassName("anchornav");

    const elements = document.getElementsByClassName("element");
    const borders = document.querySelectorAll(
      ".about-wrapper, .services-wrapper, .skills-wrapper, .projects-wrapper, .contact-wrapper"
    );

    if (isLightMode) {
      body.style.backgroundColor = "white";
      body.style.color = "black";

      for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("mouseenter", function () {
          this.style.color = "wheat";
        });

        anchors[i].addEventListener("mouseleave", function () {
          this.style.color = "black";
        });
      }

      for (let i = 0; i < anchors.length; i++) {
        anchors[i].style.color = "black";
        anchornav[i].style.color = "black";
      }
      for (let i = 0; i < borders.length; i++) {
        borders[i].style.borderColor = "black";
      }
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      for (let i = 0; i < anchors.length; i++) {
        anchors[i].style.color = "white";
        anchornav[i].style.color = "white";
      }
      for (let i = 0; i < borders.length; i++) {
        borders[i].style.borderColor = "white";
      }

      for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("mouseenter", function () {
          this.style.color = "wheat";
        });

        anchors[i].addEventListener("mouseleave", function () {
          this.style.color = "white";
        });
      }
    }
  };

  return (
    <button onClick={toggleImage}>
      <img src={isLightMode ? "lightmode.png" : "darkmode.png"} alt="" />
    </button>
  );
}

export default ImageToggle;
