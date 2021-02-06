import { useEffect, useState } from 'react';
// import axios from "axios";
import { NavLink} from 'react-router-dom';
// import brindesh from '../../assets/images/brindesh.png'
const Navbar = () => {
  const[nav , setNav] = useState(true);
  const logoutHandler = () =>{
    localStorage.removeItem("authToken");
  };
  return (
    <div className="Navbar sticky top-0 z-50 bg-cover" >
      <nav className="w-full">
        <div className="mx-20 px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-24">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={()=>setNav(!nav)}>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0  font-bold text-3xl tracking-wider text-dull">
               Easy<span className="text-adpri">Fix</span>.
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex ml-0 lg:ml-72 space-x-4 text-dull text-xl">
                 <NavLink to="/" className="list-none  px-6 py-2 rounded-md">Home</NavLink>
                 <NavLink to="/dashboard" className="list-none  px-6 py-2 rounded-md">Dashboard</NavLink>
                 <NavLink to ="/orders" className="list-none  px-6 py-2 rounded-md">Orders</NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/login" className="px-7 py-2 rounded mx-2 bg-adpri text-white" onClick={logoutHandler}>logout</NavLink>
          </div>
        </div>
        <div  className={ nav ? 'hidden sm:hidden' : 'sm:hidden' }>
          <div className="px-2 pt-2 pb-3 space-y-1">
           <li  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</li>
           <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</li>
           <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</li>
           <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categories</li>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
