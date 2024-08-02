import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p>🇺🇸 USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="links">
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <h3>mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            <i className="fab fa-google-pay"></i>
            <i className="fab fa-mastercard"></i>
            <i className="fab fa-paypal"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-apple-pay"></i>
            <i className="fab fa-cc-diners-club"></i>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
