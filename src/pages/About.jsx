import React from 'react';
import './CSS/About.css'; // Import your CSS file for styling
import meditationImage from '../components/Assets/banner_blog.png'; // Adjust the path as needed

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        
        <p>
          Welcome to our meditation and yoga community! We are dedicated to providing a peaceful
          and mindful space for individuals seeking relaxation, balance, and well-being.
        </p>
        <p>
          Our mission is to inspire and guide you on your journey towards a healthier and more
          harmonious life through the practices of meditation and yoga.
        </p>
        <p>
          Whether you are a beginner or an experienced practitioner, our diverse range of resources,
          classes, and articles are tailored to support your personal growth and mindfulness.
        </p>
      </div>
      <div className="about-image">
        <img src={meditationImage} alt="Meditation" />
      </div>
    </div>
  );
};

export default About;

