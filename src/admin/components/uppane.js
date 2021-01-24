import React from 'react'
import chat from '../assets/chat.svg'
import bell from '../assets/bell.svg'
import search from '../assets/search.svg'
const Uppane = () =>{
    return(
        <div className="flex justify-between bg-blue-900 text-white p-4 text-lg">
            <div>
                <input type="text" name="" id="" placeholder="Search"/>
                <button><img src={search} alt="" className="h-4 px-3 border border-primary p-3"/></button>
            </div>
            <div className="flex justify-between p">
            <img className="h-6 mx-4" src={chat} alt=""/>
            <img className="h-6 mx-4" src={bell} alt=""/>
            <button className="bg-white mx-4 text-blue-900 font-bold px-4 rounded-md hover:bg-blue-900 hover:text-white duration-1000">logout</button>
            </div>
        </div>
    );    
}
export default Uppane