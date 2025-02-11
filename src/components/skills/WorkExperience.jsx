import { workExperience } from "../../data/workExperience.js";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const WorkExperience = () => {
  return (
    <>
      {workExperience.map((item, index) => (
        <motion.div
          className="experience-card"
          key={index}
          custom={3}
          variants={slideInVariants("left", 0.5, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="upper">
            <h3>{item.title}</h3>
            <h5>{item.employmentType}</h5>
            <span>{item.year}</span>
          </div>
          <div className="hr"></div>
          <h4 className="label">{item.compani}</h4>
          <p>{item.description}</p>
        </motion.div>
      ))}
    </>
  );
};

export default WorkExperience;
