import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar';
import Hero from '../components/services/hero'
const Dashboard = () =>{
    return(
        <div className="Dashboard">
            <Navbar />
            <div className="bg-white mx-20 rounded-xl pb-10">
                <div className="flex justify-around">
                    <div className="bg-green-100 rounded-2xl my-20 h-52 w-52">
                        <p className="pt-32 pl-4">Total Income</p>
                        <p className="text-3xl pl-4 font-bold text-adpri">&#8377; 214497</p>
                    </div>
                    <div className="bg-green-100 rounded-2xl my-20 h-52 w-52">
                        <p className="pt-32 pl-4">Total Orders</p>
                        <p className="text-3xl pl-4 font-bold text-adpri">200</p>
                    </div>
                    <div className="bg-green-100 rounded-2xl my-20 h-52 w-52">
                        <p className="pt-32 pl-4">Weekly Income</p>
                        <p className="text-3xl pl-4 font-bold text-adpri">&#8377;8000</p>
                    </div>
                    <div className="bg-green-100 rounded-2xl my-20 h-52 w-52">
                        <p className="pt-32 pl-4">Happy Customers</p>
                        <p className="text-3xl pl-4 font-bold text-adpri">200</p>
                    </div>
                </div>
                <Hero />
            <NavLink to="/addservice" className="px-7 py-2 rounded mx-4 bg-adpri text-white">Add service</NavLink>
            </div>
        </div>
    );
}
export default Dashboard;