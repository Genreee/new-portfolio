// import "../styles/mobile-nav.scss";
// import "../styles/style.scss";

// const MobileNav = () => {
//   return (
//     <>
//       <ul className="mobile-nav">
//         <li>
//           <button className="menu">
//             <img src="menu.png" alt="" />
//           </button>
//         </li>
//         <li>
//           <a className="anchornav" href="#about">
//             about
//           </a>
//         </li>
//         <li>
//           <a className="anchornav" href="#services">
//             services
//           </a>
//         </li>
//         <li>
//           <a className="anchornav" href="#skills">
//             skills
//           </a>
//         </li>
//         <li>
//           <a className="anchornav" href="#projects">
//             projects
//           </a>
//         </li>
//         <li>
//           <a className="anchornav" href="#contact">
//             contact
//           </a>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default MobileNav;
import { useState } from "react";
import "../styles/mobile-nav.scss";
import "../styles/style.scss";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu" onClick={toggleNav}>
        <img src="menu.png" alt="" />
      </button>
      <ul className={`mobile-nav ${isOpen ? "show" : ""}`}>
        <li>
          <a className="anchornav" href="#about">
            about
          </a>
        </li>
        <li>
          <a className="anchornav" href="#services">
            services
          </a>
        </li>
        <li>
          <a className="anchornav" href="#skills">
            skills
          </a>
        </li>
        <li>
          <a className="anchornav" href="#projects">
            projects
          </a>
        </li>
        <li>
          <a className="anchornav" href="#contact">
            contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;

