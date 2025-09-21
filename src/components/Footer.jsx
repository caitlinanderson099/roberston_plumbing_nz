import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src="/logo.svg" width="130px" height="100px"  alt="" />
      </div>
      <h4>© 2025 Robertson Heating & Plumbing NZ</h4>
      <div className="contact-icons">
  <a
    href="mailto:ben@robertsonplumbing.co.nz"
    className="icon"
        target='_blank'
    aria-label="Email Robertson Plumbing"
  >
    <FaEnvelope />
  </a>

  <a
    href="tel:+64273651682"
    className="icon"
    target='_blank'
    aria-label="Call Robertson Plumbing"
  >
    <FaPhone />
  </a>
</div>

    </footer>
  )
}

export default Footer
