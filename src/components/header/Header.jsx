import Nav from "../nav/Nav";
import { FaXing } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

{
  /* <FaXing /> */
}
{
  /* <FaAlignRight /> */
}

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.querySelector("body").style.overflow = "hidden";
  //   } else {
  //     document.querySelector("body").style.overflow = "auto";
  //   }

    
  //   return () => {
  //     document.querySelector("body").style.overflow = "auto";
  //   };
  // }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">
            Slava
          </a>
          <Nav isMenuOpen={isMenuOpen} />
          <div className="nav-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaXing /> : <FaAlignRight />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
