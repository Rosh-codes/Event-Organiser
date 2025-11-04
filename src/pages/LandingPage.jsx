import  { useState, useMemo, useEffect } from "react";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import HideEvent from "../components/HideEvent"

import {
  eventCategories,
  filterEvents,
  getFeaturedEvents,
} from "../data/eventsData";
import { initScrollReveal } from "../utils/scrollReveal";


const LandingPage = ({ user, events = [], onEventRegister, onShowLoginForm }) => {
  const [searchFilters, setSearchFilters] = useState({
    searchTerm: "",
    category: "",
  });
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);


  useEffect(() => {
    initScrollReveal();
  }, []);

  const filteredEvents = useMemo(() => {
    // Start with either featured events or all events
    let source = showFeaturedOnly
      ? getFeaturedEvents(events)
      : events;
    
    // Apply search and category filters
    const filtered = filterEvents(
      events,
      searchFilters.searchTerm,
      searchFilters.category
    );

    // When using filters, show only exact matches
    if (searchFilters.searchTerm || searchFilters.category) {
      return filtered;
    }

    return filtered;
  }, [searchFilters, showFeaturedOnly]);


  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };


  const handleEventRegister = (event) => {
    onEventRegister && onEventRegister(event);
    
    alert(`Registered for: ${event.title},confirmation has been sent to your email`);
  };


  const featuredEvents = getFeaturedEvents(events);


  return (
    <div className="landing-page"  id="HomeScroll">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title" >ROD: Your Fresh Start to Campus Fun!</h1>
          <p className="hero-subtitle">
            {user?.isGuest
              ? `Welcome, ${user.name}! \n Ready to make uni life unforgettable? 🎉 `
              : user
              ? `Welcome back, ${user.name}! Ready for your next adventure?`
              : "Login To Explore your adventure"}
          </p>


          <SearchBar
            onSearch={handleSearch}
            categories={eventCategories}
            placeholder="Search type has to add here"
          />
        </div>
      </section>


{user ? (
        <>
          <section className="events-section" id="events">
            <div className="section-container">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <h2 className="section-title">
                    {searchFilters.searchTerm || searchFilters.category
                      ? "Search Results"
                      : showFeaturedOnly
                      ? "Featured Events"
                      : "All Events"}
                  </h2>
                  <span className="events-count">
                    {filteredEvents.length} event
                    {filteredEvents.length !== 1 ? "s" : ""} found
                  </span>
                </div>

                <div className="filter-controls">
                  <button
                    className={`filter-btn ${showFeaturedOnly ? "active" : ""}`}
                    onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  >
                    ⭐ Featured Only
                  </button>
                </div>
              </div>

              {filteredEvents.length === 0 ? (
                <div className="no-events">
                  <div className="no-events-icon">🔍</div>
                  <h3>No events found</h3>
                  <p>
                    {searchFilters.searchTerm || searchFilters.category
                      ? "Try adjusting your search criteria or browse all events."
                      : "Check back later for new events!"}
                  </p>
                  {(searchFilters.searchTerm || searchFilters.category) && (
                    <button
                      className="clear-search-btn"
                      onClick={() =>
                        setSearchFilters({ searchTerm: "", category: "" })
                      }
                    >
                      Clear Search
                    </button>
                  )}
                </div>
              ) : (
                <div className="events-grid">
                  {filteredEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onRegister={handleEventRegister}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {!showFeaturedOnly &&
            !searchFilters.searchTerm &&
            !searchFilters.category &&
            !filteredEvents.some(event => event.featured) &&
            featuredEvents.length > 0 && (
              <section className="featured-section">
                <div className="section-container">
                  <div className="section-header">
                    <h2 className="section-title">✨ Featured Premium Events</h2>
                    <p className="section-subtitle">Slogans for premium ones</p>
                  </div>
                  
                  <div className="featured-events-grid">
                    {featuredEvents.slice(0, 3).map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onRegister={handleEventRegister}
                      />
                    ))}
                  </div>
                </div>
              </section>
          )}
        </>
      ) : <HideEvent onShowLoginForm={onShowLoginForm} />}
    </div>
  );
};


export default LandingPage; 
