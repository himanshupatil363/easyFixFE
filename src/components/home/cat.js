import React, { useState } from 'react';
import Svg from '../../assets/images/cat.svg'
import health from '../../assets/images/healthcare.svg'
import pack from '../../assets/images/box.svg'
import clean from '../../assets/images/cleaning.svg'
import tutor from '../../assets/images/teacher.svg'
import makeup from '../../assets/images/makeover.svg'
import appliance from '../../assets/images/settings.svg'
import plumb from '../../assets/images/plumber.svg'
const Cat = () => {
//   const[nav , setNav] = useState(true);
  return (
    <div className="Cat w-full h-screen bg-no-repeat " style={{ backgroundImage: `url(${Svg})`}} >
      <div className="flex justify-center">
        <div className="bg-white px-2 sm:px-40 py-10 mt-5 rounded-xl shadow-xl">
          <ul className="flex justify-center content-center mb-16 mt-5">
            <li className="mx-2 sm:mx-4">
            <div className="flex justify-center"><img className="h-16" src={pack} alt="" itemscope="" itemprop="image" /></div>
                <p>Moving &amp; Shifting</p>
            </li>
            <li className="mx-2 sm:mx-4">
            <div className="flex justify-center"><img class="h-16" src={clean} alt="" itemscope="" itemprop="image" />
            </div>
              <p>Cleaning &amp; Sanitization</p>
            </li>
            <li className="mx-2 sm:mx-4">
            <div className="flex justify-center"><img class="h-16" src={tutor} alt="" itemscope="" itemprop="image" /></div>
               <p>Tutors &amp; Mentors</p>              
            </li>
            <li className="mx-2 sm:mx-4">
              <div className="flex justify-center">
              <img class="h-16" src={makeup} alt="" itemscope="" itemprop="image" /></div>
              <p>Makeup &amp; Hairstyling</p>
            </li>
          </ul> 
          <ul className="sm:mx-4 flex justify-center content-center mb-5">
            <li className="sm:mx-4">
            <div className="flex justify-center"><img className="h-16" src={health} alt="" itemscope="" itemprop="image" /></div>
                Health &amp; Wellness
            </li>
            <li className="sm:mx-4">
            <div className="flex justify-center"><img class="h-16" src={appliance} alt="" itemscope="" itemprop="image" /></div>
               <p>Appliance Repairs</p>
            </li>
            <li className="sm:mx-4">
            <div className="flex justify-center"><img class="h-16" src={plumb} alt="" itemscope="" itemprop="image" /></div>
                <p>Electricians &amp; Plumbers</p>
            </li>
          </ul> 
        </div> 
      </div>
    </div>
  );
}
export default Cat;
