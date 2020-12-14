import React, { useState } from 'react';
import { Link , NavLink} from 'react-router-dom';

const Navbar = () => {
  const[nav , setNav] = useState(true);
  return (
    <div className="Navbar">
      <nav className="bg-dull">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={()=>setNav(!nav)}>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0  font-bold text-4xl tracking-wider text-white">
               Easy<b className="text-danger">Fix</b>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex ml-0 lg:ml-72 space-x-4 text-white">
                  <NavLink to="/" exact activeClassName="text-yellow-400"><li className=" list-none  px-3 py-2 rounded-md  font-medium">Home</li></NavLink>
                  <NavLink to="/about" activeClassName="text-blue-400"><li className="list-none  px-3 py-2 rounded-md  font-medium">About</li></NavLink>
                  <NavLink to="/contact" activeClassName="text-red-400"><li href="#" className="list-none  px-3 py-2 rounded-md  font-medium">Contact</li></NavLink>
                  <NavLink to="/categories" activeClassName="text-green-400"><li href="#" className="list-none  px-3 py-2 rounded-md  font-medium">Categories</li></NavLink>
                </div>
              </div>
            </div>
            <div class="relative w-12 h-12">
              <a href="#">
                <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
                <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
              </a>
            </div>
          </div>
        </div>
        <div  className={ nav ? 'hidden sm:hidden' : 'sm:hidden' }>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categories</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
