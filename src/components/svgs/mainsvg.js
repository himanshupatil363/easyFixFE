import React from 'react';
import Svg from '../../assets/images/main.svg'
import Typewriter from 'typewriter-effect';
function MainSvg() {
  return (
    <div className="MainSvg bg-primary sm:flex justify-between">
      <div className="text-5xl  text-white pt-10 sm:pt-0 sm:my-24 sm:ml-40">
        <div className="text-7xl mt-10 font-bold text-danger">
        <Typewriter
             options={{
                 strings: ['Plumber', 'Carpainter'],
                 autoStart: true,
                 loop: true,
             }}
         />
         </div>
         <p className="mt-14">At your doorstep</p>
      </div>
      
      <div className="pt-5">
          <img src={Svg} alt="svg" />
      </div>
    </div>
  );
}
export default MainSvg;
