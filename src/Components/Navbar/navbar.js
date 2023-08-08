import "./navbar.css";
import logo from "./RunwayLogo.png";

function navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="runway-home" href="/">
          <img src={logo} className="runway-logo" />
          <a className="runway-name">Runway</a>
        </a>
        <ul className="navlinks">
          <a className="navlink" href="/">
            Home
          </a>
          <a className="navlink" href="/">
            Projects
          </a>
          <a className="navlink" href="/">
            Blog
          </a>
          <a className="navlink-right" href="/pricing">
            Pricing
          </a>
        </ul>
        <button className="logintext" href="/">
          Log in
        </button>
      </div>
    </nav>
  );
}

export default navbar;
