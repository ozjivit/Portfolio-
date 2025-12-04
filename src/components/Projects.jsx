import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Website Screenshots",
      description: "Selection of modern, responsive websites (React/MERN/WordPress) including event sites, landing pages, and business websites.",
      technologies: ["React", "MERN", "WordPress", "Responsive Design"],
      image: "💻",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Posters",
      description: "High-impact posters designed for events and promotions with clean typography and branding.",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Typography"],
      image: "🖼️",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Flyers",
      description: "Promotional flyers for businesses and events, optimized for print and social media.",
      technologies: ["Adobe InDesign", "Layout", "Branding"],
      image: "📄",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Event Banners",
      description: "Event banners including MegaPark Carnival assets — vibrant, on-brand visuals for large displays.",
      technologies: ["Adobe Illustrator", "Large Format", "Color Theory"],
      image: "🎪",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Video Editing Highlights",
      description: "Highlights from promo videos, event coverage, and social reels (TikTok/Instagram).",
      technologies: ["Premiere Pro", "After Effects", "Motion Graphics"],
      image: "🎬",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Real Projects",
      description: "A curated selection of real client projects delivered with professional communication and on-time delivery.",
      technologies: ["Planning", "Communication", "Delivery"],
      image: "✅",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Portfolio</h1>
        <p>Your Work Gallery — a selection of website screenshots, posters, flyers, event banners, video edits, and real projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <span className="project-emoji">{project.image}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link github">
                  <span>📁</span> Portfolio
                </a>
                <a href={project.live} className="project-link live">
                  <span>🌐</span> View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <h2>Ready to collaborate?</h2>
        <p>Let's build clean, fast, and professional work together. Reach out to discuss your project.</p>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </div>
  );
};

export default Projects; 
