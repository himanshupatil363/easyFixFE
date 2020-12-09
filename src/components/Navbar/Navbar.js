import React from 'react';
import '../../assets/css/navbar.css'
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="text-black-700 bg-primary px-10 flex flex-row flex-wrap content-center justify-between text-2xl w-full h-16  ">
        <p className="pl-10 text-dull logo font-bold text-4xl tracking-wider">Easy<b className="text-white">Fix</b></p>
        <div className="flex flex-wrap justify-between content-center align-middle text-xl text-white">
          <a href="#" className="mx-5">element 1</a>
          <a href="#" className="mx-5">element 2</a>
          <a href="#" className="mx-5">element 3</a>
          <a href="#" className="mx-5">element 4</a>
        </div>
        <button href="#" className="bg-danger border-transparent p-2 px-5 rounded-md focus:outline-none hover:bg-red-600 duration-700 ease-in-out text-xl">logout</button>
      </div>
    </div>
  );
}
export default Navbar;
