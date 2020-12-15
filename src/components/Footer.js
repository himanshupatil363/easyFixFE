import React from 'react'
import { NavLink} from 'react-router-dom'
import instagram from '../assets/images/instagram.svg'
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import gmail from '../assets/images/gmail.svg'
const Footer = () => {
    return (
      <div className="Footer">
       <div className="flex justify-between px-20  bg-dull text-white py-8">
           <div className="flex-column w-5/12 text-center justify-center">
               <div className="font-bold text-4xl text-white">
               Easy<b className="text-danger">Fix</b>
               </div>
               <p className="mt-5">
               Like all good things, the idea of EasyFix was born out of necessity. When you need help with small but important household chores, isn't it practically impossible to find trusted providers, who deliver consistently impeccable service, on time? Yes, that happened with us too. All the time. After trying dozens of other services which were just glorified directories, we decided to build EasyFix. EasyFix is the most convenient and hassle free way to get your housework done.
               </p>
            </div>
           <div>
               <p className=" font-semibold text-2xl my-5">Links</p>    
           <div className="flex-column justify-center">
                <NavLink to="/" exact activeClassName="text-yellow-400"><p className="my-3">Home</p></NavLink>
                <NavLink to="/about" activeClassName="text-blue-400"><p className="my-3">About</p></NavLink>
                <NavLink to="/contact" activeClassName="text-red-400"><p className="my-3">Conatcts</p></NavLink>
                <NavLink to="/categories" activeClassName="text-green-400"><p className="my-3">Categories</p></NavLink>
            </div>
            </div>
           <div className=""><p className=" font-semibold text-2xl my-5">social media</p>
           <div className="flex justify-center my-6">
               <a><img className="h-8" href="" src={instagram} /></a>
               <a><img className="h-8 ml-8" src={facebook} /></a>
               <a><img className="h-8 ml-8" src={twitter} /></a>
               <a href="mailto:brindachanchad00@gmail.com"><img  className="h-8 ml-8" src={gmail} /></a>
               
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
  
