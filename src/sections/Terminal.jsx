import "../index.css";

export default function Terminal() {
  return (
    <div className="hero-terminal">
        <div className="terminal-header">
        <div className="button close"></div>
        <div className="button minimize"></div>
        <div className="button maximize"></div>
      </div>
      <div id="loader">
        <div id="loaded"></div>
      </div>
      <div className="terminal">
        <p className="delay1">
          <span style={{ color: "red" }}>import</span>{" "}
          <span style={{ color: "#50FA7B" }}>Developer </span>
          <span style={{ color: "#FF79C6" }}>from</span>{" "}
          <span style={{ color: "#F8F8F2" }}> "./Developer";</span>
        </p>
        <p className="delay2">
          <span style={{ color: "#F8F8F2" }}>class</span>{" "}
          <span style={{ color: "#50FA7B" }}>Salman</span>{" "}
          <span style={{ color: "#F8F8F2" }}>extends</span>{" "}
          <span style={{ color: "#50FA7B" }}>Developer</span>{" "}
          <span style={{ color: "#F8F8F2" }}>&#123;</span>
        </p>
        <p className="delay3">
          <span style={{ color: "#F8F8F2" }}>&nbsp;&nbsp;constructor()</span>{" "}
          <span style={{ color: "#F8F8F2" }}>&#123;</span>
        </p>
        <p className="delay4">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;super();
          </span>
        </p>
        <p className="delay5">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;this.age ={" "}
          </span>
          <span style={{ color: "#FF79C6" }}>
            new Date().getFullYear() - 2004;
          </span>
        </p>
        <p className="delay6">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;this.favSkills ={" "}
          </span>
          <span style={{ color: "#F8F8F2" }}>&#123;</span>
        </p>
        <p className="delay7">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;teamOriented:
          </span>{" "}
          <span style={{ color: "#50FA7B" }}>10,</span>
        </p>
        <p className="delay8">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;determination:
          </span>{" "}
          <span style={{ color: "#50FA7B" }}>10,</span>
        </p>
        <p className="delay9">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;persistance:
          </span>{" "}
          <span style={{ color: "#50FA7B" }}>10</span>
        </p>
        <p className="delay10">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
          </span>
        </p>
        <p className="delay11">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;this.hasPassion ={" "}
          </span>
          <span style={{ color: "#FF79C6" }}>true;</span>
        </p>
        <p className="delay12">
          <span style={{ color: "#F8F8F2" }}>&nbsp;&nbsp;&#125;</span>
        </p>
        <p className="delay13">
          <span style={{ color: "#F8F8F2" }}>&nbsp;&nbsp;#givesUp = </span>
          <span style={{ color: "#50FA7B" }}>null;</span>
        </p>
        <p className="delay14">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;lovesPhotography ={" "}
          </span>
          <span style={{ color: "#FF79C6" }}>true;</span>
        </p>
        <p className="delay15">
          <span style={{ color: "#F8F8F2" }}>&nbsp;&nbsp;code(hrs) </span>
          <span style={{ color: "#FF79C6" }}>&#123;...&#125;</span>
        </p>
        <p className="delay16">
          <span style={{ color: "#F8F8F2" }}>
            &nbsp;&nbsp;drinkCoffee(cups){" "}
          </span>
          <span style={{ color: "#FF79C6" }}>&#123;...&#125;</span>
        </p>
        <p className="delay17">
          <span style={{ color: "#F8F8F2" }}>&#125;</span>
        </p>
        <p className="delay18">
          <span style={{ color: "#F8F8F2" }}>export default </span>
          <span style={{ color: "#50FA7B" }}>new </span>
          <span style={{ color: "#50FA7B" }}>Salman();</span>
        </p>
      </div>
    </div>
  );
}
