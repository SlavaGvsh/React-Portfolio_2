import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaArrowDown,
  FaLinkedin,
} from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { mainImg } from "../../assets/images/index.js";
import "./Home.css";
import { motion } from "motion/react";
import {
  iconsVariants,
  motionVariants,
  imgVariants,
  slideInVariants,
} from "../../utils/animation.js";

const icons = [
  { id: 1, icon: <FaFacebookF />, link: "https://www.facebook.com/" },
  { id: 2, icon: <FaInstagram />, link: "https://www.instagram.com/" },
  { id: 3, icon: <FaGithub />, link: "https://github.com/SlavaGvsh" },
  {
    id: 4,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/viacheslav-havrysh-06403a2ba/",
  },
];

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((icon, index) => (
            <motion.a
              href={icon.link}
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={slideInVariants("top", 0.5, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            custom={0}
            variants={slideInVariants("left", 0.5, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            Hi, I am Slava
          </motion.h1>
          <motion.h3
            custom={1}
            variants={slideInVariants("left", 0.5, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            custom={2}
            variants={slideInVariants("left", 0.5, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            I create stunning websites for your business, Highly experienced in
            web design and development
          </motion.p>
          <motion.a
            href=""
            className="home-info-link inner-info-link"
            custom={3}
            variants={slideInVariants("left", 0.5, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            Contact me
            <FaCircleArrowRight />
            {/* <i className="fa-solid fa-circle-arrow-right"></i> */}
          </motion.a>
        </div>
        <motion.div
          className="home-img"
          variants={slideInVariants("right", 0.5, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={mainImg} alt="man" />
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="scroll-down"
        variants={slideInVariants("right", 0.7, 150, true)}
        initial="hidden"
        animate={["visible", "pulse"]} 
        custom={1}
      >
        Scroll down
        <FaArrowDown />
        {/* <i className="fa-solid fa-arrow-down"></i> */}
      </motion.a>
    </section>
  );
};

export default Home;
