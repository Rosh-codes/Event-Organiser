import { describe, it, expect } from 'vitest';
import { 
  eventCategories, 
  filterEvents, 
  getFeaturedEvents 
} from '../eventsData';

describe('Events Data Utils', () => {
  const mockEvents = [
    {
      id: 1,
      title: 'Music Concert',
      category: 'Music',
      featured: true,
      description: 'A great concert',
      date: '2025-12-01',
      time: '10:00',
      location: 'Main Hall'
    },
    {
      id: 2,
      title: 'Tech Workshop',
      category: 'Workshop',
      featured: false,
      description: 'Learn coding',
      date: '2025-12-02',
      time: '14:00',
      location: 'Lab 1'
    },
    {
      id: 3,
      title: 'Sports Day',
      category: 'Sports',
      featured: true,
      description: 'Annual sports event',
      date: '2025-12-03',
      time: '09:00',
      location: 'Stadium'
    }
  ];

  describe('eventCategories', () => {
    it('should be defined', () => {
      expect(eventCategories).toBeDefined();
    });

    it('should be an array', () => {
      expect(Array.isArray(eventCategories)).toBe(true);
    });
  });

  describe('filterEvents', () => {
    it('should return all events when no filters applied', () => {
      const result = filterEvents(mockEvents, '', '');
      expect(result.length).toBe(mockEvents.length);
    });

    it('should be a function', () => {
      expect(typeof filterEvents).toBe('function');
    });

    it('should filter by category', () => {
      const result = filterEvents(mockEvents, '', 'Workshop');
      expect(result.length).toBe(1);
      expect(result[0].category).toBe('Workshop');
    });
  });

  describe('getFeaturedEvents', () => {
    it('should return only featured events', () => {
      const result = getFeaturedEvents(mockEvents);
      expect(result.length).toBe(2);
      expect(result.every(event => event.featured)).toBe(true);
    });

    it('should return empty array when no featured events', () => {
      const noFeaturedEvents = [{ id: 1, featured: false }];
      const result = getFeaturedEvents(noFeaturedEvents);
      expect(result.length).toBe(0);
    });
  });
});
