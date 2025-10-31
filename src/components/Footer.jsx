import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ROD EVENT HUB</h3>
          <p>University can a fun place too !</p>
        </div>
        {/* // make them work */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#HomeScroll">Home</a>
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
          <h4>Support Us</h4>
          <ul>
            <li>
              <a href="https://www.paypal.com/lv/home" target="__blank">Paypal</a>
            </li>
            <li>
              <a href="https://stripe.com/en-lv" target="__blank">Stripe</a>
            </li>
            <li>
              <a href="https://buymeacoffee.com/" target="__blank">Buy Me A Cofee</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            {/* // addd icons for each social media */}
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" 
                alt="Facebook" 
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
            >
              <img 
                src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" 
                alt="Twitter" 
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" 
                alt="Instagram" 
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" 
                alt="LinkedIn" 
                style={{ width: "24px", height: "24px" }}
              />
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
