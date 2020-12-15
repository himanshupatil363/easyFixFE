import React, { useState } from 'react';
import up from '../../assets/images/uparr.svg'
import down from '../../assets/images/downarr.svg'
import customer from '../../assets/images/customer.svg'
import provider from '../../assets/images/provider.svg'
import { NavLink} from 'react-router-dom';

const About = () => {
  return (
    <div className="About w-full">
      <div className="flex justify-center my-20 mt-40">
            <p className=" font-bold text-5xl">About Us</p>
      </div>
      <div className="container flex justify-between">
        <div className="ml-12 sm:ml-48 flex flex-wrap content-center justify-center">
        <p className="text-center w-full mb-10 text-2xl">User</p>
            <img className=" h-64" src={customer}/>
        </div>
        <div className="flex-col justify-center ">
       
        <img className=" h-28 w-full justify-center  text mb-20" src={up} />
        <p className="border-2 text-white bg-dull font-extrabold text-4xl flex justify-center  py-10 sm:text-white">
               Easy<b className="text-danger">Fix</b></p>
        <img className="h-28 w-full mt-20" src={down}/>
        </div>
        <div className="mr-12 sm:mr-48 flex flex-wrap content-center justify-center">
        <p className="text-center w-full mb-10 text-2xl">Provider</p>
        <img className=" h-64" src={provider}/>
        </div>
      </div>
      <div className="flex justify-center my-20">
           <NavLink to="/about" className="text-ter rounded-full px-10 py-3 text-lg font-bold border-4 border-ter hover:bg-ter hover:text-white duration-1000">Know More</NavLink>
      </div>
    </div>
  );
}
export default About;
