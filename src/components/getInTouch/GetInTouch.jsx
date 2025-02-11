import { FaPaperPlane } from "react-icons/fa";

import "./GetInTouch.css";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const GetInTouch = () => {
  return (
    <motion.div
      className="get-in-touch sub-section"
      custom={0}
      variants={slideInVariants("right", 0.5, 100, true)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container flex-center">
        <div className="contact-card">
          <div className="title">
            <h4>LET'S TALK</h4>
            <h3>ABOUT YOUR</h3>
            <h2>NEXT PROJECT</h2>
          </div>
          <a href="" className="get-in-touch-link inner-info-link">
            Contact me
            <FaPaperPlane />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default GetInTouch;
