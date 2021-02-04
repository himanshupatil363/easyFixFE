import React from 'react'
const d_cat =(props) =>{
    return(
    <li className="h-48 w-48 bg-primary bg-cover rounded-xl mx-20 my-10"  style={{backgroundImage :`url(${props.link})`}}>
        <p className="text-white h-full flex justify-center items-center text-xl font-bold">{props.name}</p>
    </li>
    );
}
export default d_cat;