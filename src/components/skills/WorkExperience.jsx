import { workExperience } from "../../data/workExperience.js";

const WorkExperience = () => {
  return (
    <>
      {workExperience.map((item, index) => (
        <div className="experience-card" key={index}>
          <div className="upper">
            <h3>{item.title}</h3>
            <h5>{item.employmentType}</h5>
            <span>{item.year}</span>
          </div>
          <div className="hr"></div>
          <h4 className="label">{item.compani}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default WorkExperience;
