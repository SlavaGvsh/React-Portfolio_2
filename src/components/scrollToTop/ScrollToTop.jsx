// import React from 'react'
import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", headleScroll);
    return () => {
      window.removeEventListener("scroll", headleScroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`btn scrollToTop flex-center ${isVisible ? "active" : ""}`}
      onClick={scrollTop}
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTop;
