import React from 'react';
import search from '../../assets/images/search.svg';
import flat from '../../assets/images/flat.jpg'
const Search =()=>{
    return(
        <div className="search bg-cover" style={{backgroundImage :`url(${flat})`}}>
            <div className="flex justify-center pt-32">
               <p className="text-5xl text-black font-bold">Search for categories</p>
            </div>
            <div className="flex justify-center">
                <form class="example" action="" className="flex mt-12 mb-52">
                    <input type="text" className=" px-20 outline-none opacity-70 hover:opacity-100 duration-1000" name="search" />
                    <button type="submit" className="shadow-inner duration-1000 px-4 py-2 outline-none opacity-70 hover:opacity-100"><img src={search} alt=''/></button>
                </form> 
            </div>
        </div>
    );
}
export default Search;