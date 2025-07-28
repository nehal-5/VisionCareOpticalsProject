import React from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src="/assets/loadingImage.png" alt="Loading" className="spin-logo" />
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
