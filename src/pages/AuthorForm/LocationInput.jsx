import React, { forwardRef, useState } from "react";

const AuthorCityCountryInput = forwardRef(({ onInputChange }, ref) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    const [newCity, newCountry] = value.split(",");
    setCity(newCity.trim());
    setCountry(newCountry.trim());
    onInputChange(newCity.trim(), newCountry.trim());
  };

  return (
    <input
      type="text"
      placeholder="City, Country"
      ref={ref}
      value={`${city}, ${country}`}
      onChange={handleInputChange}
    />
  );
});

export default AuthorCityCountryInput;







