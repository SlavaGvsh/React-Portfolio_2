import React from "react";
import ContactSectionForm from "./ContactSectionForm";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";
const ContactSectionRight = () => {
  return (
    <div className="contact-right">
      <motion.p
        custom={0}
        variants={slideInVariants("top", 0.5, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        I'm always open to discussing product{" "}
        <span>design work or partnerships.</span>
      </motion.p>
      <ContactSectionForm />
    </div>
  );
};

export default ContactSectionRight;
