import React from 'react';
import Svg from'./assets/images/main.svg'
function Home() {
  return (
    <div className="App">
      <div className="bg-primary flex justify-center h-screen">
          <img src={Svg} alt="svg" />
      </div>
    </div>
  );
}
export default Home;
