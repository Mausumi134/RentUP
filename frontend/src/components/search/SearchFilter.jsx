import React, { useState, useEffect } from "react";
import "./searchFilter.css";

const SearchFilter = ({ onFilterChange, properties }) => {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [0, 10000],
    roomType: "",
    gender: "",
    amenities: [],
    sortBy: "price-low"
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const amenitiesList = [
    "WiFi", "AC", "Food", "Laundry", "Parking", "Security", 
    "Power Backup", "Water Supply", "Gym", "Common Area"
  ];

  const locations = [
    "Phagwara", "Jalandhar", "G.T. Road", "Chaheru", 
    "Lawgate", "Guru Hargobind Nagar", "Model Town", "Civil Lines"
  ];

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      priceRange: [0, 10000],
      roomType: "",
      gender: "",
      amenities: [],
      sortBy: "price-low"
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.location) count++;
    if (filters.roomType) count++;
    if (filters.gender) count++;
    if (filters.amenities.length > 0) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 10000) count++;
    return count;
  };

  return (
    <div className="search-filter-container">
      {/* Quick Search Bar */}
      <div className="quick-search">
        <div className="search-input-group">
          <i className="fa-solid fa-search"></i>
          <input
            type="text"
            placeholder="Search by location, PG name..."
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </div>
        
        <button 
          className="filter-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <i className="fa-solid fa-filter"></i>
          Filters
          {getActiveFiltersCount() > 0 && (
            <span className="filter-count">{getActiveFiltersCount()}</span>
          )}
        </button>
      </div>

      {/* Advanced Filters */}
      <div className={`advanced-filters ${isExpanded ? "expanded" : ""}`}>
        <div className="filters-grid">
          {/* Location Filter */}
          <div className="filter-group">
            <label>Location</label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <label>Price Range</label>
            <div className="price-range">
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange("priceRange", [0, parseInt(e.target.value)])}
              />
              <div className="price-display">
                ₹0 - ₹{filters.priceRange[1].toLocaleString()}
              </div>
            </div>
          </div>

          {/* Room Type */}
          <div className="filter-group">
            <label>Room Type</label>
            <select
              value={filters.roomType}
              onChange={(e) => handleFilterChange("roomType", e.target.value)}
            >
              <option value="">All Types</option>
              <option value="single">Single Room</option>
              <option value="double">Double Sharing</option>
              <option value="triple">Triple Sharing</option>
              <option value="dormitory">Dormitory</option>
            </select>
          </div>

          {/* Gender Preference */}
          <div className="filter-group">
            <label>Gender</label>
            <select
              value={filters.gender}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
            >
              <option value="">Any</option>
              <option value="male">Boys Only</option>
              <option value="female">Girls Only</option>
              <option value="co-ed">Co-ed</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="filter-group">
            <label>Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            >
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
              <option value="distance">Nearest</option>
            </select>
          </div>
        </div>

        {/* Amenities Filter */}
        <div className="amenities-filter">
          <label>Amenities</label>
          <div className="amenities-grid">
            {amenitiesList.map(amenity => (
              <label key={amenity} className="amenity-checkbox">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                />
                <span className="checkmark"></span>
                {amenity}
              </label>
            ))}
          </div>
        </div>

        {/* Filter Actions */}
        <div className="filter-actions">
          <button className="clear-filters" onClick={clearFilters}>
            Clear All
          </button>
          <button 
            className="apply-filters"
            onClick={() => setIsExpanded(false)}
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="results-summary">
        <span>{properties?.length || 0} properties found</span>
        {getActiveFiltersCount() > 0 && (
          <button className="clear-all-filters" onClick={clearFilters}>
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;