import React from 'react';
import { NavLink} from 'react-router-dom';
import Img from '../../assets/images/aboutimg.jpg'

const About = () => {
  return (
    <div className="About w-full">
      <div className="flex justify-center my-10 mt-20">
            <p className=" font-bold text-5xl">About Us</p>
      </div>
      <div className="container flex justify-center text-2xl">
        <p>Like all good things, the idea of EasyFix was born out of necessity. When you need help with small but important household chores, isn't it practically impossible to find trusted providers, who deliver consistently impeccable service, on time? Yes, that happened with us too. All the time. After trying dozens of other services which were just glorified directories, we decided to build EasyFix. EasyFix is the most convenient and hassle free way to get your housework done.</p>
      </div>
      <div className="flex justify-center py-20">
           <NavLink to="/about" className="text-primary rounded-full px-10 py-3 text-lg font-bold border-4 border-primary hover:bg-primary hover:text-white duration-1000">Know More</NavLink>
      </div>
      <div className=" h-screen bg-contain bg-no-repeat " style={{ backgroundImage:`url(${Img})`}}>
        {/* <div className="bg-gray-300 border-gray-300 border-2 bg-opacity-25 px-2 sm:px-32 py-2 sm:py-6 mt-5 rounded-xl shadow-2xl" style={{backdropFilter: `blur(10px)`}}>hello</div> */}
        <div classNa="">hello</div>
      </div>
    </div>
  );
}
export default About;
