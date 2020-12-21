import React from 'react';
import { NavLink} from 'react-router-dom';
import Img from '../../assets/images/aboutimg.jpg'

const About = () => {
  return (
    <div className="About bg-cover text-white bg-no-repeat min-h-screen w-full py-44" style={{ backgroundImage:`url(${Img})`}}>
      <div className="bg-gray-900 border-gray-400 border-2 bg-opacity-25 rounded-xl shadow-2xl mx-40 px-24" style={{backdropFilter: `blur(10px)`}}>
        <div className="flex justify-center">
              <p className=" font-bold text-5xl my-16 mt-20">About Us</p>
        </div>
        <div className="container flex justify-center text-xl text-center">
          <p>Like all good things, the idea of EasyFix was born out of necessity. When you need help with small but important household chores, isn't it practically impossible to find trusted providers, who deliver consistently impeccable service, on time? Yes, that happened with us too. All the time. After trying dozens of other services which were just glorified directories, we decided to build EasyFix. EasyFix is the most convenient and hassle free way to get your housework done.</p>
        </div>
        <div className="flex justify-center py-20">
             <NavLink to="/about" className="bg-white text-gray-500 rounded-xl px-10 py-3 text-lg  duration-1000  hover:bg-dull hover:text-white ">Know More</NavLink>
        </div>
      </div>
    </div>
  );
}
export default About;
