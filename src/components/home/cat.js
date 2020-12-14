import React, { useState } from 'react';
import Svg from '../../assets/images/cat.svg'
import health from '../../assets/images/healthcare.svg'
const Cat = () => {
//   const[nav , setNav] = useState(true);
  return (
    <div className="Cat w-full h-screen bg-no-repeat " style={{ backgroundImage: `url(${Svg})`}} >
      <div className="flex justify-center">
        <div className="bg-white px-2 sm:px-40 py-10 mt-5 rounded-xl shadow-xl">
          <ul className="flex justify-center">
            <li className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
                Moving & Shifting
            </li>
            <li className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
            <img class="" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="" itemscope="" itemprop="image" />
              <p>Cleaning & Sanitization</p>
            </li>
            <li className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
            <img class="" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72195ce0.png" alt="" itemscope="" itemprop="image" />
               <p>Tutors & Mentors</p>              
            </li>
            <li className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
            <img class="" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/luminosity/1607594936794-9e5258.png" alt="" itemscope="" itemprop="image" />
                <p>Makeup & Hairstyling</p>
            </li>
          </ul> 
          <ul className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
            <li className="mx-2 sm:mx-4">
            <img class="" src='(${health})' alt="" itemscope="" itemprop="image" />
                Health & Wellness
            </li>
            <li className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
            <img class="" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" alt="" itemscope="" itemprop="image" />
               <p>Appliance Repairs</p>
            </li>
            <li className="mx-2 sm:mx-4 flex-col justify-center align-items-center">
            <img class="" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" alt="" itemscope="" itemprop="image" />
                <p>Electricians & Plumbers</p>

            </li>
           
          </ul> 
        </div> 
      </div>
    </div>
  );
}
export default Cat;
