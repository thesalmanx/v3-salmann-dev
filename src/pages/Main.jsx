import Contact from "../sections/Contact.jsx";
import WorkExperience from "../sections/Experience.jsx";
import Terminal from "../sections/Terminal.jsx";
import Hero from "../sections/Hero.jsx";
import SideBar from "../components/SideBar.jsx";

export default function Main() {
  return (
    <div className="main-frame">
      <SideBar />
      <div className="frame">
        <div className="content">
          <div className="hero-section mobile-b">
            <Hero />
            <Terminal />
          </div>
          <div className="hero-section mobile-a">
            <Terminal />
            <Hero />
          </div>
          <WorkExperience />
          <Contact />
        </div>
      </div>
    </div>
  );
}
