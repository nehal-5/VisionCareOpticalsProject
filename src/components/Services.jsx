import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="servicesGrid">
        <div className="serviceCard">
          <img src="/assets/servicesImages/eyecheckup.png" alt="Eye Checkup" />
          <h3>Comprehensive Eye Checkup</h3>
          <p>
            Get a professional eye examination to ensure your vision health.
          </p>
        </div>
        <div className="serviceCard">
          <img src="./assets/servicesImages/frameadjustment.png" alt="Frame Adjustment" />
          <h3>Frame Adjustments</h3>
          <p>
            Perfectly fit your glasses for maximum comfort and style.
          </p>
        </div>
        <div className="serviceCard">
          <img src="/assets/servicesImages/lensReplacement.png" alt="Lens Replacement" />
          <h3>Lens Replacement</h3>
          <p>
            Upgrade or replace your lenses for better vision clarity.
          </p>
        </div>
      </div>
    </section>
  );
};



export default Services;