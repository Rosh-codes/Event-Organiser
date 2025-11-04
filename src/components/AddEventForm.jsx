import { useState } from "react";
import { eventCategories } from "../data/eventsData";

const AddEventForm = ({ onAddEvent, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
    time: "",
    location: "",
    category: "technology",
    attendees: 10,
    featured: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.image) newErrors.image = "Image URL is required";
    const attendeesNum = Number(formData.attendees) || 0;
    if (attendeesNum < 0) newErrors.attendees = "Attendees must be a positive number";
    if (attendeesNum > 30) newErrors.attendees = "Max 30 attendees allowed";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    // Normalize fields
    const toAdd = {
      title: formData.title,
      description: formData.description,
      image: formData.image,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      category: formData.category,
      attendees: Math.min(30, Number(formData.attendees) || 0),
      featured: Boolean(formData.featured),
    };

    onAddEvent && onAddEvent(toAdd);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Add New Event</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form className="add-event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-input" name="title" value={formData.title} onChange={handleChange} />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-textarea" name="description" value={formData.description} onChange={handleChange} />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Image URL</label>
              <input className="form-input" name="image" value={formData.image} onChange={handleChange} />
              {errors.image && <span className="error-message">{errors.image}</span>}
            </div>

            <div className="form-group">
              <label>Category</label>
              <select className="form-input" name="category" value={formData.category} onChange={handleChange}>
                {eventCategories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input className="form-input" type="date" name="date" value={formData.date} onChange={handleChange} />
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label>Time</label>
              <input className="form-input" type="time" name="time" value={formData.time} onChange={handleChange} />
              {errors.time && <span className="error-message">{errors.time}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input className="form-input" name="location" value={formData.location} onChange={handleChange} />
            {errors.location && <span className="error-message">{errors.location}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Attendees</label>
              <input className="form-input" type="number" name="attendees" value={formData.attendees} onChange={handleChange} min="0" />
              {errors.attendees && <span className="error-message">{errors.attendees}</span>}
            </div>

            <div className="form-group">
              <label className="form-checkbox-item">
                <input className="form-checkbox" type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
                <span>Featured</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="signup-btn">Add Event</button>
            <button type="button" className="link-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;
