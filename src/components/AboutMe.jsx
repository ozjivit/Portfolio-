import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const designSkills = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 90 },
    { name: 'Adobe InDesign', level: 85 },
    { name: 'Canva', level: 90 },
    { name: 'Typography', level: 88 },
    { name: 'Color Theory', level: 92 }
  ];

  const developmentSkills = [
    { name: 'React Native', level: 88 },
    { name: 'Flutter', level: 85 },
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'UI/UX Design', level: 87 },
    { name: 'Mobile Development', level: 89 }
  ];

  return (
    <div className="about-me">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          I'm Zain, a full-stack web developer with strong experience in React, MERN stack,
          Odoo/POS systems, graphic designing, and video editing.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>What I Do</h2>
          <p>
            I have worked on multiple projects, including event websites, landing pages, business websites,
            posters, flyers, promo videos, and social media content.
          </p>
        </div>

        <div className="about-section">
          <h2>I Focus On</h2>
          <ul className="about-list">
            <li>Clean and modern UI/UX</li>
            <li>Fast and responsive websites</li>
            <li>Pixel-perfect designs</li>
            <li>Professional communication</li>
            <li>On-time delivery</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>My Goal</h2>
          <p>
            My goal is simple: help clients look professional and grow digitally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 
