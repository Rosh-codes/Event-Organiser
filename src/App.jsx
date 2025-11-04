import React, { useState } from "react";
import { AuthProvider, useAuth } from "./components/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AddEventForm from "./components/AddEventForm";
import LandingPage from "./pages/LandingPage";
import "./styles/main.css";
import { sampleEvents } from "./data/eventsData";

function AppContent() {
  const { user, login, signup, logout, isLoading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [events, setEvents] = useState(sampleEvents || []);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleAddEventClick = () => {
    setShowAddEvent(true);
  };

  const handleCloseAddEvent = () => {
    setShowAddEvent(false);
  };

  const handleAddEvent = (newEvent) => {
    // ensure id uniqueness
    const nextId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
    const eventToAdd = { id: nextId, ...newEvent };
    setEvents((prev) => [eventToAdd, ...prev]);
    setShowAddEvent(false);
  };

  const handleCloseModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLogin = (userData) => {
    login(userData);
    handleCloseModals();
  };

  const handleSignup = (userData) => {
    signup(userData);
    handleCloseModals();
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleEventRegister = (event) => {
    // Handle event registration logic here
    console.log("User registered for event:", event.title);
    // You could add this to user's registered events, show notifications, etc.
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">🎉</div>
        <p>Loading EventHub...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header
        user={user}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onLogout={logout}
        onAddEventClick={handleAddEventClick}
      />

      <main className="main-content">
        <LandingPage 
          user={user} 
          events={events}
          onEventRegister={handleEventRegister}
          onShowLoginForm={handleLoginClick}
        />
      </main>

      <Footer />

      {showLogin && (
        <LoginForm
          onLogin={handleLogin}
          onClose={handleCloseModals}
          onSwitchToSignup={handleSwitchToSignup}
        />
      )}

      {showSignup && (
        <SignupForm
          onSignup={handleSignup}
          onClose={handleCloseModals}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
      {showAddEvent && (
        <AddEventForm
          onAddEvent={handleAddEvent}
          onClose={handleCloseAddEvent}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
