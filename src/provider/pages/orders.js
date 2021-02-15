import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import Order from '../components/orders/order'
const Orders = () =>{
    const [ord,setOrd] = useState([]);
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
        <div className="Orders h-screen">
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
                            time={`${('0'+new Date(data.datetime).getHours()%12).slice(-2) ? ('0'+new Date(data.datetime).getHours()%12).slice(-2) : 12}:${('0'+new Date(data.datetime).getMinutes()).slice(-2)} ${new Date(data.datetime).getHours() >= 12 ? 'PM' : 'AM'}`}
                            date={`${('0'+new Date(data.datetime).getDate()).slice(-2)}-${('0'+new Date(data.datetime).getMonth() + 1).slice(-2)}-${new Date(data.datetime).getFullYear()}`}
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