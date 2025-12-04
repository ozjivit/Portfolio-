import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy">
      <div className="privacy-header">
        <h1>Privacy Policy – Zain Digital Marketing</h1>
        <p className="last-updated">Last Updated: [Date]</p>
        <p>Welcome to Zain Digital Marketing. This Privacy Policy explains how we collect, use, and protect your information when you contact us or use our services.</p>
      </div>

      <div className="privacy-section">
        <h2>1. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Business Name or Type</li>
          <li>Details about services you need (marketing, design, website, etc.)</li>
          <li>Messages or inquiries you send to us</li>
        </ul>
        <p>This information may come from:</p>
        <ul>
          <li>Contact Forms</li>
          <li>Lead Generation Ads</li>
          <li>WhatsApp or Email Inquiry</li>
          <li>Instagram/Facebook DM</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>2. How We Use Your Information</h2>
        <p>We use your information ONLY to:</p>
        <ul>
          <li>Contact you regarding your inquiry</li>
          <li>Provide digital marketing, website, design, or related services</li>
          <li>Send updates related to your project</li>
          <li>Understand your requirements better</li>
          <li>Communicate through WhatsApp, email, phone, or social media</li>
        </ul>
        <p className="emphasis">We NEVER sell or share your information with any third party.</p>
      </div>

      <div className="privacy-section">
        <h2>3. How Your Data Is Protected</h2>
        <ul>
          <li>Secure storage</li>
          <li>Limited access</li>
          <li>Used only for professional communication</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>4. Your Rights</h2>
        <p>You can:</p>
        <ul>
          <li>Request your information</li>
          <li>Ask us to delete your information</li>
          <li>Ask questions about how your data is used</li>
        </ul>
        <p>Just contact us anytime for removal or updates.</p>
      </div>

      <div className="privacy-section">
        <h2>5. Third-Party Services</h2>
        <p>We may use tools like:</p>
        <ul>
          <li>Facebook Lead Ads</li>
          <li>Instagram Ads</li>
          <li>Tracking/Analytics</li>
        </ul>
        <p>These services follow their own privacy rules.</p>
      </div>

      <div className="privacy-section">
        <h2>6. Contact Us</h2>
        <p>If you have questions or want your data removed, contact us:</p>
        <ul className="contact-list">
          <li>📧 Email: <a href="mailto:zaindeveloper198@gmail.com">zaindeveloper198@gmail.com</a></li>
          <li>📱 WhatsApp: <a href="https://wa.me/97477835409" target="_blank" rel="noopener noreferrer">+974 77835409</a></li>
          <li>📍 Doha, Qatar</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;