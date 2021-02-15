import { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink} from 'react-router-dom';
// import brindesh from '../assets/images/brindesh.png'

const Navbar = () => {
  const[nav , setNav] = useState(true);
  const logoutHandler = () =>{
    localStorage.removeItem("authToken");
  };
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("http://localhost:9990/api/private", config);
        setPrivateData(data.data);
      } catch (error) { 
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };
    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div className="Navbar sticky top-0 z-50">
      <nav className="bg-dull w-full">
        <div className="mx-5 px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
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
              <div className="flex-shrink-0  font-bold text-4xl tracking-wider text-white">
               Easy<b className="text-danger">Fix</b>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex ml-0 lg:ml-72 space-x-4 text-white text-xl">
                  <NavLink to="/" exact activeClassName="text-ter"><li className=" list-none  px-3 py-2 rounded-md  ">Home</li></NavLink>
                  <NavLink to="/about" activeClassName="text-ter"><li className="list-none  px-3 py-2 rounded-md  ">About</li></NavLink>
                  <NavLink to="/categories" activeClassName="text-ter"><li className="list-none  px-3 py-2 rounded-md  ">Categories</li></NavLink>
                  <NavLink to="/orders" activeClassName="text-ter"><li className="list-none  px-3 py-2 rounded-md  ">Order</li></NavLink>
                  <NavLink to="/contact" activeClassName="text-ter"><li className="list-none  px-3 py-2 rounded-md  ">Contact</li></NavLink>
                </div>
              </div>
            </div>
            <p className="text-white">
              Hello, {privateData.username}
            </p>
            <NavLink to="/login" className="px-7 py-2 rounded mx-2 bg-dpri text-white" onClick={logoutHandler}>logout</NavLink>
          </div>
        </div> 
        <div  className={ nav ? 'hidden sm:hidden' : 'sm:hidden' }>
          <div className="px-2 pt-2 pb-3 space-y-1">
           <NavLink to="/"> <li  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</li></NavLink>
           <NavLink to="/about"> <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</li></NavLink>
           <NavLink to="/contact"> <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</li></NavLink>
           <NavLink to="/orders"> <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Orders </li></NavLink>
           <NavLink to="/categories"> <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categories</li></NavLink>
          
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
