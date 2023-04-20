import React from 'react';

const LocationInput = ({ city, setCity, country, setCountry }) => {
  const handleLocationChange = e => {
    const value = e.target.value;
    const [newCity, newCountry] = value.split(',');
    setCity(newCity.trim());
    setCountry(newCountry.trim());
  }

  return (
    <div className="form-group">
      <label htmlFor="location">Ubicación:</label>
      <input type="text" className="form-control" id="location" value={`${city}, ${country}`} onChange={handleLocationChange} />
    </div>
  );
};

export default LocationInput;
