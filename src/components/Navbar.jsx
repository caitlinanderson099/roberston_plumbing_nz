import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo & Hamburger */}
      <div className="nav-header">
        <div className="logo">
          <Link to="/">
            <img
              src="/logo-example.jpg"
              width="120"
              height="100"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <RxCross2 size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/" onClick={() => setIsOpen(false)}>Our Services</Link>

        <Link to="/" onClick={() => setIsOpen(false)}>
          <button className="cta">Contact Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
