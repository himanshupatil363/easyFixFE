import React from 'react'
import { NavLink } from 'react-router-dom'
const serinfo = (data,key) => {
    let id= data.id
    return (
        <NavLink to={`/ser/${id}`} key={key} className="flex flex-col">
            <div><img className="h-80 w-80 rounded-t-xl" src={data.img} alt="not loaded" /></div>
            <div className="mx-4 my-4">
                <p className="mt-2 text-lg">{data.name}</p>
                <p className="mb-2 font-thin">{data.category}</p>
                <p className="my-2 font-bold text-md">&#8377; {data.price}</p>
            </div>
        </NavLink>
    )
}
export default serinfo;
