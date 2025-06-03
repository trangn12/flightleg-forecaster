import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './SearchForm.css';
import locations from '../GlobeComponent/Airports';

const SearchForm = ({ onCitySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [activeSelector, setActiveSelector] = useState('source'); // 'source' or 'destination'

  const filteredCities = locations
    .filter(location =>
      location.city.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(location => location.city)
    .filter((city, index, self) => self.indexOf(city) === index); // Remove duplicates

  const sendToBackend = async (source, destination) => {
    try {
      const response = await fetch('http://localhost:5000/api/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city1: source, city2: destination })
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Weather data from Flask:", data);
        // Optional: can pass this to parent via another callback if needed
      } else {
        console.error("Error from backend:", data.error);
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  };

  const handleCityClick = async (city) => {
    let newSource = selectedSource;
    let newDestination = selectedDestination;

    if (activeSelector === 'source') {
      newSource = city;
      setSelectedSource(city);
    } else {
      newDestination = city;
      setSelectedDestination(city);
    }

    setIsOpen(false);
    setSearchTerm('');

    onCitySelect({ source: newSource, destination: newDestination });

    if (newSource && newDestination) {
      await sendToBackend(newSource, newDestination);
    }
  };

  return (
    <div className="search-form-container">
      <button
        className="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="search-modal">
          <div className="search-content">
            <div className="city-selectors">
              <button
                className={`selector-button ${activeSelector === 'source' ? 'active' : ''}`}
                onClick={() => setActiveSelector('source')}
              >
                From: {selectedSource || 'Select source'}
              </button>
              <button
                className={`selector-button ${activeSelector === 'destination' ? 'active' : ''}`}
                onClick={() => setActiveSelector('destination')}
              >
                To: {selectedDestination || 'Select destination'}
              </button>
            </div>
            <input
              type="text"
              placeholder={`Search for ${activeSelector === 'source' ? 'source' : 'destination'} city...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="cities-list">
              {filteredCities.map((city) => (
                <div
                  key={city}
                  className="city-item"
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
