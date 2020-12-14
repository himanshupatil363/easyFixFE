import React, { useState } from 'react';
import Svg from '../../assets/images/cat.svg'
const Cat = () => {
//   const[nav , setNav] = useState(true);
  return (
    <div className="Cat w-full h-screen bg-no-repeat " style={{ backgroundImage: `url(${Svg})`}} >
      <div className="flex justify-center">
        <div className="bg-white px-2 sm:px-40 py-10 mt-5 rounded-xl shadow-xl">
          <ul className="flex justify-center">
            <li className="mx-2 sm:mx-4">
                Moving & Shifting
            </li>
            <li className="mx-2 sm:mx-4">
                Cleaning & Sanitization
            </li>
            <li className="mx-2 sm:mx-4">
                Tutors & Mentors              
            </li>
            <li className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
            <img class="" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/luminosity/1607594936794-9e5258.png" alt="" itemscope="" itemprop="image" />
                <p>Makeup & Hairstyling</p>
            </li>
          </ul> 
          <ul className="flex justify-center pt-10">
            <li className="mx-2 sm:mx-4">
                Health & Wellness
            </li>
            <li className="mx-2 sm:mx-4">
                Repairs
            </li>
            <li className="mx-2 sm:mx-4">
                Electricians & Plumbers              
            </li>
           
          </ul> 
        </div> 
      </div>
    </div>
  );
}
export default Cat;
