import React from 'react';
import HomeSvg from '../components/home/mainsvg'
import Cat from '../components/home/cat'
import About from '../components/home/about'
import Tweets from '../components/home/tweets'
function Home() {
  return (
    <div className="Home">
      <HomeSvg />
      <Cat />
      <Tweets />
      <About />
    </div>
  );
}
export default Home;
