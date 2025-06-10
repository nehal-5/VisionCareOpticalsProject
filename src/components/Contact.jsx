import React from 'react';
import '../styles/Contact.css'; // Make sure your CSS file is correctly named and imported
import ownerImage from '/assets/owner3.jpg'; // 

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">

        {/* Contact Details */}
        <div className="contact-info">
          <h3>Our Locations</h3>

          {/* Branch 1 */}
          <div className="branch">
            <h4>📍 GVP Branch</h4>
            <p>
              <strong>Gayatri Vidya Parishad Institute of Health Care and Medical Technology</strong><br />
              Vision Care Opticals <br />
              Marikavalasa, Visakhapatnam, Andhra Pradesh 530048
            </p>
          </div>

          {/* Branch 2 */}
          <div className="branch">
            <h4>📍 Ramatalkies Branch</h4>
            <p>
              <strong>Vision Care Opticals</strong><br />
              Rama Talkies Junction, Opposite HDFC Bank,<br />
              Visakhapatnam, Andhra Pradesh 530013 <br />
              <a href="https://maps.app.goo.gl/4PUd4KLGhATemvxo9" target="_blank" rel="noopener noreferrer">
                Open Maps
              </a>
            </p>
          </div>

          <p><strong>Phone:</strong> +91 7989921053</p>
          <p><strong>Email:</strong> mohammedbakharali01@gmail.com</p>
          <p><strong>Opening Hours:</strong> Mon–Sat: 10:00 AM – 9:00 PM | Sun: 10:00 AM – 1:00 PM</p>
        </div>

        {/* About the Owner */}
        <div className="owner-info">
          <img src={ownerImage} alt="Shop Owner" />
          <div className="owner-text">
            <h3>Meet the Owner</h3>
            <p>
              <span style={{ backgroundColor: 'yellow', color: 'black' }}>Md. Bakhar Ali</span>, a certified optician with over{' '}
              <span>25 years of experience</span>, is dedicated to providing top-quality eyewear and eye care services.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
