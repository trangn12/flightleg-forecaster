import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import GlobeComponent from './components/GlobeComponent/GlobeComponent';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [flightAdvice, setFlightAdvice] = useState(null);

  const handleCitySelect = async (city) => {
    setSelectedCity(city);

    try {
      const weatherRes = await fetch('http://localhost:5000/api/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city1: city.source,
          city2: city.destination
        })
      });

      const weatherData = await weatherRes.json();

      const recRes = await fetch('http://localhost:5000/api/recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(weatherData)
      });

      const recData = await recRes.json();
      setFlightAdvice(recData.recommendation);
      console.log("Flight advice received:", recData.recommendation);

    } catch (error) {
      console.error("Error fetching data:", error);
      setFlightAdvice("⚠️ Unable to fetch recommendation.");
    }
  };

  return (
    <div className="App">
      <Header onCitySelect={handleCitySelect} />
      <main className="main-content">
        <GlobeComponent selectedData={selectedCity} recommendation={flightAdvice}/>
        {/* {flightAdvice && (
          <div className="flight-advice">
            <h3>AI Route Recommendation</h3>
            <p>{flightAdvice}</p>
          </div>
        )} */}
      </main>
    </div>
  );
}

export default App;
