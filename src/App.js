import React, { useState } from "react";
import axios from "axios";
import CustomAppBar from "./components/CustomAppBar";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (location) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=f36185c6c7d547549d3163406240606&q=${location}`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError(err?.response?.data?.error?.message);
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <CustomAppBar />
      <SearchBox onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;
