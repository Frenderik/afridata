// src/pages/Contact.jsx - UPDATED WITH REAL SOCIAL MEDIA ICONS
import React from "react";
import '../styles/contact.css';
// Import specific icons from react-icons
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'; // For LinkedIn and Facebook
import { FaXTwitter } from 'react-icons/fa6'; // For the new Twitter/X icon

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Let's Connect and Collaborate</h1>
          <p className="contact-hero-subtitle">
            We're eager to hear from you! Whether you have an inquiry, need support, or want to explore partnership opportunities, reach out to AfriData Commons.
          </p>
        </div>
      </section>

      {/* Main Content: Contact Info & Form - Two Column Layout */}
      <section className="contact-main-content">
        <div className="contact-content-wrapper">

          <div className="contact-grid">
            {/* Contact Information Card */}
            <div className="contact-info-card">
              <h2 className="contact-section-title">Our Details</h2>
              <p className="contact-section-description">Reach out to us through any of the following channels.</p>

              <div className="info-item">
                <div className="info-icon">📍</div> {/* Placeholder Icon for Location (no react-icon for this example, but you can add later) */}
                <div className="info-text">
                  <h4>Our Office</h4>
                  <p>
                    JHUB Africa<br />
                    JKUAT Main Campus<br />
                    Juja, Kenya
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div> {/* Placeholder Icon for Email */}
                <div className="info-text">
                  <h4>Email Us</h4>
                  <p><a href="mailto:info@afridatacommons.org">info@afridatacommons.org</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div> {/* Placeholder Icon for Phone */}
                <div className="info-text">
                  <h4>Call Us</h4>
                  <p><a href="tel:+254726428161">+254726428161</a></p>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="contact-form-card">
              <h2 className="contact-section-title">Send Us a Message</h2>
              <p className="contact-section-description">Fill out the form below, and we'll get back to you promptly.</p>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required placeholder="Gem Maker" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject (Optional)</label>
                  <input type="text" id="subject" name="subject" placeholder="Inquiry about data sharing" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="contact-content-wrapper">
          <h2 className="section-title">Find Our Office</h2>
          <p className="section-description">Visit us at JKUAT Main Campus for direct conversations and collaboration.</p>
          <div className="map-embed-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.329828236173!2d37.01456107471239!3d-1.0911762988947694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f451421e64627%3A0x6b87d2a58b5e2832!2sJHUB%20Africa!5e0!3m2!1sen!2ske!4v1716279934256!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JHUB Africa Location Map"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/JHUB+Africa/@-1.0911763,37.0145611,17z/data=!3m1!4b1!4m6!3m5!1s0x182f451421e64627:0x6b87d2a58b5e2832!8m2!3d-1.0911763!4d37.017136!16s%2Fg%2F11b681_3n0?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="view-map-button"
            >
              View Larger Map
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section - NOW WITH REAL ICONS */}
      <section className="social-media-section">
        <div className="contact-content-wrapper">
          <h2 className="section-title">Connect with Us Online</h2>
          <p className="section-description">Follow us on social media for the latest updates and discussions.</p>
          <div className="social-links">
            <a href="https://twitter.com/afridatacommons" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaXTwitter className="social-icon" /> {/* Twitter/X Icon */}
            </a>
            <a href="https://linkedin.com/company/afridatacommons" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaLinkedinIn className="social-icon" /> {/* LinkedIn Icon */}
            </a>
            <a href="https://facebook.com/afridatacommons" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaFacebookF className="social-icon" /> {/* Facebook Icon */}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;