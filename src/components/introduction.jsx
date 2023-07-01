import "../styles/introduction.scss";
import "../styles/style.scss";

const Introduction = () => {
  function confirmDownload() {
    alert(
      "Hello, if you would like to view my resume and/or CV\nplease contact me to get the password."
    );

    var password = prompt("Please enter the password:");
    if (password === "dream1230") {
      var choice = prompt("resume or cv");

      if (choice === "resume") {
        alert("Access granted! you can now view resume.");
        window.location.href = "Genreglennresume.pdf";
      } else if (choice === "cv") {
        alert("Access granted! you can now view CV.");
        window.location.href = "Genreglenncv.pdf";
      } else {
        alert("Invalid choice. Access denied.");
      }
    } else {
      alert("Incorrect password. Access denied.");
    }
  }

  return (
    <div className="introduction container">
      <img src="./profile.jpg" alt="" />
      <p>
        <span className="genre">hi! im genre</span> <br />
        <span className="frontend-developer">frontend developer</span>
      </p>

      <div className="resume_cv-wrapper">
        <button onClick={confirmDownload} className="button-resume">
          resume/CV
        </button>
      </div>

    </div>
  );
};

export default Introduction;
