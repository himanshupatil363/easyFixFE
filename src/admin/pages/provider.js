import React from 'react';
import Navbar from '../components/navbar'
import Hero from '../components/provider/hero'
const Provider = () =>{
    return(
        <div className="Provider flex">
            <Navbar />
            <Hero />
        </div>
    );
}
export default Provider;