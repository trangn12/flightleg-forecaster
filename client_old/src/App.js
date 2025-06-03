import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWeather(null);
    setError("");

    try {
      const res = await fetch("/api/weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city })
      });

      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  const renderWeather = () => {
  if (!weather) return null;

  const {
    resolved_name,
    country,
    lat,
    lon,
    weather: { description, temperature, humidity, wind_speed },
    alert
  } = weather;

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>🌤️ Weather in {resolved_name}, {country}</h2>
      <p><strong>🌍 Coordinates:</strong> {lat.toFixed(2)}, {lon.toFixed(2)}</p>
      <p><strong>📋 Description:</strong> {description}</p>
      <p><strong>🌡️ Temperature:</strong> {temperature}°C</p>
      <p><strong>💧 Humidity:</strong> {humidity}%</p>
      <p><strong>🌬️ Wind Speed:</strong> {wind_speed} m/s</p>
      <p><strong>🚨 Alert:</strong> {alert}</p>
    </div>
  );
};

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🌤️ City Weather Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city (e.g., Tokyo)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          style={{ marginRight: "1rem", padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Get Weather
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {renderWeather()}
    </div>
  );
}

export default App;
