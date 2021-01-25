import React from 'react';
import Hero from '../components/users/hero';
import Navbar from '../components/navbar'
const Users = () =>{
    return(
        <div className="Users flex bg-blue-100">
            <Navbar/>
            <Hero />
        </div>
    );
}
export default Users;