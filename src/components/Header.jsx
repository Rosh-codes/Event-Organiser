import React, { useState } from "react";

const Header = ({ user, onLoginClick, onSignupClick, onLogout }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>ROD Event Organizer</h1>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          {user ? (
            <div className="user-section">
              <span className="welcome-text">Heyy, {user.name}!</span>
              <button className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button className="login-btn" onClick={onLoginClick}>
                Login
              </button>
              <button className="signup-btn" onClick={onSignupClick}>
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
