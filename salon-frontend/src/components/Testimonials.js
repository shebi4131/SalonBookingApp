import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUserCircle } from 'react-icons/fa';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/testimonials.css'; // Make sure this path matches

const testimonials = [
  {
    name: 'Ayesha K.',
    text: "Absolutely loved the experience! The facial treatment left my skin glowing for days. Highly recommended!",
    rating: 5
  },
  {
    name: 'Zara H.',
    text: "Professional staff and cozy environment. My go-to salon from now on. They know how to treat their clients.",
    rating: 4
  },
  {
    name: 'Maria S.',
    text: "Amna’s Glow Room has changed my skincare game. Their recommendations actually worked!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        className="testimonial-swiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <FaUserCircle className="user-icon" />
              <p className="testimonial-text">“{t.text}”</p>
              <h4 className="testimonial-name">— {t.name}</h4>
              <div className="stars">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
