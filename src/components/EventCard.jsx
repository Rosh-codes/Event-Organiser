import React, { useState } from "react";

const EventCard = ({ event, onRegister }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (isRegistered) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsRegistered(true);
      setIsLoading(false);
      onRegister && onRegister(event);
    }, 800);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <div className="event-category">{event.category}</div>
        {event.featured && <div className="featured-badge">Featured</div>}
      </div>

      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>

        <div className="event-details">
          <div className="event-detail">
            <span className="detail-icon">cal</span>
            <span className="detail-text">{formatDate(event.date)}</span>
          </div>

          <div className="event-detail">
            <span className="detail-icon">clock</span>
            <span className="detail-text">{formatTime(event.time)}</span>
          </div>

          <div className="event-detail">
            <span className="detail-icon">landMark</span>
            <span className="detail-text">{event.location}</span>
          </div>

        </div>

        <div className="event-footer">
          <div className="event-attendees">
            <span className="attendees-icon">users</span>
            <span>{event.attendees} attending</span>
          </div>

          <button
            className={`register-btn ${isRegistered ? "registered" : ""}`}
            onClick={handleRegister}
            disabled={isLoading || isRegistered}
          >
            {isLoading ? (
              <span className="loading-spinner">⏳</span>
            ) : isRegistered ? (
              <>
                <span className="check-icon">✓</span>
                Registered
              </>
            ) : (
              "Register Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
