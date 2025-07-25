// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <>
      {/* REMOVE OR COMMENT OUT THIS LINE IF NAVBAR IS RENDERED IN APP.JS/LAYOUT: */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>Empower Africa with Open Data</h1>
          <p>Your gateway to transformative insights and collaborative solutions for African development.</p>
          <Link to="/features">
            <button className="hero-button">Discover Our Features</button>
          </Link>
        </div>
        <img src="/images/africa-data-illustration.svg" alt="Illustration of data collaboration in Africa" />
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h2 className="section-heading">Our Impact at a Glance</h2>
        <div className="stat-box">
          <h2>1.2K+</h2>
          <p>Datasets Shared</p>
        </div>
        <div className="stat-box">
          <h2>800+</h2>
          <p>Active Users</p>
        </div>
        <div className="stat-box">
          <h2>50+</h2>
          <p>Collaborative Projects</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-heading">How AfriData Commons Empowers You</h2>
        <div className="feature-box">
          <h3>Seamless Data Discovery</h3>
          <p>Easily explore and download high-quality datasets covering critical sectors like **health, agriculture, education, and economics**, all vital for sustainable African development.</p>
        </div>
        <div className="feature-box">
          <h3>Foster Collaboration & Insights</h3>
          <p>Engage with a vibrant community of researchers, policymakers, and developers. **Share insights, discuss methodologies, and collaborate on data-driven solutions** to real-world African challenges.</p>
        </div>
        <div className="feature-box">
          <h3>Unrestricted Open Access</h3>
          <p>Access a wealth of open datasets and powerful analytical tools **without barriers**. Our platform is designed for **maximum accessibility**, empowering anyone to contribute to and benefit from African data.</p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Unlock Africa's Potential with Data?</h2>
        <Link to="/commons">
          <button className="cta-button">Access the Commons App</button>
        </Link>
      </section>

    </>
  );
};

export default Home;