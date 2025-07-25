// src/pages/Features.jsx - UPDATED WITH REACT ICONS
import React from 'react';
import '../styles/features.css';
// Import specific icons from react-icons
import {
  FaCloudUploadAlt, FaUsers, FaCode, FaShieldAlt, FaTools, FaMobileAlt, // For Core Features
  FaSearch, FaHandshake, FaUserShield, FaChartLine // For Problems/Solutions
} from 'react-icons/fa';

const Features = () => {
  return (
    <div className="features-page"> {/* Main wrapper for the features page */}

      {/* Features Hero Section */}
      <section className="features-hero-section">
        <div className="features-hero-content">
          <h1 className="features-hero-title">Unlock the Power of Data with AfriData Commons</h1>
          <p className="features-hero-subtitle">
            Discover the robust functionalities and innovative tools designed to enhance your data sharing, collaboration, and analysis experience.
          </p>
        </div>
      </section>

      {/* Main Features Grid Section */}
      <section className="features-grid-section">
        <div className="features-grid-container">
          <h2 className="section-title">Core Platform Features</h2>
          <p className="section-description">Explore what makes AfriData Commons a leading open data platform for Africa.</p>

          <div className="features-grid">
            {/* Feature Item: Dataset Upload and Sharing */}
            <div className="feature-card">
              <FaCloudUploadAlt className="feature-icon" /> {/* Icon for Upload/Sharing */}
              <h3 className="feature-card-title">Dataset Upload & Sharing</h3>
              <p className="feature-card-description">
                Seamlessly upload, manage, and securely share your datasets with a broad community. Experience intuitive data publication.
              </p>
            </div>

            {/* Feature Item: Community Interaction */}
            <div className="feature-card">
              <FaUsers className="feature-icon" /> {/* Icon for Community */}
              <h3 className="feature-card-title">Vibrant Community Interaction</h3>
              <p className="feature-card-description">
                Engage directly with researchers, policymakers, and innovators. Collaborate on projects, share insights, and expand your professional network.
              </p>
            </div>

            {/* Feature Item: Open API Access */}
            <div className="feature-card">
              <FaCode className="feature-icon" /> {/* Icon for API */}
              <h3 className="feature-card-title">Open API Access</h3>
              <p className="feature-card-description">
                Integrate AfriData Commons with your preferred third-party tools and applications using our flexible RESTful APIs for seamless data flow.
              </p>
            </div>

            {/* Feature Item: Secure User Authentication */}
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" /> {/* Icon for Security */}
              <h3 className="feature-card-title">Robust Security & Authentication</h3>
              <p className="feature-card-description">
                Benefit from secure, role-based user authentication and encrypted logins, ensuring both data integrity and user privacy.
              </p>
            </div>

            {/* Feature Item: Admin Controls */}
            <div className="feature-card">
              <FaTools className="feature-icon" /> {/* Icon for Admin Tools */}
              <h3 className="feature-card-title">Comprehensive Admin Tools</h3>
              <p className="feature-card-description">
                Administrators can efficiently approve datasets, manage user permissions, and monitor platform activity with ease and full control.
              </p>
            </div>

            {/* Feature Item: Mobile Friendly */}
            <div className="feature-card">
              <FaMobileAlt className="feature-icon" /> {/* Icon for Mobile */}
              <h3 className="feature-card-title">Mobile-First Responsiveness</h3>
              <p className="feature-card-description">
                Enjoy an optimized and seamless experience on all devices, from desktops to tablets and smartphones, ensuring accessibility anywhere.
              </p>
            <div className="feature-card-bg-overlay"></div> {/* Visual overlay */}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Problems We Solve & Our Solutions */}
      <section className="solutions-section">
        <div className="features-grid-container"> {/* Reusing container for max-width and centering */}
          <h2 className="section-title">Problems We Solve & Our Solutions</h2>
          <p className="section-description">
            AfriData Commons directly addresses key challenges in Africa's data landscape by providing robust and ethical solutions.
          </p>

          <div className="solutions-grid">
            {/* Problem-Solution Card 1: Data Scarcity & Fragmentation */}
            <div className="solution-card">
              <FaSearch className="solution-icon" /> {/* Icon for Data Scarcity */}
              <h3 className="solution-title">Data Scarcity & Fragmentation</h3>
              <p className="solution-description">
                Problem: Critical data is often scattered, inaccessible, or non-existent across various sources, hindering comprehensive analysis and development.<br/>
                Solution: We provide a centralized, growing repository for diverse datasets, making essential information readily available and discoverable for everyone.
              </p>
            </div>

            {/* Problem-Solution Card 2: Limited Collaboration & Silos */}
            <div className="solution-card">
              <FaHandshake className="solution-icon" /> {/* Icon for Collaboration */}
              <h3 className="solution-title">Limited Collaboration & Silos</h3>
              <p className="solution-description">
                Problem: Researchers, organizations, and communities struggle to collaborate effectively due to isolated data and a lack of shared platforms.<br/>
                Solution: Our platform fosters a vibrant community environment, enabling secure data sharing, discussion forums, and collaborative project spaces that break down silos.
              </p>
            </div>

            {/* Problem-Solution Card 3: Data Trust & Integrity Concerns */}
            <div className="solution-card">
              <FaUserShield className="solution-icon" /> {/* Icon for Trust/Integrity */}
              <h3 className="solution-title">Data Trust & Integrity Concerns</h3>
              <p className="solution-description">
                Problem: Doubts about data quality, authenticity, ethical handling, and privacy can impede its adoption and impact across sectors.<br/>
                Solution: We implement stringent data governance, robust security measures, and clear ethical guidelines to build and maintain unwavering trust in our data.
              </p>
            </div>

            {/* Problem-Solution Card 4: Difficulty in Policy & Decision Making */}
            <div className="solution-card">
              <FaChartLine className="solution-icon" /> {/* Icon for Decision Making */}
              <h3 className="solution-title">Informed Policy & Decision Making</h3>
              <p className="solution-description">
                Problem: Decision-makers and policymakers often lack timely, reliable, and consolidated data to formulate effective strategies.<br/>
                Solution: By centralizing and structuring verified data, we empower evidence-based policy formulation and strategic decision-making across all sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Features;