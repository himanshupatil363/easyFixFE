import React from 'react'
import Navbar from '../components/navbar'
import Order from '../components/orders/order'
import { orderData } from '../data/data'
const Orders = () =>{
    return(
        <div className="Orders">
            <Navbar />
            <div className="mx-20 p-10 bg-white shadow-xl rounded-xl my-5">
            <p className="text-4xl font-bold text-gray-300 text-center my-4">Orders</p>
            <div className="flex flex-wrap justify-around">
            {orderData.map((data, key) => {
                return (
                        <Order 
                            key={key}
                            name={data.name} 
                            address={data.address}
                            time={data.time}
                            date={data.date}
                            amt={data.amt}
                            status={data.status}
                        />
                    );
                })
            }
            </div>
        </div>
        </div>
    );
}
export default Orders