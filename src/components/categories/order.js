import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker';
const Order = () => {
    const [catData, setCatData] = useState([]);
    const [value, onChange] = useState(new Date());
    const [user, setUser] = useState();
    const [price, setPrice] = useState();
    const [customer, setCustomer] = useState();
    const [provider, setProvider] = useState();
    const [service, setService] = useState();
    const [address, setAddress] = useState();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    let {
      id
    } = useParams();
    useEffect(() => {
      const FetchCategories = async () => {
        try {
          const {
            data
          } = await axios.get(`http://localhost:9990/service/${id}`);
          setCatData(data);
          setProvider(data.provider[0]);
          setService(data.name)
          setPrice(data.price)
          
        } catch (error) {
          console.log(error)
        }
      };
      FetchCategories();
      console.log(service)
    },[]);
    useEffect(()=>{
      const FetchUser = async () => {
        const token = localStorage.getItem("authToken")
        try {
          const udata = await axios.get(`http://localhost:9990/service/userinfo/${token}`);
          setUser(udata.data._id);
        } catch (error) {
          console.log(error)
        }
      }
      FetchUser();
    },[])

      const placeOrder = async (e) => {
        e.preventDefault()
        try {
          const { data } = await axios.post(
        "/order/add",
        {
          user:user,
          custname:customer,
          provider:provider,
          service:service,
          address:address,
          datetime:value,
          price:price,
        },
      );
      setSuccess("order successfull");
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      } catch (error) {
        console.log(error)
      }
      e.target.reset();
    }
    return (
          <div>
            <div className="flex justify-center bg-blue-200">
                <div className="px-20 my-10 py-6 rounded-xl bg-white">
                    <form className="flex flex-col" onSubmit={placeOrder}>
                        <div className="flex my-6">
                          <div className="flex justify-around w-auto">
                            <label for="category" className="my-1 text-lg mx-5">
                                Category :
                            </label>
                            <input className="border-2 border-gray-500 flex-none px-2 outline-none  mx-5 hover:border-primary focus:border-primary opacity-80 transition ease-in-out duration-500" type="text" id="category" readOnly value={catData.category}/>
                          </div>
                          <div className="flex justify-around w-auto">
                            <label for="service" className="my-1 text-lg mx-5">
                                Service :
                            </label>
                            <input className="border-2 border-gray-500 px-2 outline-none mx-5 flex-none hover:border-primary focus:border-primary opacity-80 transition ease-in-out duration-500" type="text" id="service" readOnly value={catData.name}/>
                          </div>
                        </div>
                        <div className="flex my-6">
                          <div className="flex justify-around w-auto">
                            <label for="name" className="my-1 mx-5 text-lg flex-none">
                                Customer name :
                            </label>
                            <input onChange={(e)=> setCustomer(e.target.value)} className="border-2 mx-5 w-full border-gray-500 outline-none px-2  hover:border-primary focus:border-primary opacity-80 transition ease-in-out duration-500" type="text" id="username"/>
                          </div>
                          <div className="flex justify-around mx-5 w-auto">
                            <label for="name" className="my-1 text-lg mx-5">
                                Date and Time :
                            </label>
                            <DateTimePicker
                              disableClock={true}
                              clearIcon={null}
                              onChange={onChange}
                              value={value}
                              format={" dd-MM-y  h:mm  a"}
                            />
                          </div>
                        </div>
                        <div className="flex justify-around mx-5 my-6 items-center">
                            <label for="msg" className="my-1 text-lg flex-none mr-5">
                                Address :
                            </label>
                            <textarea onChange={(e)=> setAddress(e.target.value)} className="outline-none border-2 w-full border-gray-500 my-2 hover:border-t-2 focus:border-primary hover:border-primary opacity-80  transition ease-in-out duration-500" name="msg" id="msg"/>
                        </div>
                        <div>
                          <p className="float-right mr-20 font-bold text-green-500">&#8377; {catData.price}</p>
                        </div>
                        {error && <span className="error-message">{error}</span>}
                        {success && <span className="success-message">{success}</span>}
                      <button className="bg-dull text-white rounded-xl px-10 py-3 text-lg  duration-1000  hover:bg-white hover:text-green-500 text-center mt-10 focus:outline-none outline-none"  type="submit">Place Order</button>
                    </form>
                </div>                      
            </div>
        </div>  
    )
}

export default Order;
