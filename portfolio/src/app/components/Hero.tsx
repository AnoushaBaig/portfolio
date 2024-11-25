import React from 'react';
import '../styles/hero.css'; // Import custom CSS for styling 
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
            
          <h1 className="heading">Hello, I&apos;m Anousha Baig</h1>
          <p className="description">
            I&apos;m a passionate web developer with expertise in front-end technologies. I love building interactive and responsive websites. Let&apos;s collaborate!
          </p>
          <a href="#contact" className="cta-btn">Get in Touch</a>
        </div>
        <div className="image-content">
          <Image src="hijabi2.png" alt="Your Picture" className="hero-image"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
