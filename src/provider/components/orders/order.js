import React from 'react'
const Order = (props) => {
    if (!props.name) return (<div className="h-full w-full text-center">No orders yet</div>);
    return(
        <div className="Order bg-adbg m-4 rounded-lg w-96 p-5 shadow-xl">
            <p className="font-semibold text-xl">{props.name}</p>
            <p className="font-extralight">{props.address}</p>
            <p className="text-adpri font-serif">Amount</p>
            <p> &#x20B9; {props.amt}</p>
            <p className="text-adpri font-serif">Ordered on</p>
            <p>{props.date} at {props.time}</p>
        </div>
    );
}
export default Order;