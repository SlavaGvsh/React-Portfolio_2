import { FaFacebookF, FaInstagram, FaGithub, FaArrowDown  } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
// import { IoArrowDownCircleOutline } from "react-icons/io5";

import { mainImg } from "../../assets/images/index.js";
import "./Home.css"

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a href="">
            <FaFacebookF />

            {/* <i className="fa-brands fa-facebook-f"></i> */}
          </a>
          <a href="">
            <FaInstagram />
            {/* <i className="fa-brands fa-instagram"></i> */}
          </a>
          <a href="">
            <FaGithub />

            {/* <i className="fa-brands fa-github"></i> */}
          </a>
        </div>
        <div className="home-info">
          <h1>Hi, I am Ilay</h1>
          <h3>Front-end Developer</h3>
          <p>
            I create stunning websites for your business, Highly experienced in
            web design and development
          </p>
          <a href="" className="home-info-link inner-info-link">
            Contact me
            <FaCircleArrowRight />
            {/* <i className="fa-solid fa-circle-arrow-right"></i> */}
          </a>
        </div>
        <div className="home-img">
          <img src={mainImg} alt="man" />
        </div>
      </div>
      <a href="#about" className="scroll-down">
        Scroll down
        <FaArrowDown  />
        {/* <i className="fa-solid fa-arrow-down"></i> */}
      </a>
    </section>
  );
};

export default Home;
