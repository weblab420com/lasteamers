import React from 'react';
import './App.css';
import logo from './logo_lasteamers.svg';
import backgroundImage from './background_mainscreen.png';
import armchairImage from './armchair.svg';
import celebrityImage from './celebrity.svg';

const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="LA Steamers" className="logo-image" />
          </div>
          <div className="nav-right">
            <span className="language-toggle">ENG</span>
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <section className="hero-main">
        <div className="hero-background">
          <img src={backgroundImage} alt="Background" className="background-image" />
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Los Angeles<br />
              Steam Cleaning
            </h1>
            <p className="hero-subtitle">
              Professional steam cleaning<br />
              services with double savings
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary">Book Now</button>
              <button className="btn-secondary">
                <span className="fire-icon">🔥</span>
                Subscribe & Save
              </button>
            </div>
          </div>
          
          <div className="hero-images">
            <div className="armchair-container">
              <img src={armchairImage} alt="Clean Armchair" className="armchair-image" />
            </div>
            
            <div className="celebrity-container">
              <img src={celebrityImage} alt="Celebrity testimonials" className="celebrity-image" />
              <div className="celebrity-text">
                <span className="celebrity-label">Chosen by 1111+ Celebrities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;