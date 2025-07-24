// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container grid-footer">
        {/* Column 1: Logo + About */}
        <div className="footer-about">
          <h2 className="footer-logo">Amna's Glow Room</h2>
          <p>Feel beautiful, look beautiful. Your confidence is our priority. Discover the best in skincare, haircare, and self-care with us.</p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/booking">Book</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 3: Subscribe */}
        <div className="footer-subscribe">
          <h4>Subscribe Us Now</h4>
          <p>Get updates on our offers, products and services.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button type="submit"><FaEnvelope /> Subscribe</button>
          </form>
        </div>

        {/* Column 4: Map */}
        <div className="footer-contact-info">
  <h4>Contact Info</h4>
  <p><span className="icon"><FaMapMarkerAlt /></span> 123 Main Street, Lahore, Pakistan</p>
  <p><span className="icon"><FaPhoneAlt /></span> +92 300 1234567</p>
  <p><span className="icon"><FaEnvelope /></span> info@amnasglowroom.com</p>
</div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Amna's Glow Room. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
