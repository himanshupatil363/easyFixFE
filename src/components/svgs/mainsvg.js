import React from 'react';
import Svg from '../../assets/images/main.svg'
function MainSvg() {
  return (
    <div className="MainSvg bg-primary flex justify-center pt-2">
      <div className=" h-screen">
          <img src={Svg} alt="svg" />
      </div>
    </div>
  );
}
export default MainSvg;
