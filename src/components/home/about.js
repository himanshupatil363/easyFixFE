import React, { useState } from 'react';
import up from '../../assets/images/uparr.svg'
import down from '../../assets/images/downarr.svg'

const About = () => {
//   const[nav , setNav] = useState(true);
  return (
    <div className="About w-full">
      <div className="container flex justify-between">
        <div className="ml-12 sm:ml-96 flex flex-wrap content-center justify-center">
            <p className="border-2  font-bold text-blue-400 border-blue-400 rounded-full px-7 py-2">Customer</p>
        </div>
        <div className="flex-col justify-center">
        <img className="h-16 w-full justify-center text" src={up} />
        <p className="border-2 text-white bg-dull font-extrabold text-4xl flex justify-center rounded-full px-7 py-2 sm:text-white">
               Easy<b className="text-danger">Fix</b></p>
        <img className="h-16 w-full" src={down}/>
        </div>
        <div className="mr-12 sm:mr-96 flex flex-wrap content-center justify-center">
            <p className="border-2  font-bold text-green-500 border-green-500 rounded-full px-7 py-2">Provider</p>
        </div>
      </div>
    </div>
  );
}
export default About;
