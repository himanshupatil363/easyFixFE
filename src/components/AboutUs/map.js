import React from 'react';
import about from '../../assets/images/about.jpg';
function About() {
  return (
    <div className="Map" className=" pt-20 bg-cover mt-20" style={{ backgroundImage: `url(${about})` }}>
        <div className="py-4 bg-gray-300 border-2 border-gray-300 shadow-2xl mx-40 rounded-2xl bg-opacity-25 text-black " style={{backdropFilter: `blur(8px)`}}>
            <div className="flex justify-center mt-20">
                <div className="text-3xl m-10 font-bold">Our story so far</div>
            </div>
            <div className="text-center px-48 my-4 mb-20">
                <p className=" text-xl ">19 cities in India: Ahmedabad, Bangalore, Bhopal, Bhubaneswar, Chandigarh Tricity, Chennai, Delhi NCR, Hyderabad, Indore, Jaipur, Kolkata, Lucknow, Ludhiana, Mumbai, Nagpur, Pune, Surat, Vadodara, Visakhapatnam
                </p>
            </div>
        </div>
    </div>
  );
}
export default About; 