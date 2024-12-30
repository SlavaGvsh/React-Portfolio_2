import { skills } from "../../data/skills.js";

const Skills = () => {
  return (
    <div className="education">
      <h4 className="label">Skills</h4>
      <ul className="bars">
        {skills.map((item, index) => (
          <li className="bar" key={index}>
            <div className="info">
              <span>{item.skill}</span>
              <span>{item.level}</span>
            </div>
            <div className="line html"></div>
          </li>
        ))}
        {/* <li className="bar">
          <div className="info">
            <span>html</span>
            <span>95%</span>
          </div>
          <div className="line html"></div>
        </li>
        <li className="bar">
          <div className="info">
            <span>css</span>
            <span>85%</span>
          </div>
          <div className="line css"></div>
        </li>
        <li className="bar">
          <div className="info">
            <span>Javascript</span>
            <span>85%</span>
          </div>
          <div className="line javascript"></div>
        </li>
        <li className="bar">
          <div className="info">
            <span>Jquery</span>
            <span>80%</span>
          </div>
          <div className="line jquery"></div>
        </li>
        <li className="bar">
          <div className="info">
            <span>php</span>
            <span>75%</span>
          </div>
          <div className="line php"></div>
        </li> */}
      </ul>
    </div>
  );
};

export default Skills;
