import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initScrollReveal } from '../scrollReveal';

describe('ScrollReveal Utils', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = vi.fn(function(callback, options) {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
    
    // Mock querySelectorAll
    global.document.querySelectorAll = vi.fn(() => []);
  });

  it('should initialize scroll reveal function', () => {
    expect(typeof initScrollReveal).toBe('function');
  });

  it('should be callable', () => {
    const result = initScrollReveal();
    expect(result).toBeUndefined();
  });
});
