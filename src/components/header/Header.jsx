import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">
            Slava
          </a>
          <Nav/>
          <div className="nav-menu-btn"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
