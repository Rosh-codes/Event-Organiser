import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  const mockOnSearch = vi.fn();
  const mockCategories = ['Music', 'Sports', 'Workshop'];

  it('should render search bar', () => {
    render(
      <SearchBar 
        onSearch={mockOnSearch} 
        categories={mockCategories}
        placeholder="Search events"
      />
    );
    const searchInput = screen.getByPlaceholderText('Search events');
    expect(searchInput).toBeInTheDocument();
  });

  it('should render category select', () => {
    render(
      <SearchBar 
        onSearch={mockOnSearch} 
        categories={mockCategories}
      />
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(
      <SearchBar 
        onSearch={mockOnSearch} 
        categories={mockCategories}
      />
    );
    expect(container).toBeTruthy();
  });
});
