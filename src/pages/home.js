import React from 'react';
import HomeSvg from '../components/home/mainsvg'
import Cat from '../components/home/cat'
import About from '../components/home/about'
import Tweets from '../components/home/tweets'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <HomeSvg />
      <Cat />
      <Tweets />
      <About />
      <Footer />
    </div>
  );
}
export default Home;
