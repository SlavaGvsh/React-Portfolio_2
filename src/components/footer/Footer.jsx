import { followLinks, infoLinks } from "../../data/footerData.js";
import FooterLinkGroup from "./FooterLinkGroup.jsx";
import "./Footer.css";

const Footer = () => {
  //   console.log(infoLinks);
  //   console.log(followLinks);
  //   console.log(FooterLinkGroup);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Slava</h2>
          <p>Frontend Developer</p>
          <a href="#about">About me</a>
        </div>
        <div className="hr"></div>

        <FooterLinkGroup
          title="More"
          footerLinks={followLinks}
          isSocial={true}
        />
        <div className="hr"></div>
        <FooterLinkGroup
          title="Follow"
          footerLinks={infoLinks}
          isSocial={false}
        />
      </div>
      <p className="footer-copyright">
        © <span className="year">{currentYear}</span> by Coding Snow. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
