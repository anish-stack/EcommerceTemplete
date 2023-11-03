import React from 'react';
import './AboutUsPage.css'; // Create a separate CSS file for styling
import Three from '../threeCard/Three';
import MetaData from '../Meta/MetaData';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">

        <MetaData title="About-us" />

        <Three/>

        
      <section className="about-story about-story1">
        <div className="story-content">
        <h2>Our Journey Begins</h2>
          <p>
            DevGear started as a dream shared by a group of passionate developers. We wanted to create a place where fellow developers could find the best tools and resources to excel in their craft.
          </p>
        </div>
        <img src="https://i.ibb.co/HHJSppD/journey.png" alt="Placeholder Image 1" />
      </section>

      <section className="about-story about-story2">
        <img src="https://i.ibb.co/WcJMmyb/quality.png" alt="Placeholder Image 2" />
        <div className="story-content">
        <h2>Connecting with Customers</h2>
          <p>
            We believe in fostering a strong bond with our customers. Your feedback and suggestions drive us to continually improve our offerings. Join our community and be a part of our coding journey!
          </p>
        </div>
      </section>

      <section className="about-story about-story3">
        <div className="story-content">
          <h2>Connecting with Customers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo justo ac lacinia bibendum.
          </p>
        </div>
        <img src="https://i.ibb.co/p1FS6zF/cust.png" alt="Placeholder Image 3" />
      </section>
    </div>
  );
};

export default AboutUsPage;
