import React from 'react';
import HomeSvg from '../components/home/mainsvg'
import Cat from '../components/home/cat'
import About from '../components/home/about'
function Home() {
  return (
    <div className="Home">
      <HomeSvg />
      <Cat />
      <About />
    </div>
  );
}
export default Home;
