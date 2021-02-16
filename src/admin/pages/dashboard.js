import React from 'react';
import Navbar from '../components/navbar'
import Hero from '../components/dashboard/hero'
import back from '../assets/admin.jpg'
const Home = () =>{
    return(
        <div className="Home flex bg-blue-100" style={{backgroundImage: `url(${back})`, backgroundSize : "100% 100%", backgroundRepeat : "no-repeat"}}>
            <Navbar/>
            <Hero/>
        </div>
    );
}
export default Home;