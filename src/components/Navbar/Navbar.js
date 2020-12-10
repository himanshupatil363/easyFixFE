import React, { useState } from 'react';
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
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
               Easy<b className="text-dull">Fix</b>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex ml-0 lg:ml-72 space-x-4">
                  <a href="#" className=" text-base bg-white text-dull px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                  <a href="#" className=" text-base text-white hover:bg-white hover:text-dull px-3 py-2 rounded-md text-sm font-medium">Team</a>
                  <a href="#" className=" text-base text-white hover:bg-white hover:text-dull px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                  <a href="#" className=" text-base text-white hover:bg-white hover:text-dull px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">           
              <div className="ml-3 relative">
                <div>
                  <button href="#" className="bg-secondary border-transparent p-1 px-2 sm:p-2 lg:px-5  rounded-md  focus:outline-none hover:bg-yellow-400 duration-700 ease-in-out text-xl">logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
