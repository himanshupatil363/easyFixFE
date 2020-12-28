import React from 'react';
import search from '../../assets/images/search.svg';
const Search =()=>{
    return(
        <div className="search">
            <div className="bg-primary flex justify-center">
            <form class="example" action="" className="flex my-40">
                <input type="text" className=" px-20 rounded-full rounded-r-none outline-none" name="search" />
                <button type="submit" className="shadow-inner duration-1000 px-4 py-2 rounded-full rounded-l-none outline-none"><img src={search} alt=''/></button>
            </form> 
            </div>
        </div>
    );
}
export default Search;