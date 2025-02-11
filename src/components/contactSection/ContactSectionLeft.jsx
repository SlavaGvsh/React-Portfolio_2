import React from "react";
import { contactData } from "../../data/contactData";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const ContactSectionLeft = () => {
  return (
    <div className="contact-left">
      <motion.h2
        custom={0}
        variants={slideInVariants("top", 0.5, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Let's discuss your project
      </motion.h2>
      <ul className="contact-list">
        {contactData.map((item, index) => (
          <motion.li
            key={item.id}
            custom={index}
            variants={slideInVariants("left", 0.5, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3>
              <item.icon />
              {item.title}
            </h3>
            <span>
              <a href={item.link}>{item.value}</a>
            </span>
          </motion.li>
        ))}
        {/* <li>
          <h3>
            <i className="fa-solid fa-phone"></i> Phone
          </h3>
          <span>
            <a href="tel:001237779999">+00 123-777-9999</a>
          </span>
        </li> */}
      </ul>
    </div>
  );
};

export default ContactSectionLeft;
