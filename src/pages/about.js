import React from 'react';
import Content from '../components/AboutUs/content';
import Map from '../components/AboutUs/map';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function About() {
  return (
    <div className="About">
      <Navbar />
      <Content />
      <Map /> 
      <Footer />
    </div>
  );
}
export default About; 