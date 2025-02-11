import Nav from "../nav/Nav";
import { FaXing } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

{
  /* <FaXing /> */
}
{
  /* <FaAlignRight /> */
}

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">
            Slava
          </a>
          <RemoveScroll enabled={isMenuOpen}>
            <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
          </RemoveScroll>
          <div className="nav-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaXing /> : <FaAlignRight />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
