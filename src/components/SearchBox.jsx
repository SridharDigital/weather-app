import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
