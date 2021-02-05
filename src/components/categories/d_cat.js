import React from 'react'
import { NavLink } from 'react-router-dom';
const d_cat =(props) =>{
    return(    
        <NavLink to={`/cat/${props.name}`} className="text-black h-full flex flex-col justify-center items-center text-xl font-bold mx-20 my-10">
                <p className="bg-black rounded-xl"><img className="h-48 w-48 bg-cover rounded-xl hover:opacity-40 duration-700"  src={props.link} alt=""/></p>
                <p>{props.name}</p>
        </NavLink>
    );
}
export default d_cat;