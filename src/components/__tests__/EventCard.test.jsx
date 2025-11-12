import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EventCard from '../EventCard';

describe('EventCard Component', () => {
  const mockEvent = {
    id: 1,
    title: 'Test Event',
    description: 'Test Description',
    date: '2025-12-01',
    time: '10:00 AM',
    location: 'Test Location',
    category: 'Workshop',
    image: 'https://via.placeholder.com/400x300',
    attendees: 10,
    maxAttendees: 50,
    featured: false
  };

  const mockOnRegister = vi.fn();

  it('should render without crashing', () => {
    const { container } = render(<EventCard event={mockEvent} onRegister={mockOnRegister} />);
    expect(container).toBeTruthy();
  });

  it('should display event title', () => {
    render(<EventCard event={mockEvent} onRegister={mockOnRegister} />);
    const title = screen.getByText('Test Event');
    expect(title).toBeInTheDocument();
  });

  it('should display event location', () => {
    render(<EventCard event={mockEvent} onRegister={mockOnRegister} />);
    const location = screen.getByText(/Test Location/i);
    expect(location).toBeInTheDocument();
  });

  it('should display event category', () => {
    render(<EventCard event={mockEvent} onRegister={mockOnRegister} />);
    const category = screen.getByText('Workshop');
    expect(category).toBeInTheDocument();
  });
});
