import React, { useState } from 'react';
import { Star, Phone, Mail, MapPin, Instagram, Check, Users, Shield, Droplets, Heart } from 'lucide-react';
import './App.css';
import logo from './logo_lasteamers.svg';

const App = () => {
  const [currentPlan, setCurrentPlan] = useState('monthly');

  const services = [
    {
      title: "Couches",
      description: "Deep clean and restore your couch's original beauty",
      image: "🛋️"
    },
    {
      title: "Beds", 
      description: "Sanitize and refresh your mattress for better sleep",
      image: "🛏️"
    },
    {
      title: "Chairs",
      description: "Revitalize your chairs with our expert cleaning", 
      image: "🪑"
    },
    {
      title: "Carpets",
      description: "Restore carpets to their pristine condition",
      image: "🏠"
    }
  ];

  const features = [
    {
      icon: <Droplets className="feature-icon blue" />,
      title: "Removes dirt and odors",
      description: "Comprehensive cleaning that eliminates stubborn stains and unpleasant smells"
    },
    {
      icon: <Shield className="feature-icon green" />,
      title: "Furniture protection", 
      description: "Gentle cleaning techniques that preserve your furniture's quality"
    },
    {
      icon: <Heart className="feature-icon red" />,
      title: "Non toxic shampoo",
      description: "Eco friendly cleaning solutions safe for your home"
    },
    {
      icon: <Users className="feature-icon purple" />,
      title: "Pet and kid friendly",
      description: "Safe cleaning methods that protect your loved ones"
    }
  ];

  const plans = [
    {
      name: "Basic plan",
      price: currentPlan === 'monthly' ? 19 : 199,
      period: currentPlan === 'monthly' ? '/mo' : '/yearly',
      features: [
        "5% discount",
        "Priority booking", 
        "Cancel anytime"
      ],
      popular: false
    },
    {
      name: "Business plan",
      price: currentPlan === 'monthly' ? 29 : 299,
      period: currentPlan === 'monthly' ? '/mo' : '/yearly', 
      features: [
        "Flexible scheduling",
        "Basic support",
        "10% discount",
        "Priority booking"
      ],
      popular: true
    },
    {
      name: "Enterprise plan",
      price: currentPlan === 'monthly' ? 49 : 499,
      period: currentPlan === 'monthly' ? '/mo' : '/yearly',
      features: [
        "Personal manager",
        "Feature text goes here",
        "Feature text goes here", 
        "Feature text goes here",
        "Feature text goes here"
      ],
      popular: false
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="LA Steamers" className="logo-image" />
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#plans">Plans</a>
            <a href="#reviews">Reviews</a>
          </div>
          <button className="nav-btn">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Los Angeles Steam Cleaning</h1>
          <p className="hero-subtitle">
            Professional furniture and carpet cleaning with unbeatable savings. Our prices are 50% below market, and subscriptions offer even more discounts.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Book Now</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>What we clean</h2>
            <p>Professional cleaning for your home and office</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-emoji">{service.image}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="learn-more-btn">Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About us</h2>
            <p>Why choose LA Steamers for your cleaning needs</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <button className="learn-more-btn">Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Pricing plans</h2>
            <p>Choose the perfect plan for your cleaning needs</p>
            
            <div className="plan-toggle">
              <button 
                onClick={() => setCurrentPlan('monthly')}
                className={currentPlan === 'monthly' ? 'active' : ''}
              >
                Monthly
              </button>
              <button 
                onClick={() => setCurrentPlan('yearly')}
                className={currentPlan === 'yearly' ? 'active' : ''}
              >
                Yearly
              </button>
            </div>
          </div>
          
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="price-amount">${plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                  {currentPlan === 'monthly' && (
                    <p className="yearly-price">or ${plan.price * 10.4} yearly</p>
                  )}
                </div>
                
                <div className="features-list">
                  <p className="features-title">Includes:</p>
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <Check className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`pricing-btn ${plan.popular ? 'popular' : ''}`}>
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <div className="container">
          <h2>Social</h2>
          <p className="social-subtitle">Leave a video review and get a discount!</p>
          <p className="social-text">
            Share your transformation in Instagram stories and tag @la.steamers to receive 10% off your next cleaning.
          </p>
          <div className="social-buttons">
            <button className="btn social-btn">
              <Instagram className="icon" />
              Follow us
            </button>
            <button className="btn social-btn-outline">Learn more</button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="container">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="star-icon" />
            ))}
          </div>
          <blockquote>
            "I had most of my furniture stored away for almost two years, and it was completely destroyed. A friend recommended LA Steamers... They brought my white furniture back to life!"
          </blockquote>
          <div className="testimonial-author">Francesca Farago</div>
          <div className="testimonial-role">Influencer</div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="container">
          <h2>Support our service stars: leave a tip!</h2>
          <p>
            Our cleaning technicians go above and beyond to deliver celebrity-quality results.
          </p>
          <div className="support-buttons">
            <button className="btn tip-btn">Leave a tip</button>
            <button className="btn support-btn-outline">Learn more</button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations-section">
        <div className="container">
          <div className="section-header">
            <h2>Service areas</h2>
            <p>We provide professional cleaning services across Los Angeles</p>
          </div>
          
          <div className="locations-grid">
            <div className="location-card">
              <h3>Los Angeles</h3>
              <p>Serving all neighborhoods in LA county</p>
              <button className="location-btn">
                <MapPin className="icon" />
                Get directions
              </button>
            </div>
            
            <div className="location-card">
              <h3>Surrounding areas</h3>
              <p>Extending our premium cleaning services to nearby regions</p>
              <button className="location-btn">
                <MapPin className="icon" />
                Get directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Coming soon - work with LA Steamers</h2>
          <p>
            Join our growing network of professional cleaning technicians and expand your business.
          </p>
          <div className="partners-buttons">
            <button className="btn partners-btn">Apply now</button>
            <button className="btn partners-btn-outline">Learn more</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <img src={logo} alt="LA Steamers" className="footer-logo" />
              <h3>Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>1234 Clean St, Los Angeles, CA 90001</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+1 323 948 2600</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>info@lasteamers.com</span>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#plans">Plans</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookies Settings</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 LA Steamers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;