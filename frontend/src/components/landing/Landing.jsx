import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find Your Perfect PG</h1>
            <p>Discover comfortable and affordable paying guest accommodations near you. Safe, verified, and hassle-free booking.</p>
            <div className="hero-buttons">
              <Link to="/login" className="cta-primary">
                Get Started
              </Link>
              <Link to="/register" className="cta-secondary">
                Sign Up Free
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="./images/hero/h1.png" alt="PG Accommodation" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose RentUP?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-check"></i>
              </div>
              <h3>Verified Properties</h3>
              <p>All PG properties are verified and inspected for quality and safety standards.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-search"></i>
              </div>
              <h3>Easy Search</h3>
              <p>Find PGs with advanced filters - location, price, amenities, and room types.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-credit-card"></i>
              </div>
              <h3>Secure Payments</h3>
              <p>Safe and secure online payments with multiple payment options available.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support to help you with any queries or issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Verified PGs</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Happy Students</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Cities Covered</p>
            </div>
            <div className="stat-item">
              <h3>4.8★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect PG?</h2>
            <p>Join thousands of students who have found their ideal accommodation through RentUP</p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-primary">
                Sign Up Now
              </Link>
              <Link to="/login" className="cta-secondary">
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="./images/logo.png" alt="RentUP" />
              <p>Your trusted partner for PG accommodations</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#careers">Careers</a>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <a href="#help">Help Center</a>
                <a href="#safety">Safety</a>
                <a href="#terms">Terms</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 RentUP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;