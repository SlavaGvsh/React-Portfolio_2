import { FaPaperPlane } from "react-icons/fa6";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const ContactSectionForm = () => {
  return (
    <from className="form contact-form">
      <motion.div
        className="first-row"
        custom={0}
        variants={slideInVariants("right", 0.5, 100, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <input placeholder="Name" type="text" />
      </motion.div>
      <motion.div
        className="second-row"
        custom={1}
        variants={slideInVariants("right", 0.5, 100, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
      </motion.div>
      <motion.div
        className="third-row"
        custom={2}
        variants={slideInVariants("right", 0.5, 100, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <textarea placeholder="Message"></textarea>
      </motion.div>
      <motion.button
        className="contant-btn inner-info-link"
        type="submit"
        custom={3}
        variants={slideInVariants("right", 0.5, 100, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Send Message
        <FaPaperPlane />
      </motion.button>
    </from>
  );
};


export default ContactSectionForm;
