import React from 'react'
const Card =(props,key) =>{
    return(    
        <div key={key} className="text-black h-full flex flex-col justify-center items-center text-xl font-bold mx-20 my-10">
                <p className="bg-black rounded-xl"><img className="h-48 w-48 bg-cover rounded-xl hover:opacity-40 duration-700"  src={props.link} alt=""/></p>
                <p  className="mt-6">{props.name}</p>
        </div>
    );
}
export default Card;