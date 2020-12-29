import React from 'react';
import svg from '../../assets/images/cont.svg'
import envelope from '../../assets/images/envelope.svg'
import phone from '../../assets/images/phone.svg'
import placeholder from '../../assets/images/placeholder.svg'
const Hero = () => {
  return (
    <div className="Hero bg-cover h-screen" style={{ backgroundImage: `url(${svg})`}}>
        <div className="  flex justify-center pt-32 mb-36 ">
            <p className=" border-b-4 bg-primary bg-opacity-30 text-gray-800 border-primary  text-5xl font-bold  p-2 px-4">Contact</p>
        </div>
        <div className="">
          <ul className="flex justify-between mx-40 ">
            <li className="bg-gray-300 flex-column content-center justify-center border-gray-300 border-2 bg-opacity-25 rounded-xl shadow-2xl p-10" style={{backdropFilter: `blur(6px)`}}>
              <img className=" h-14 w-full" src={envelope} alt=""/>
              <a href="mailto:easy0fix@gmail.com"><p className="text-center  text-white mt-10">easy0fix@gmail.com</p></a>
            </li>
            <li className="bg-gray-300 flex-column content-center justify-center border-gray-300 border-2 bg-opacity-25 rounded-xl shadow-2xl p-10" style={{backdropFilter: `blur(6px)`}}>
              <img className=" h-14 w-full " src={placeholder} alt="" />
             <a href="https://g.page/mit-wpu?share"><p className="text-center mt-4 text-white">Survey No, 124, Jijau Masaheb Marg, Kothrud,<br /> Pune, Maharashtra<br/> 411038</p></a>
            </li>
            <li className="bg-gray-300 flex-column content-center justify-center border-gray-300 border-2 bg-opacity-25 rounded-xl shadow-2xl p-10" style={{backdropFilter: `blur(6px)`}}>
              <img className=" h-14 w-full "  src={phone} alt=""/>
              <a href="tel:+91 9876543210"><p className="text-center mt-10 text-white">+91 9876543210</p></a>
            </li>
          </ul>
        </div>
    </div>
  );
}
export default Hero;