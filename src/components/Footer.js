import React from 'react'
import { NavLink} from 'react-router-dom'
import instagram from '../assets/images/instagram.svg'
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import gmail from '../assets/images/gmail.svg'
const Footer = () => {
    return (
      <div className="Footer">
       <div className="flex justify-between px-40 bg-dull text-white py-2 h-full">
           <div className="flex-column w-96 h-full justify-center items-center">
               <div className="font-bold text-5xl text-white mt-10">
               Easy<b className="text-danger">Fix</b>
               </div>
               <p className="mt-5">EasyFix is India's largest and most trusted service platform. Our vision is to be one-stop service partner for every Indian.</p>
            </div>
           <div>
               <p className=" font-semibold text-2xl my-5">Links</p>    
           <div className="flex-column justify-center">
                <NavLink to="/" exact activeClassName="text-ter"><p className="my-3">Home</p></NavLink>
                <NavLink to="/about" activeClassName="text-ter"><p className="my-3">About</p></NavLink>
                <NavLink to="/categories" activeClassName="text-ter"><p className="my-3">Categories</p></NavLink>
                <NavLink to="/contact" activeClassName="text-ter"><p className="my-3">Conatcts</p></NavLink>
            </div>
            </div>
           <div className=""><p className=" font-semibold text-2xl my-5">Social media</p>
           <div className="flex justify-center my-6">
               <a><img className="h-8" href="" src={instagram} alt=""/></a>
               <a><img className="h-8 ml-8" src={facebook} alt=""/></a>
               <a><img className="h-8 ml-8" src={twitter} alt=""/></a>
               <a href="mailto:easy0fix@gmail.com"><img  className="h-8 ml-8" src={gmail} alt=""/></a>
               
           </div>
           <p className="font-semibold text-2xl my-4">Contact No</p>
           <a className="" href="tel:+91 9876543210">+91 9876543210</a>
           </div>
       </div>
       <div className=" bg-gray-300 flex justify-center text-dull">
            <p className="my-2 font-mono font-bold tracking-wide">Copyright &copy; 2020 EasyFix Inc.</p>
       </div>
      </div>
    );
  }
  export default Footer;
  
