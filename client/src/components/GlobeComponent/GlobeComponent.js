import React, { useState, useEffect, useRef, useCallback } from 'react';
import Globe from 'react-globe.gl';
import styles from './GlobeComponent.module.css';
import locations from './Airports';

const GlobeComponent = ({ selectedData, recommendation }) => {
  const globeEl = useRef();
  const [points, setPoints] = useState([]);
  const [arcsData, setArcsData] = useState([]);
  const [globeWidth, setGlobeWidth] = useState(window.innerWidth); // Initial responsive width
  const [globeHeight, setGlobeHeight] = useState(window.innerHeight); // Initial responsive height
  const [selectedCities, setSelectedCities] = useState({ source: null, destination: null });

  // Function to calculate distance between two points on Earth
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };

  // Update selectedCities when selectedData changes
  useEffect(() => {
    if (selectedData) {
      setSelectedCities(selectedData);
    }
  }, [selectedData]);

  // Accent color from CSS variables
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
  const dotActiveColor = getComputedStyle(document.documentElement).getPropertyValue('--dot-color-active').trim();  

  useEffect(() => {
    console.log(selectedCities);
    // Process locations into points for the globe
    setPoints(locations.map(loc => ({
      lat: loc.lat,
      lng: loc.lng,
      name: loc.city,
      alt: (loc.city === selectedCities?.source || loc.city === selectedCities?.destination) ? 0.05 : 0.01,
      radius: (loc.city === selectedCities?.source || loc.city === selectedCities?.destination) ? 0.8 : (loc.size || 0.05),
      color: loc.city === selectedCities?.source ? '#ffff44' : 
             loc.city === selectedCities?.destination ? '#ffff44' :
             (loc.type === 'hub' ? dotActiveColor : accentColor),
      city: loc.city,
      type: loc.type
    })));

    // Create arc data if both source and destination are selected
    if (selectedCities?.source && selectedCities?.destination) {
      const sourceCity = locations.find(loc => loc.city === selectedCities.source);
      const destCity = locations.find(loc => loc.city === selectedCities.destination);
      
      if (sourceCity && destCity) {
        const distance = calculateDistance(sourceCity.lat, sourceCity.lng, destCity.lat, destCity.lng);
        // Sigmoid function to scale distance to arc height between 0.1 and 0.5
        const sigmoid = (x) => 1 / (1 + Math.exp(-x));
        const arcAltitude = 0.1 + (0.4 * sigmoid((distance - 7500) / 2000));
        
        console.log(arcAltitude);
        console.log(distance);
        
        setArcsData([{
          startLat: sourceCity.lat,
          startLng: sourceCity.lng,
          endLat: destCity.lat,
          endLng: destCity.lng,
          color: '#ff4444',
          label: `${sourceCity.city} → ${destCity.city}`,
          altitude: arcAltitude
        }]);
      }
    } else {
      setArcsData([]);
    }
  }, [accentColor, dotActiveColor, selectedCities]);

  useEffect(() => {
    if (selectedCities?.source && globeEl.current) {
      const cityPoint = points.find(p => p.city === selectedCities.source);
      if (cityPoint) {
        globeEl.current.pointOfView(
          { lat: cityPoint.lat, lng: cityPoint.lng, altitude: 1.5 },
          2000
        );
      }
    }
  }, [selectedCities, points]);

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = false;
      // globeEl.current.controls().autoRotateSpeed = 0.5; // Adjust speed as desired
      // globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 2000); // Initial view
    }

    const handleResize = () => {
        setGlobeWidth(window.innerWidth);
        setGlobeHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size set

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pointLabel = useCallback(point => `
    <div style="
      background: rgba(20, 20, 30, 0.85);
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid ${accentColor};
      color: #E0E0E0;
      font-size: 0.9rem;
      box-shadow: 0 2px 10px rgba(0,255,255,0.2);
    ">
      <b>${point.city}</b><br/>
      <span style="font-size: 0.75rem; color: ${accentColor};">${point.type.toUpperCase().replace('_', ' ')}</span><br/>
      <span style="font-size: 0.7rem;">Lat: ${point.lat.toFixed(2)}, Lng: ${point.lng.toFixed(2)}</span>
    </div>
  `, [accentColor]);

  const handleCitySelect = (city) => {
    setSelectedCities(prev => ({
      ...prev,
      source: city // or destination depending on your logic
    }));
    console.log(city);
  };

  return (
    <div className={styles.globeContainer}>
      <Globe
        ref={globeEl}
        width={globeWidth}
        height={globeHeight}
        globeImageUrl="/earth-night-16k.jpg" // From public folder

        backgroundColor={primaryColor}
        // backgroundImageUrl="/space-bg.webp" // From public folder
        
        pointsData={points}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="alt"
        pointRadius="radius"
        pointColor="color"
        pointLabel={pointLabel}
        onPointHover={point => {
            if (globeEl.current && point) {
                // Example: make globe slightly zoom or highlight, or change cursor

                document.body.style.cursor = 'pointer';
            } else if (globeEl.current) {
                document.body.style.cursor = 'default';
            }
        }}
        onPointClick={(point, event, coords) => {
            console.log('Point clicked:', {
                point,
                event,
                coords
            });
        }}
        pointsMerge={false} // Smooth transitions for point updates
        pointsTransitionDuration={1000}

        atmosphereColor={accentColor}
        atmosphereAltitude={0.13} // How far out the atmosphere glow extends

        // Optional: Add arcs between points
        arcsData={arcsData}
        arcDashLength={0.4}
        arcDashGap={0.1}
        arcDashAnimateTime={9000}
        arcColor={'color'}
        arcAltitude={'altitude'} // Use the calculated altitude
        arcStroke={0.5}
        
        // enablePointerInteraction={true}
        // Optional: customize controls
        // controlsOptions={{
        //   enableZoom: true,
        //   zoomSpeed: 0.5,
        //   minDistance: 150, // Closest zoom
        //   maxDistance: 500, // Farthest zoom
        // }}
      />
      {recommendation && (
  <div style={{
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    maxWidth: '30rem',
    backgroundColor: 'rgba(10, 10, 20, 0.9)',
    color: 'white',
    padding: '1rem',
    borderRadius: '10px',
    fontSize: '0.9rem',
    overflowY: 'auto',
    maxHeight: '40vh',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    whiteSpace: 'pre-wrap'
  }}>
    <h3>Flight Recommendation</h3>
    <p>{recommendation}</p>
  </div>
)}
    </div>
  );
};

export default GlobeComponent;