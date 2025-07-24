// components/ImageGallery.jsx
import React from 'react';
import '../styles/imagegallery.css';

const ImageGallery = () => {
  const galleryImages = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    // '/images/gallery5.jpg',
    // '/images/gallery6.jpg',
    // '/images/gallery7.jpg',
    // '/images/gallery8.jpg'
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">Our Work Speaks for Itself</h2>
        <p className="gallery-subtitle">A glimpse into our beauty transformations</p>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
