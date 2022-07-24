import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Moths and Butterflies UK</h1>
      <div className={expanded ? "nav-links expanded" : "nav-links"}>
        <ul>
          <Link to="/" onClick={toggleMenu}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <li>About</li>
          </Link>
          <Link to="/today" onClick={toggleMenu}>
            <li>Today's Findings</li>
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <li>Login</li>
          </Link>
        </ul>
      </div>
      <div className="burger-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
