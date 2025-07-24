// components/BookingCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/bookingcta.css';

const BookingCTA = () => {
  return (
    <section className="booking-cta">
      <div className="container">
        <h2 className="cta-title">Ready to Treat Yourself?</h2>
        <p className="cta-text">
          Book your appointment today and experience beauty like never before.
        </p>
        <Link to="/booking" className="cta-button">Book Now</Link>
      </div>
    </section>
  );
};

export default BookingCTA;
