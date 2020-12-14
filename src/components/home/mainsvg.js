import React from 'react';
import Svg from '../../assets/images/main.svg'
import Typewriter from 'typewriter-effect';
function MainSvg() {
  return (
    <div className="MainSvg bg-primary sm:flex justify-between">
      <div className="text-3xl sm:text-5xl text-white pt-1 sm:pt-0 mx-10 sm:mx-0 sm:my-24 sm:ml-40">
        <div className="text-5xl sm:text-7xl mt-10 font-bold text-white tracking-wide">
        <Typewriter
             options={{
                 strings: ['Beautician ,', 'Painter ,','Plumber ,','Carpenter ,','Tutor ,','Cleaner ,','Designer ,'],
                 autoStart: true,
                 loop: true,
                 cursorClassName: 'Typewriter__cursor text-danger font-normal',

             }}
         />
         </div>
         <p className="mt-1 sm:mt-14 text-dull font-bold">At your doorstep.</p>
      </div>
      
      <div className="pt-5">
          <img src={Svg} alt="svg" />
      </div>
    </div>
  );
}
export default MainSvg;
