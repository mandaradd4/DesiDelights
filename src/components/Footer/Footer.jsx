import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="DesiDelights Logo" height={100} width={100} />
          <p>DesiDelights brings you the authentic taste of India’s streets.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> {/* optional: create /about */}
            <li><Link to="/order">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li> {/* optional */}
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li><a href="tel:9467825478">9467825478</a></li>
            <li><a href="mailto:desidelights@gmail.com">desidelights@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2025 DesiDelights.com – All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
