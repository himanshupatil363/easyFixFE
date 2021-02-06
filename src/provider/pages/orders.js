import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import Order from '../components/orders/order'
const Orders = () =>{
    const [ord,setOrd] = useState([]);
    const [date,setDate] = useState();
    const [time,setTime] = useState();
    useEffect(() => {
        const id= localStorage.getItem("authToken")
        const FetchCategories = async () => {
          try {
            const data = await axios.get(`http://localhost:9990/order/prov/${id}`);
            setOrd(data.data);
            console.log(ord)
        } catch (error) {
            console.log(error)
          }
        };
        FetchCategories();
      }, []);
    return(
        <div className="Orders">
            <Navbar />
            <div className="mx-20 p-10 bg-white shadow-xl rounded-xl my-5">
            <p className="text-4xl font-bold text-gray-300 text-center my-4">Orders</p>
            <div className="flex flex-wrap justify-around">
            {ord.map((data, key) => {
                return (
                        <Order 
                            key={key}
                            name={data.custname} 
                            address={data.address}
                            time={data.datetime}
                            date={2}
                            amt={data.price}
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