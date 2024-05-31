import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-warning py-3">
        <img className="navBar" src={require("./logo.png")} alt="" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" style={linkStyle}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/News" style={linkStyle}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" style={linkStyle}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Subscribe" style={linkStyle}>
                Subscribe
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" style={linkStyle}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
