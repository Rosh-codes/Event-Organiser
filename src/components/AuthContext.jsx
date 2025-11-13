import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser, signupUser, logoutUser } from "../api/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("eventHub_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("eventHub_user");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("eventHub_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("eventHub_user");
    }
  }, [user]);

  /**
   * Login with backend API
   */
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await loginUser(email, password);
      
      if (response.user) {
        setUser(response.user);
      }
      
      return response;
    } catch (err) {
      const errorMessage = err.message || "Login failed";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Signup with backend API
   */
  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await signupUser(name, email, password);
      
      if (response.user) {
        setUser(response.user);
      }
      
      return response;
    } catch (err) {
      const errorMessage = err.message || "Signup failed";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout
   */
  const logout = () => {
    logoutUser();
    setUser(null);
    setError(null);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const isGuest = () => {
    return user?.isGuest || false;
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated,
    isGuest,
    isLoading,
    error,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
