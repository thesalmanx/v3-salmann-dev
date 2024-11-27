import { Link, useLocation } from "react-router-dom";
import logo from "/assets/salman-logo.svg";
import { MobileNav } from "./MobileNav";

export default function Header() {
  const location = useLocation();
  const activeStyles = {
    fontWeight: "bold",
    color: "#64FFDA",
  };

  return (
    <div className="head">
      <Link className="site-logo" to="/">
        <img className="vibrating-logo" src={logo} alt="Site Logo" />
      </Link>
      <div className="main-header">
        <header className="header">
          <nav>
            <Link
              to="/about"
              style={location.pathname === "/about" ? activeStyles : null}
            >
              <span style={{ color: "#64FFDA" }}>01. </span>About
            </Link>
            <Link
              to="/work"
              style={location.pathname === "/work" ? activeStyles : null}
            >
              <span style={{ color: "#64FFDA" }}>02. </span>Work
            </Link>
            <Link
              to="/contact"
              style={location.pathname === "/contact" ? activeStyles : null}
            >
              <span style={{ color: "#64FFDA" }}>03. </span>Contact
            </Link>
          </nav>
        </header>
      </div>
      <a
        className="about"
        href="https://www.linkedin.com/in/muhammad-salman-2288b11b8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ color: "#64FFDA" }}>LinkedIn</span>
      </a>
      <MobileNav />
    </div>
  );
}
