import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './styles/homepage.css';

import background1 from './assets/img/background1.jpg';
import background2 from './assets/img/background2.jpg';
import background3 from './assets/img/background3.jpg';
import logo from './assets/img/logo3.png';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [background1, background2, background3];

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);

    return () => clearInterval(autoSlideInterval); // Cleanup interval on unmount
  }, [currentSlide]);

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const handleScroll = () => {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className='header'>
        <nav className='nav'>
          <div className='logo-m'>
            <img src={logo} alt='FarmEase Logo' />
          </div>
          <div className='auth-links'>
            {/* Use Link for navigation */}
            <Link to='/login'>Login</Link>
            <Link to='/register'>Sign Up</Link>
          </div>
          <div className='nav-center'>
            {/* Internal links remain as anchor tags for smooth scrolling */}
            <a href='#features'>Features</a>
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
          </div>
        </nav>
      </header>

      {/* Slideshow Container */}
      <div className='slideshow-container'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}

        <div
          className='slide-arrow prev'
          onClick={() => showSlide(currentSlide - 1)}
        >
          <i className='fas fa-chevron-left'></i>
        </div>
        <div
          className='slide-arrow next'
          onClick={() => showSlide(currentSlide + 1)}
        >
          <i className='fas fa-chevron-right'></i>
        </div>

        <div className='hero-content'>
          <h1>Smart Farm Management Solutions</h1>
          <p>
            Streamline your farming operations with our innovative management
            system
          </p>
          {/* Use Link for CTA button */}
          <Link to='/login' className='cta-button'>
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section id='features' className='features-section'>
        <h2>Features</h2>
        <div className='features-list'>
          <div className='feature-item'>
            <i className='fas fa-seedling'></i>
            <h3>Efficient Crop Management</h3>
            <p>
              Track crop growth stages, monitor soil health, and optimize yield
              with our advanced tools.
            </p>
          </div>
          <div className='feature-item'>
            <i className='fas fa-chart-line'></i>
            <h3>Real-Time Data Analysis</h3>
            <p>
              Get insights on production data and weather forecasts to make
              informed decisions.
            </p>
          </div>
          <div className='feature-item'>
            <i className='fas fa-water'></i>
            <h3>Water Management</h3>
            <p>
              Manage irrigation schedules effectively to save water and reduce
              costs.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Us</h2>
        <div className='about-content'>
          <p>
            FunFarm is dedicated to revolutionizing farm management. Our
            platform combines the latest in agricultural technology and
            data-driven insights to empower farmers around the world. With
            FarmEase, managing your farm becomes a seamless and efficient
            experience.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 FarmEase. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default App;
