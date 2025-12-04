import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="services-header">
        <h1>Services</h1>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h2>Web Development</h2>
          <ul>
            <li>Full Website Creation (React / MERN / WordPress)</li>
            <li>Landing Pages</li>
            <li>E-commerce Websites</li>
            <li>API Integration</li>
            <li>Bug Fixing</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Graphic Design</h2>
          <ul>
            <li>Posters / Flyers</li>
            <li>Logo Design</li>
            <li>Social Media Posts</li>
            <li>Branding Kits</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Video Editing</h2>
          <ul>
            <li>Event Highlight Videos</li>
            <li>Promo Videos</li>
            <li>TikTok / Instagram Reels</li>
            <li>Motion Graphics</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Odoo / POS</h2>
          <ul>
            <li>POS Setup</li>
            <li>Odoo Installation & Configuration</li>
            <li>Product & Inventory Setup</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

