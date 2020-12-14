import React, { useState } from 'react';
import up from '../../assets/images/uparr.svg'
import down from '../../assets/images/downarr.svg'

const About = () => {
//   const[nav , setNav] = useState(true);
  return (
    <div className="About w-full">
      <div className="container flex justify-between">
        <div className="ml-12 sm:ml-96 flex flex-wrap content-center justify-center">
            <p className="border-2  font-bold text-indigo-800 border-indigo-800 rounded-lg px-7 py-2">Customer</p>
        </div>
        <div className="flex-col justify-center"><p>one</p>
        <p>two</p>
        <p>three</p></div>
        <div className="mr-12 sm:mr-96 flex flex-wrap content-center justify-center"><p>three</p></div>
      </div>
    </div>
  );
}
export default About;
