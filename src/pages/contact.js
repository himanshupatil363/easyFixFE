import React from 'react';
import Hero from '../components/contact/hero'
import Message from '../components/contact/message'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Contact() {
  return (
    <div className="Contact bg-primary">
      <Navbar />
      <Hero />
      <Message />
      <Footer />
    </div>
  );
}
export default Contact;