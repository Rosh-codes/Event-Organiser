import React, { useState, useEffect } from "react";

const SearchBar = ({
  onSearch,
  placeholder = "Search events...",
  categories = [],
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch({
        searchTerm: searchTerm.trim(),
        category: selectedCategory,
      });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedCategory, onSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <div className="search-bar-container" id="search">
      <div className={`search-input-wrapper ${isFocused ? "focused" : ""}`}>
        <div className="search-icon"></div>{" "}
        {/* // add search icon and correct css */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-btn" onClick={clearSearch} type="button">
            ×
          </button>
        )}
      </div>

      {categories.length > 0 && (
        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <div className="select-icon">▼</div>
        </div>
      )}

      {(searchTerm || selectedCategory) && (
        <div className="search-info">
          <span className="search-count">
            Searching {searchTerm && `for "${searchTerm}"`}
            {searchTerm && selectedCategory && " in "}
            {selectedCategory &&
              `${
                categories.find((cat) => cat.value === selectedCategory)?.label
              }`}
          </span>
          <button className="clear-all-btn" onClick={clearSearch}>
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
