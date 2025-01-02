// import { Link } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

import "./Nav.css";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
  const items = [
    "home",
    "about",
    "skills",
    "services",
    "portfolio",
    "clients",
    "contact",
  ];
  return (
    <nav className={!isMenuOpen ? "nav " : "nav active"}>
      <div className={!isMenuOpen ? "nav-menu" : "nav-menu active"}>
        {items.map((item, index) => (
          <ScrollLink
            to={item}
            key={index}
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            className="nav-link"
            onClick={handleMenuClick}
            
          >
            {item}
          </ScrollLink>
        ))}
      </div>
      {/* <ul className="nav-menu">
        <li className="nav-item">
          <a href="#home" className="nav-link active">
            home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Nav;
