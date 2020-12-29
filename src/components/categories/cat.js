import React from 'react';
import plumber from '../../assets/images/categories/plumber.jpg'
import '../../assets/css/custom.css'
const Cat =()=>{
    return(
        <div className="Cat bg-primary">
            <div className="name">
                    <ul className="flex justify-around">
                        <li className="h-40 w-40 bg-primary bg-cover hover:bg-black"  style={{backgroundImage :`url(${plumber})`}}>
                            <p className="text-white h-full flex justify-center items-center">Plumbing</p>
                        </li>
                        <li className="h-40 w-40 bg-white">
                           <p className="text-black h-full flex justify-center items-center"> Laundry</p>
                        </li>
                        <li className="p-10 bg-white">
                            Electrician
                        </li>
                        <li className="p-10 bg-white">
                            Beautician
                        </li>
                    </ul>
            </div>
        </div>
    );
}
export default Cat;