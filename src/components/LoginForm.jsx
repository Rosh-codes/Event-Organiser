import  { useState } from "react";
import { useAuth } from "./AuthContext";

const LoginForm = ({ onLogin, onClose, onSwitchToSignup }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }else if (!formData.email.endsWith("@edu.rtu.lv")) {
      newErrors.email = "Please use your RTU email (@edu.rtu.lv)";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters :)";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Call backend login
      const response = await login(formData.email, formData.password);
      
      // Call parent callback with user data
      if (response.user) {
        onLogin(response.user);
      }
      onClose();
    } catch (error) {
      setErrors({ submit: error.message || "Login failed. Please try again." });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleGuestLogin = () => {
  //   onLogin({
  //     name: "Guest User",              //I removed guest login
  //     email: "guest@example.com",
  //     isGuest: true,
  //   });
  // };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Welcome Back to Login</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {errors.submit && (
            <div style={{ marginBottom: "1rem", padding: "0.75rem", backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "4px" }}>
              {errors.submit}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="login-btn-submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
{/* 
        <div className="divider">
          <span>OR</span>
        </div> */}

        {/* <button className="guest-btn" onClick={handleGuestLogin}>
          Continue as Guest
        </button> */}

        <div className="switch-form">
          <p>
            Don't have an account?
            <button
              type="button"
              className="link-btn"
              onClick={onSwitchToSignup}
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
