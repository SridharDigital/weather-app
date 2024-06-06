import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { location, current } = weather;
  const { name, country } = location;
  const { temp_c, temp_f, condition, wind_kph, humidity, cloud, last_updated } =
    current;

  return (
    <div className="weather-card">
      <h2>
        {name}, {country}
      </h2>
      <p>{condition.text}</p>
      <img src={condition.icon} alt={condition.text} />
      <p>
        Temperature: {temp_c}°C / {temp_f}°F
      </p>
      <p>Wind Speed: {wind_kph} kph</p>
      <p>Humidity: {humidity}%</p>
      <p>Cloud Coverage: {cloud}%</p>
      <p>Last Updated: {last_updated}</p>
    </div>
  );
};

export default WeatherCard;
