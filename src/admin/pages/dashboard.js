import React from 'react';
import Navbar from '../components/navbar'
import Hero from '../components/dashboard/hero'
const Home = () =>{
    return(
        <div className="Home flex bg-blue-100 h-full">
            <Navbar className="h-full"/>
            <Hero />
        </div>
    );
}
export default Home;