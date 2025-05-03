import React from 'react';
import './Location.scss';

const Location = () => {
  const latitude = 41.246428;
  const longitude = 69.343924;

  const handleClick = () => {
    const url = `https://maps.google.com/maps?q=${latitude},${longitude}&ll=${latitude},${longitude}&z=16`;
    window.open(url, '_blank');
  };

  return (
    <div className="location-map" onClick={handleClick}>
      <iframe
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
        width="100%"
        height="400"
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Location;
