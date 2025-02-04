import { Link } from "react-scroll";

const FooterLinkGroup = ({ title, footerLinks, isSocial }) => {
  //   console.log("footerLinks", footerLinks);

  return (
    <div className={isSocial ? "follow-group" : "info-group"}>
      <h3>{title}</h3>
      <ul>
        {footerLinks.map((footerLink) => (
          <li key={footerLink.id}>
            {isSocial ? (
              <a
                href={footerLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <footerLink.icon />
              </a>
            ) : (
              <Link to={footerLink.href} smooth={true} duration={500}>
                {footerLink.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
