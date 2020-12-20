import React from 'react';
import svg from '../../assets/images/cont.svg'
import envelope from '../../assets/images/envelope.svg'
import phone from '../../assets/images/phone.svg'
import placeholder from '../../assets/images/placeholder.svg'
function Hero() {
  return (
    <div className="Hero bg-cover h-screen" style={{ backgroundImage: `url(${svg})`}}>
        <div className="  flex justify-center pt-40 mb-36 ">
            <p className="text-primary text-7xl font-bold">Contact</p>
        </div>
        <div className="">
          <ul className="flex justify-between mx-64 ">
            <li className="bg-gray-300 flex-column content-center justify-center border-gray-300 border-2 bg-opacity-25 rounded-xl shadow-2xl p-10" style={{backdropFilter: `blur(6px)`}}>
              <img className=" h-14 w-full" src={envelope}/>
              <p className="text-center mt-4  text-white">Email Id</p>
            </li>
            <li className="bg-gray-300 flex-column content-center justify-center border-gray-300 border-2 bg-opacity-25 rounded-xl shadow-2xl p-10" style={{backdropFilter: `blur(6px)`}}>
              <img className=" h-14 w-full  "  src={phone}/>
              <p className="text-center mt-4  text-white">Phone number</p>
            </li>
            <li className="bg-gray-300 flex-column content-center justify-center border-gray-300 border-2 bg-opacity-25 rounded-xl shadow-2xl p-10" style={{backdropFilter: `blur(6px)`}}>
              <img className=" h-14 w-full " src={placeholder} />
              <p className="text-center mt-4 text-white">Address </p>
            </li>
          </ul>
        </div>
    </div>
  );
}
export default Hero;