import React from 'react'
import Brindesh from '../../assets/profile/brindesh.png'
const Info = () =>{
    return(
        <div className="Info">
            <div className="shadow-xl bg-white my-10 flex-col p-4">
            <p className="text-4xl font-bold text-gray-300 text-center mt-4">Profile</p>
                <img src = {Brindesh} className="rounded-full h-64 border-2 border-adpri p-2 mt-4" alt=""/>
                <p className="text-center text-xl font-bold text-adpri mt-8">Brindesh Chanchad</p>
                <a href="mailto:brindachanchad00@gmail.com">brindachanchad00@gmail.com</a>
                <hr className="my-5"/>
                <p className="text-center text-xl font-bold text-adpri mt-5">work Experience</p>
            </div>
        </div>
    );
}
export default Info;