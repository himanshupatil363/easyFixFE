import React from 'react';
import Navbar from '../components/navbar'
import Hero from '../components/home/hero'
const Home = () =>{
    return(
        <div className="Home flex">
            <Navbar />
            <Hero />
        </div>
    );
}
export default Home;