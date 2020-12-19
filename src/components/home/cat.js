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
  return (
    <div className="Cat text-xl w-full bg-no-repeat " style={{ backgroundImage: `url(${Svg})`}} >
      <div className="flex justify-center">
        <div className="bg-gray-300 border-gray-300 border-2 bg-opacity-25 px-2 sm:px-32 py-2 sm:py-6 mt-5 rounded-xl shadow-2xl" style={{backdropFilter: `blur(10px)`}}>
          <ul className="flex justify-center content-center mb-8 sm:mb-16 mt-5">
            <li className="mx-2 sm:mx-4">
            <div className="flex justify-center"><img className="h-12 sm:h-16" src={pack} alt="" itemscope="" itemprop="image" /></div>
                <p className="font-regular mt-3">Moving &amp; Shifting</p>
            </li>
            <li className="mx-2 sm:mx-4">
            <div className="flex justify-center"><img className="h-12 sm:h-16" src={clean} alt="" itemscope="" itemprop="image" />
            </div>
              <p className="font-regular  mt-3">Cleaning &amp; Sanitization</p>
            </li>
            <li className="mx-2 sm:mx-4">
            <div className="flex justify-center"><img className="h-12 sm:h-16" src={tutor} alt="" itemscope="" itemprop="image" /></div>
               <p className="font-regular  mt-3">Tutors &amp; Mentors</p>              
            </li>
            <li className="mx-2 sm:mx-4">
              <div className="flex justify-center">
              <img class="h-12 sm:h-16" src={makeup} alt="" itemscope="" itemprop="image" /></div>
              <p className="font-regular  mt-3">Makeup &amp; Hairstyling</p>
            </li>
          </ul> 
          <ul className="flex justify-center mb-5 mx-4">
            <li className="mx-4">
            <div className="flex justify-center"><img className="h-12 sm:h-16" src={health} alt="" itemscope="" itemprop="image" /></div>
            <p className="font-regular  mt-3">Health &amp; Wellness</p>
            </li>
            <li className="mx-4">
            <div className="flex justify-center"><img className="h-12 sm:h-16" src={appliance} alt="" itemscope="" itemprop="image" /></div>
               <p className="font-regular  mt-3">Appliance Repairs</p>
            </li>
            <li className="mx-4">
            <div className="flex justify-center"><img className="h-12 sm:h-16" src={plumb} alt="" itemscope="" itemprop="image" /></div>
                <p className="font-regular  mt-3">Electricians &amp; Plumbers</p>
            </li>
          </ul> 
        </div> 
      </div>
    </div>
  );
}
export default Cat;
