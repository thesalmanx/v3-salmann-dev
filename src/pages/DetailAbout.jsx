import "../detailapp.css";
import "../index.css";
import { useEffect } from "react";
import "lord-icon-element";
import { Button } from "@headlessui/react";
import SkillsAbout from "../components/SkillsAbout";

export default function DetailAbout() {
  useEffect(() => {
    import("lord-icon-element").then(() => {});
  }, []);

  return (
    <div className="DetailAbout">
      <div className="ss">
        <img
          className="profilepicture"
          src="https://res.cloudinary.com/dzjh9jmup/image/upload/v1729779707/porfolio/gno78ggpxai3qqlzbnfz.png"
          alt="Profile"
        />
        <div className="getjob">
          <p className="hire">Salman is available for Work</p>
          <Button className="rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Contact
          </Button>
        </div>
      </div>

      <div className="se">
        <div className="titledetail">
          <lord-icon
            src="https://cdn.lordicon.com/vxnfmfuw.json"
            trigger="loop"
            stroke="bold"
            colors="primary:#66ee78,secondary:#cb5eee"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
          <h1 className="green">Muhammad Salman</h1>
        </div>

        <div className="herofullstack">
          <lord-icon
            src="https://cdn.lordicon.com/gvtjlyjf.json"
            trigger="loop"
            colors="primary:#30e849, secondary:#30e849"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <h2 className="green">Full-stack Developer</h2>
        </div>

        <div className="herolocation">
          <lord-icon
            src="https://cdn.lordicon.com/rbsqvtgo.json"
            trigger="loop"
            colors="primary:#42f598, secondary:#30e849"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <h2 className="green">Islamabad, Pakistan</h2>
        </div>

        <div className="herosocial">
          <h2 className="green">Expertise</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
            <li>RESTful APIs</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div>
          <h2 className="green">Bio</h2>
          <p>
            Salman is a highly versatile full-stack software engineer. He has
            helped many companies take an idea and turn it into a product that
            serves thousands to millions of users. He&apos; built the software
            that powers &apos; service centers for scheduling from scratch and
            worked at big tech companies, such as Atlassian, Adobe, Snapchat,
            Starbucks, and T-Mobile. Known for building fast and exceptionally
            well, Gianluca can work on either end of the stack. He&apos; also a
            skilled designer and can deliver pixel-perfect designs. Gianluca is
            a great communicator and can lead technical projects from start to
            finish.
          </p>
        </div>

        <SkillsAbout />
      </div>
    </div>
  );
}
