import React from 'react';
import BannerPages from '../components/BannerPages';

const About = () => {
  return (

   <>
    <BannerPages itemOne={'About'} itemTwo={'Home'}/>
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      
      <section className="about-section">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-content">
          We are a dedicated team of professionals committed to delivering the best solutions to our clients. With years of experience in the industry, we strive to offer high-quality services and products to meet the diverse needs of our customers.
        </p>
      </section>
      
      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-content">
          Our mission is to empower businesses and individuals through innovative technology and personalized services. We aim to create a positive impact on the world by fostering creativity, collaboration, and efficiency.
        </p>
      </section>
      
      <section className="about-section">
        <h2 className="section-title">What We Do</h2>
        <p className="section-content">
          We offer a wide range of services, including web development, mobile app development, digital marketing, and consulting. Our team works closely with clients to deliver tailor-made solutions that drive growth and success.
        </p>
      </section>
      
      <section className="about-section">
        <h2 className="section-title">Why Choose Us</h2>
        <ul className="section-content">
          <li>Experienced and skilled professionals</li>
          <li>Customer-centric approach</li>
          <li>Cutting-edge technology solutions</li>
          <li>Proven track record of success</li>
          <li>Timely delivery and support</li>
        </ul>
      </section>
    </div>
   </>
  );
};

export default About;
