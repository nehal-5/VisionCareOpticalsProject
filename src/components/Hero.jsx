import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
        <div className="heroContent">
          <h1>See the World Clearly</h1>
          <p>Your Vision, Our Mission</p>
          <p>Discover high quality eyewear for every style and need.</p>
          <a href="#products" className="btn" id="cl-btn">
            Explore Collections
          </a>
          <a href="#appointment" className="btn book-btn">
            Book an Eye Test
          </a>
        </div>
    </section>
  );
};

export default Hero;
