import "../styles/backtotop.scss";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button className="back-to-top-button" onClick={handleClick}>
          <img src="arrow-up-icon.png" alt="arrow up icon" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;

