import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-menu">
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
      </ul>
    </nav>
  );
};

export default Nav;
