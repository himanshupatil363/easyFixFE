import {NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'
import chat from '../assets/chat.svg'
import axios from 'axios'
import bell from '../assets/bell.svg'
import search from '../assets/search.svg'
const Uppane = () =>{
    const logoutHandler = () =>{
        localStorage.removeItem("authToken");
      };
      const [error, setError] = useState("");
      const [privateData, setPrivateData] = useState("");
      useEffect(() => {
        const fetchPrivateDate = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
    
          try {
            const { data } = await axios.get("http://localhost:9990/api/private", config);
            setPrivateData(data.data);
          } catch (error) { 
            localStorage.removeItem("authToken");
            setError("You are not authorized please login");
          }
        };
        fetchPrivateDate();
      }, []);
      return error ? (
        <span className="error-message">{error}</span>
      ) : (
        <div className="flex justify-between content-center items-center bg-blue-900 text-white p-4 text-lg">
            <div className="flex">
                <input type="text" name="" id="" placeholder="Search" className="px-4 py-1" />
                <button className="py-1 px-2"><img src={search} alt="" className="h-5 opacity-50 hover:opacity-100 duration-1000"/></button>
            </div>
            <div className="flex justify-between p">
            <img className="h-6 mx-4" src={chat} alt=""/>
            <img className="h-6 mx-4" src={bell} alt=""/>
            <NavLink to="/login" className="bg-white mx-4 text-blue-900 font-bold px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white duration-1000" onClick={logoutHandler}>logout</NavLink>
            </div>
        </div>
    );    
}
export default Uppane