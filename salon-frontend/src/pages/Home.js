import React from 'react';
import '../styles/home.css'; // your CSS file
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import ImageGallery from '../components/ImageGallery';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Home = () => {
  const backgroundImage = '/images/home/slider1.jpg'; // use your image path

  return (
    <>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay-gradient" />
        <div className="hero-content">
          <h1 className="hero-title">Unlock Your True Elegance</h1>
          <p className="hero-tagline">Redefining beauty, one experience at a time.</p>
          <p className="hero-description">
            At Salon Pro, we believe confidence starts with self-care. Indulge in top-notch services, handpicked products, and a pampering environment — tailored just for you.
          </p>
          <button className="hero-button">Book Your Session</button>
        </div>
      </div>
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
      <BookingCTA />
      <ImageGallery />
      <FaqSection />
      <Footer />
    </>
    

  );
};

export default Home;
