import React from 'react';
import '../../assets/css/cust.css'
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="text-black-700 bg-white px-10 flex flex-row flex-wrap content-center justify-between text-2xl w-full h-16  ">
        <p className="pl-10 logo font-bold text-3xl tracking-wider">Easy<b className="text-custl">Fix</b></p>
        <div className="flex justify-between text-xl">
          <a href="#" className="mx-7">element 1</a>
          <a href="#" className="mx-7">element 2</a>
          <a href="#" className="mx-7 mr-14">element 3</a>
          <a href="#">element 4</a>
        </div>
        <button href="#" className="bg-red-200 border-transparent px-2 rounded-md focus:outline-none hover:bg-red-400 duration-700 ease-in-out text-xl">logout</button>
      </div>
    </div>
  );
}
export default Navbar;
