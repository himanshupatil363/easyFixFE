import React from 'react';
import Content from '../components/AboutUs/content';
import about from '../assets/images/about.jpg';
function About() {
  return (
    <div className="About" className=" bg-cover" style={{ backgroundImage: `url(${about})` }}>
        <div className="flex justify-center text-white text-7xl font-bold py-10">About EasyFix</div>
        <Content /> 
    </div>
  );
}
export default About;