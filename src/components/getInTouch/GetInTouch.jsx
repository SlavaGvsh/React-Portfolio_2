import { FaPaperPlane } from "react-icons/fa";

import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="get-in-touch sub-section">
      <div className="container flex-center">
        <div className="contact-card">
          <div className="title">
            <h4>LET'S TALK</h4>
            <h3>ABOUT YOUR</h3>
            <h2>NEXT PROJECT</h2>
          </div>
          <a href="" className="get-in-touch-link inner-info-link">
            Contact me
            <FaPaperPlane />
          </a>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;