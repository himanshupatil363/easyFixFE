import React from 'react'
const Order = (props) => {
    if (!props.name) return (<div className="h-full w-full text-center">No orders yet</div>);
    return(
        <div className="Order bg-adbg m-4 rounded-lg w-96 p-5 shadow-xl">
            <div className="flex justify-between">
            <p className="font-semibold text-xl">{props.name}</p>
            <p className="bg-adpri text-adbg p-1 px-2 rounded-lg">{props.status}</p>
            </div>
            <p className="font-extralight mt-2">{props.address}</p>
            <p className="text-adpri font-serif mt-4 text-lg">Amount</p>
            <p> &#x20B9; {props.amt}</p>
            <p className="text-adpri font-serif mt-4 text-lg">Ordered on</p>
            <p>{props.date} at {props.time}</p>
        </div>
    );
}
export default Order;