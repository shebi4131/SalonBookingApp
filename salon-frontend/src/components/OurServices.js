import React from 'react';
import '../styles/ourServices.css';

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Look stunning on your big day with our professional bridal packages tailored just for you.',
    image: '/images/services/bridal.jpg' // Replace with your image
  },
  {
    title: 'Hair Styling',
    description: 'Trendy cuts, classic styles, and expert hair care — our stylists bring your look to life.',
    image: '/images/services/hair.jpg'
  },
  {
    title: 'Facial & Glow',
    description: 'Get that radiant glow with our premium facial treatments designed for all skin types.',
    image: '/images/services/facial.jpg'
  }
];

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Pamper yourself with our expert beauty solutions.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn-readmore">View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
