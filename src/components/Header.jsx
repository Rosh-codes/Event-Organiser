import { useState } from 'react';
import logo from "../assets/logo.png"

const Header = ({ user, onLoginClick, onSignupClick, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Event Organizer</h1>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#HomeScroll" className="nav-link" onClick={closeMenu}>
            Home
          </a>
          {user ? (
            <div className="user-section">
              <span className="welcome-text">Hey, {user.name}!</span>
              <button className="logout-btn" onClick={() => { onLogout(); closeMenu(); }}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button className="login-btn" onClick={() => { onLoginClick(); closeMenu(); }}>
                Login
              </button>
              <button className="signup-btn" onClick={() => { onSignupClick(); closeMenu(); }}>
                Sign Up
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
