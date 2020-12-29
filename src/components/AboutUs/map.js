import React from 'react';
import about from '../../assets/images/about.jpg';
import India from '../../assets/images/map.svg';
const About = () => {
  return (
    <div className="Map py-20 bg-cover mt-20" style={{ backgroundImage: `url(${about})` }}>
        <div className="py-4 bg-gray-300 border-2 border-gray-300 shadow-2xl mx-40 rounded-2xl bg-opacity-25 text-black " style={{backdropFilter: `blur(9px)`}}>
            <div className="flex-column text-center my-24">
                <div className="text-5xl text-white font-bold">Our story so far</div>
                <div className=" text-lg text-dull font-semibold mt-10">19 cities in India</div>
            </div>
            <div className="flex">
                <div  className="h-screen w-11/12 object-contain">
                  <img src={India} className="h-screen w-screen" alt="" />
                </div>
                <div className=" text-left w-3/12">
                    <p className=" text-xl ">
                      <ul className=""> <li className="p-1 text-dull">Ahmedabad</li><li className="p-1 text-dull"> Bangalore</li><li className="p-1 text-dull"> Bhopal</li><li className="p-1 text-dull"> Bhubaneswar</li><li className="p-1 text-dull"> Chandigarh Tricity</li><li className="p-1 text-dull"> Chennai</li><li className="p-1 text-dull"> Delhi NCR</li><li className="p-1 text-dull"> Hyderabad</li> <li className="p-1 text-dull">Indore</li> <li className="p-1 text-dull">Jaipur</li> <li className="p-1 text-dull">Kolkata</li> <li className="p-1 text-dull">Lucknow</li> <li className="p-1 text-dull">Ludhiana</li> <li className="p-1 text-dull">Mumbai</li><li className="p-1 text-dull"> Nagpur</li><li className="p-1 text-dull"> Pune</li><li className="p-1 text-dull"> Surat</li><li className="p-1 text-dull"> Vadodara</li> <li className="p-1 text-dull"> Visakhapatnam</li></ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
export default About; 