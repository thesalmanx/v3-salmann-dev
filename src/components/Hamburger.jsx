import { useState } from "react";
import { Link } from "react-router-dom";
import "../detailapp.css"; 

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`hamburger ${isActive ? "is-active" : ""}`} onClick={toggleHamburger}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>

      {/* Fullscreen Menu */}
      <div className={`fullscreen-menu ${isActive ? "is-open" : ""}`}>
        <nav className="fullscreen-nav">
          <Link to="/about" onClick={toggleHamburger}><span>01.</span> About</Link>
          <Link to="/work" onClick={toggleHamburger}><span>02.</span> Work</Link>
          <Link to="/contact" onClick={toggleHamburger}><span>03.</span> Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Hamburger;
