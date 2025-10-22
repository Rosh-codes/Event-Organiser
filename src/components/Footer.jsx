import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ROD EVENT HUB</h3>
          <p>add some short slogan</p>
        </div>
        {/* // make them work */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* // make them work */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#music">Music</a>
            </li>
            <li>
              <a href="#technology">Technology</a>
            </li>
            <li>
              <a href="#sports">Sports</a>
            </li>
            <li>
              <a href="#business">Business</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            {/* // addd icons for each social media */}
            <a href="#facebook" aria-label="Facebook">
              fb
            </a>
            <a href="#twitter" aria-label="Twitter">
              twi
            </a>
            <a href="#instagram" aria-label="Instagram">
              insta
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              liken
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2025 ROD Event Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
