import React, { useState } from 'react';
import up from '../../assets/images/uparr.svg'
import down from '../../assets/images/downarr.svg'
import customer from '../../assets/images/customer.svg'
import provider from '../../assets/images/provider.svg'
import abback from '../../assets/images/abback.svg'
import { NavLink} from 'react-router-dom';
import autoprefixer from 'autoprefixer';

const About = () => {
  return (
    <div className="About w-full" style={{ 
      backgroundImage: `url(${abback})`,
      backgroundRepeat: 'no-repeat',
      position:'left',
    }}>
      <div className="flex justify-center my-10 mt-20">
            <p className=" font-bold text-5xl">About Us</p>
      </div>
      <div className="container flex justify-between">
        <div className="ml-12 sm:ml-48 flex flex-wrap content-center justify-center">
        <p className="text-center w-full mb-10 text-2xl">User</p>
            <img className=" h-64" src={customer}/>
        </div>
        <div className="flex-col justify-center ">
        <img className=" h-28 w-full justify-center text mb-10" src={up} />
        <p className="border-2 text-white bg-dull font-extrabold text-4xl flex justify-center  py-10 sm:text-white">
               Easy<b className="text-danger">Fix</b></p>
        <img className="h-28 w-full mt-10" src={down}/>
        </div>
        <div className="mr-12 sm:mr-48 flex flex-wrap content-center justify-center">
        <p className="text-center w-full mb-10 text-2xl">Provider</p>
        <img className=" h-64" src={provider}/>
        </div>
      </div>
      <div className="flex justify-center py-20">
           <NavLink to="/about" className="text-primary rounded-full px-10 py-3 text-lg font-bold border-4 border-primary hover:bg-primary hover:text-white duration-1000">Know More</NavLink>
      </div>
    </div>
  );
}
export default About;
