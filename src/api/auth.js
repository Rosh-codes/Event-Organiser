/**
 * Authentication API Module
 * Communicates with backend on http://localhost:8081
 */

const SERVER_URL = "http://localhost:8081";

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{token: string, user: object}>}
 */
export const loginUser = async (email, password) => {
  try {
    console.log("🔄 Attempting login with:", email);
    
    const response = await fetch(`${SERVER_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("📨 Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error("❌ Backend error:", errorData);
      throw new Error(errorData || "Login failed");
    }

    const data = await response.json();
    console.log("✅ Login successful:", data);
    
    // Store token
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    // Create user object from email since backend doesn't send it
    const user = {
      id: email,
      name: email.split("@")[0],
      email: email,
    };

    return { token: data.token, user };
  } catch (error) {
    console.error("❌ Login error:", error.message);
    
    // Check if backend is not responding
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("Cannot connect to backend at http://localhost:8081. Make sure your backend server is running.");
    }
    
    throw error;
  }
};

/**
 * Register new user
 * @param {string} name - User full name
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{token: string, user: object}>}
 */
export const signupUser = async (name, email, password) => {
  try {
    console.log("🔄 Attempting signup with:", email);
    
    const response = await fetch(`${SERVER_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    console.log("📨 Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error("❌ Backend error:", errorData);
      throw new Error(errorData || "Signup failed");
    }

    const data = await response.text();
    console.log("✅ Signup successful:", data);

    // Backend returns just a message string, we need to return an object
    // Auto-login the user after signup
    const loginResponse = await loginUser(email, password);
    
    return loginResponse;
  } catch (error) {
    console.error("❌ Signup error:", error.message);
    
    // Check if backend is not responding
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("Cannot connect to backend at http://localhost:8081. Make sure your backend server is running.");
    }
    
    throw error;
  }
};

/**
 * Logout user
 */
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("eventHub_user");
};

/**
 * Get stored token
 */
export const getToken = () => {
  return localStorage.getItem("token");
};

/**
 * Get authorization header with token
 */
export const getAuthHeader = () => {
  const token = getToken();
  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  return { "Content-Type": "application/json" };
};