import React from 'react';
import '../../assets/css/custom.css'
import Cats from '../../components/categories/d_cat' 
import { catData } from '../../data/catData'
const Cat =()=>{
    return(
        <div className="Cat bg-primary">
            <div className="name">
                    <ul className="flex justify-around p-10 flex-wrap">
                    {catData.map((data, key) => {
                        return (
                                <Cats 
                                    key={key}
                                    name={data.name}
                                />
                            );
                        })
                    }
                    </ul>
                    
            </div>
        </div>
    );
}
export default Cat;