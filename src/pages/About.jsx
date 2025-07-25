// src/pages/About.jsx - UPDATED WITH DR. LAWRENCE NDERU'S PROFILE
import React from 'react';
import '../styles/about.css';
import { FaGlobeAmericas, FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa';

// Import the profile images from the correct path
import gemProfile from '../assets/images/profile.jpeg';
import lnProfile from '../assets/images/ln.jpeg';
import irkeProfile from '../assets/images/lyke.jpg';
import felixProfile from '../assets/images/felix.jpg';
import josephProfile from '../assets/images/joseph.jpg'; 

const About = () => {
  return (
    <div className="about-page">

      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About AfriData Commons</h1>
          <p className="about-hero-description">
            AfriData Commons is a pioneering collaborative data-sharing platform dedicated to strengthening Africa’s data ecosystem. Our foundation is built on the belief that accessible, secure, and structured data is the key to unlocking the continent's potential for innovation and informed decision-making.
          </p>
        </div>
      </section>

      <section className="about-section story-section">
        <div className="section-content-wrapper">
          <h2 className="section-title">Our Purpose & Impact</h2>
          <p className="section-description">
            We aim to create a vibrant hub where individuals, researchers, institutions, and policymakers can seamlessly access, share, and collaborate on high-quality datasets. By fostering transparency and responsible data stewardship, AfriData Commons empowers communities to drive sustainable development and address Africa's most pressing challenges.
          </p>
        </div>
      </section>

      <section className="about-section vision-mission-section">
        <div className="section-content-wrapper">
          <h2 className="section-title">Vision & Mission</h2>
          <div className="vm-grid">
            <div className="vm-box">
              <h3>Our Vision</h3>
              <p>To be the leading, trusted, and most impactful hub for ethical and collaborative data-driven solutions across Africa.</p>
            </div>
            <div className="vm-box">
              <h3>Our Mission</h3>
              <ul>
                <li>Empower communities and institutions through accessible, actionable data.</li>
                <li>Promote transparency, trust, and responsible data stewardship.</li>
                <li>Catalyze collaborative learning and research using real-world African data.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section values-section">
        <div className="section-content-wrapper">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaGlobeAmericas className="value-icon" />
              <h3>Openness</h3>
              <p>Promoting free, equitable, and open access to data as a catalyst for growth and understanding.</p>
            </div>
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>Integrity</h3>
              <p>Upholding the highest standards of data security, authenticity, privacy, and ethical compliance.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Community</h3>
              <p>Fostering an inclusive and collaborative environment where diverse voices drive collective impact.</p>
            </div>
            <div className="value-card">
              <FaLightbulb className="value-icon" />
              <h3>Innovation</h3>
              <p>Leveraging cutting-edge technology and creative approaches to unlock the full potential of African data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section team-section">
        <div className="section-content-wrapper">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            The AfriData Commons team is a diverse group of passionate developers, researchers, data scientists, and community advocates. We are united by a shared vision to build a data-driven future for Africa.
          </p>
          <div className="team-grid">

            {/* Dr. Lawrence Nderu's Team Member Card */}
            <div className="team-member-card">
              <img src={lnProfile} alt="Dr. Lawrence Nderu" className="team-member-avatar" />
              <h3 className="team-member-name">Dr. Lawrence Nderu</h3>
              <p className="team-member-role">Project Investigator, Founder - JHUB Africa</p>
            </div>


             {/* Felix Ombongi Ongaro's Team Member Card */}
             <div className="team-member-card">
              <img src={felixProfile} alt="Felix Ombongi Ongaro" className="team-member-avatar" />
              <h3 className="team-member-name">Felix Ombongi Ongaro</h3>
              <p className="team-member-role">Team Lead, Backend Developer</p>
            </div>

            {/* Gem Mkaker's Team Member Card */}
            <div className="team-member-card">
              <img src={gemProfile} alt="Gem Mkaker" className="team-member-avatar" />
              <h3 className="team-member-name">Gem Maker</h3>
              <p className="team-member-role">Cybersecurity Specialist & Frontend Developer</p>
            </div>

            {/* IRKE KONZOLO's Team Member Card */}
            <div className="team-member-card">
              <img src={irkeProfile} alt="IRKE KONZOLO" className="team-member-avatar" />
              <h3 className="team-member-name">IRKE KONZOLO</h3>
              <p className="team-member-role">Frontend Developer</p>
            </div>

            {/* Joseph Kirika's Team Member Card */}
            <div className="team-member-card">
              <img src={josephProfile} alt="Joseph Kirika" className="team-member-avatar" />
              <h3 className="team-member-name">Joseph Kirika</h3>
              <p className="team-member-role">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;