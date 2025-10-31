import logo from "../assets/logo.png"
const Header = ({ user, onLoginClick, onSignupClick, onLogout }) => {
  return (
    <header className="header" >
      <div className="header-container">
        <div className="logo" >
        <img src={logo} alt="" />  
        <h1> Event Organizer</h1>
  
        </div>
        <nav className="nav">
          <a href="#HomeScroll" className="nav-link">
            Home
          </a>
          {user ? (
            <div className="user-section">
              <span className="welcome-text">Hey, {user.name}!</span>
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
