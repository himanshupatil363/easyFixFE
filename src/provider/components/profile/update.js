import React from 'react'
const Update = () =>{
    return(
        <div className="Update">
            <div className="shadow-xl bg-white my-10 flex flex-col p-10 px-20">
                <p className="text-4xl font-bold text-gray-300 text-center mt-4">Update profile</p>
                <p className="text-2xl text-center text-adpri mt-4">Personal Details</p>
                <form className="flex flex-col">
                <label for="name" className=" font-bold mt-6">Full Name</label>
                <input id="name" className="w-96 border-2 p-2 opacity-70 focus:outline-none rounded-lg mt-2" readOnly value="hello"/>
                <label for="cat" className="font-bold mt-6">Category</label>
                <input id="cat" className="w-96 border-2 p-2 opacity-70 focus:outline-none rounded-lg mt-2" readOnly value="cat"/>
                <label for="subcat" className="font-bold mt-6">Sub Category</label>
                <input id="subcat" className=" w-96 border-2 p-2 opacity-70 focus:outline-none rounded-lg mt-2" readOnly value="subcat"/>
                </form>
            </div>
        </div>
    );
}
export default Update;