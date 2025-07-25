// src/components/Navbar.jsx
import React from 'react'; // ✅ Required for JSX
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        {/* Left: Afridata title */}
        <div className="nav-left">
          <div className="nav-title">AFRIDATA</div>
        </div>

        {/* Center: Internal nav links */}
        <div className="nav-center">
          <div className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/features" className="nav-link">Features</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>
        </div>

        {/* Right: External link */}
        <div className="nav-right">
          <a
            href="https://afridata-commons-1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external-link"
          >
            Commons App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
