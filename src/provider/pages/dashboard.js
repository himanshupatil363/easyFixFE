import React from 'react'
import Navbar from '../components/navbar';
const Dashboard = () =>{
    return(
        <div className="Dashboard">
        <Navbar />
        <div className="bg-white mx-20 rounded-xl">
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
        </div>
        </div>
    );
}
export default Dashboard;