import React from 'react'
const Box = (props) =>{
    if (!props.amount) return (<div className="h-full w-full text-center">No orders yet</div>);
        return(
        <div className="flex flex-col justify-center shadow-xl p-4 px-8 rounded-xl bg-white">
        <p className="flex justify-between">
            <p className=" py-5 font-bold text-3xl">{props.amount}</p>
            <p><img className="h-8 my-5" src={props.icon} alt="ok"></img></p>
        </p>
            <div className="overflow-hidden h-2 w-56 mt-8 text-xs flex rounded bg-blue-200">
                <div style={{ width: props.progress + 'px' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
                </div>
            </div>
            <p className="py-3 text-lg">{props.name}</p>
        </div>
    );
}
export default Box;