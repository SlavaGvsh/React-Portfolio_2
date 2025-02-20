import { motion } from "motion/react";
import { subtitleVariants, titleVariants } from "../../utils/animation";
import "./sectionTitle.css";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <>
      <motion.h2
        className="inner-title"
        custom={0}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {title}
      </motion.h2>
      <motion.h3
       className="inner-second-title"
       custom={1}
        variants={subtitleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
       >{subTitle}</motion.h3>
    </>
  );
};

export default SectionTitle;
