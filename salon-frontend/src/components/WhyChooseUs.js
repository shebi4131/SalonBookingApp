import React from 'react';
import { FaSpa, FaStar, FaUserFriends } from 'react-icons/fa';
import '../styles/whyChooseUs.css'; // Create this file

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title">Why Choose Amna’s Glow Room?</h2>
        <p className="section-subtitle">Experience the art of beauty with trusted professionals</p>

        <div className="features-row">
          <div className="feature-card">
            <FaSpa className="feature-icon" />
            <h4>Luxury Services</h4>
            <p>Relax and rejuvenate with our premium spa, skin, and hair care solutions.</p>
          </div>

          <div className="feature-card">
            <FaStar className="feature-icon" />
            <h4>Top Rated Professionals</h4>
            <p>Our expert beauticians and stylists are highly rated by thousands of happy clients.</p>
          </div>

          <div className="feature-card">
            <FaUserFriends className="feature-icon" />
            <h4>Personalized Experience</h4>
            <p>Enjoy personalized beauty plans tailored just for your skin and style.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
