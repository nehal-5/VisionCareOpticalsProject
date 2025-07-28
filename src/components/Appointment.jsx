import React, { useState } from "react";
import "../styles/Appointment.css";

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          window.location.href = "https://vision-care-opticals.vercel.app/";
        }, 3000);
      }
      else {
              alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Check network.");
    }
  };
  return (
    <section id="appointment">
      <h2>Book an Eye Test</h2>
      <p>Schedule your appointment with us for a professional eye checkup.</p>

      <div className="appointment-container">
        {/* Booking Form using Web3Forms */}
        <div className="form-container">
          <form id="appointment-form" onSubmit={handleSubmit}>
            {/* REQUIRED Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="274c0f5b-93d6-4fbb-87d5-a7cdd9ef0bf3"
            />

            {/* Optional: Subject of the email  */}
            <input
              type="hidden"
              name="subject"
              value="New Eye Test Appointment"
            />

            {/* Optional: Redirect after submit */}
            {/* <input
              type="hidden"
              name="redirect"
              value="https://vision-care-opticals.vercel.app/"
            /> */}

            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Date:</label>
              <input type="date" id="date" name="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time:</label>
              <input type="time" id="time" name="time" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (optional):</label>
              <textarea id="message" name="message" rows="3"></textarea>
            </div>

            <button type="submit" className="btn">
              Book Appointment
            </button>
            {submitted && (
              <p style={{ color: "green", marginTop: "15px" }}>
                ✅ Appointment booked! Redirecting you...
              </p>
            )}
          </form>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.148944315853!2d83.35664937463663!3d17.83165138985608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b702a1a7be5%3A0x6841f6adbfeaddeb!2sGayatri%20Vidya%20Parishad%20Institute%20of%20Health%20Care%20and%20Medical%20Technology!5e0!3m2!1sen!2sin!4v1747909449488!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <p style={{ marginTop: "10px" }}>
            Our store is inside the hospital, making it easy to visit for
            patients, visitors, and staff. You can count on us for trusted
            products and services in a caring environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Appointment;