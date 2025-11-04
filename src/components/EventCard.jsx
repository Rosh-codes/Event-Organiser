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
    if (!timeString) return "";

    // Handle AM/PM inputs like "2:30 PM"
    const ampm = /(am|pm)$/i;
    if (ampm.test(timeString.trim())) {
      const parts = timeString.trim().split(/[:\s]+/); // e.g. ["2","30","PM"] or ["2","PM"]
      let hour = parseInt(parts[0], 10);
      const minute = parts[1] && parts[1].toLowerCase() !== 'am' && parts[1].toLowerCase() !== 'pm' ? parts[1] : '00';
      const period = parts[parts.length - 1].toUpperCase();
      if (period === 'PM' && hour < 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
      const hh = String(hour).padStart(2, '0');
      const mm = String(minute).padStart(2, '0');
      return `${hh}:${mm}`;
    }

    // Handle HH:MM already
    const mmMatch = timeString.match(/^(\d{1,2}):(\d{2})$/);
    if (mmMatch) {
      const hh = String(parseInt(mmMatch[1], 10)).padStart(2, '0');
      const mm = mmMatch[2];
      return `${hh}:${mm}`;
    }

    // Fallback: try Date parsing then format in 24-hour
    try {
      const d = new Date(`2000-01-01T${timeString}`);
      if (!isNaN(d)) {
        const hh = String(d.getHours()).padStart(2, '0');
        const mm = String(d.getMinutes()).padStart(2, '0');
        return `${hh}:${mm}`;
      }
    } catch (e) {
      // ignore
    }

    return timeString;
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
            <span className="detail-icon">Date: </span>
            <span className="detail-text">{formatDate(event.date)}</span>
          </div>

          <div className="event-detail">
            <span className="detail-icon">Time:</span>
            <span className="detail-text">{formatTime(event.time)}</span>
          </div>

          <div className="event-detail">
            <span className="detail-icon">Location:</span>
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
