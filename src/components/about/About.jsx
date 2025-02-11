import { aboutImg } from "../../assets/images/index.js";
import { FaCloudDownloadAlt } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

import "./About.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subTitle="About me" />
        <div className="about-wrapper">
          <motion.div
            className="about-img"
            custom={0}
            variants={slideInVariants("left", 0.5, 100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="about" />
          </motion.div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                custom={0}
                variants={slideInVariants("right", 0.5, 150, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                I'm Slava
              </motion.h3>
              <motion.h4
                custom={1}
                variants={slideInVariants("right", 0.5, 150, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                A Lead <span>Front-End Developer</span> based in{" "}
                <span>California</span>
              </motion.h4>
              <motion.p
                custom={2}
                variants={slideInVariants("right", 0.5, 150, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </motion.p>
            </div>
            <motion.ul
              className="professional-list"
              custom={3}
              variants={slideInVariants("right", 0.5, 150, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <li className="list-item">
                <span className="number">5+</span>
                <span className="text">Years of experience</span>
              </li>
              <li className="list-item">
                <span className="number">3K+</span>
                <span className="text">Happy Customers</span>
              </li>
              <li className="list-item">
                <span className="number">5+</span>
                <span className="text">Success Projects</span>
              </li>
            </motion.ul>
            <motion.a
              href=""
              className="inner-info-link"
              custom={4}
              variants={slideInVariants("right", 0.5, 150, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Download
              <FaCloudDownloadAlt />
              {/* <i className="fa-solid fa-download"></i> */}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
