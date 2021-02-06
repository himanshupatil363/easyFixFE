import {useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar'
const Add = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [category, setCategory] = useState();
    const [error,setError] = useState();
    const [success,setSuccess] = useState();
    const [catData,setCatData]=useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const { data } = await axios.get("http://localhost:9990/category/all");
            setCatData(data);

        } catch (error) {
            console.log(error)    
          }
        };
        fetchCategories();
      }, []);
    const addService = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        try {
            const {data} = await axios.post(
                "/service/add", {
                    name,
                    category,
                    price,
                    img
                },
                config
            );
            setSuccess(data.name);
            setTimeout(() => {
              setSuccess("");
            }, 5000);
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("error");
            }, 5000);
        }
        e.target.reset();
    }
    return (
        <>
        <Navbar />
        <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-xl flex justify-between p-16 mt-10 mb-28">
               
                <div className="mx-20">
                    <form className="flex flex-col"  onSubmit={addService}>
                        <label htmlFor="name" className="my-1 text-lg">
                            Service Name
                        </label>
                        <input className="border-2 border-gray-500 outline-none my-2 h-10 rounded-lg hover:border-primary focus:border-primary opacity-80 transition ease-in-out duration-500" type="text" name="Sname" id="Sname" onChange={(e)=>setName(e.target.value)} />
                        <label htmlFor="email" className="my-1 text-lg">
                            Price
                        </label>
                        <input className="border-2 border-gray-500 outline-none my-2 h-10  rounded-lg focus:border-primary hover:border-primary opacity-80  transition ease-in-out duration-500" type="number" name="price" id="price" onChange={(e)=>setPrice(e.target.value)}/>
                        <label htmlFor="msg" className="my-1 text-lg">
                            Image Url
                        </label>
                        <input className="outline-none border-2 border-gray-500 my-2 w-96 hover:border-t-2 focus:border-primary h-10 rounded-lg hover:border-primary opacity-80  transition ease-in-out duration-500" type="text" name="img" id="img" onChange={(e)=>setImg(e.target.value)}/>
                        <label htmlFor="msg" className="my-1 text-lg">
                            Category
                        </label>
                        <select className="outline-none border-2 border-gray-500 my-2 w-96 hover:border-t-2 focus:border-primary h-10 rounded-lg hover:border-primary opacity-80  transition ease-in-out duration-500" name="category" id="category" onChange={(e)=>setCategory(e.target.value)}>
                        {catData.map((data, key) => {
                        return (
                            <option key={key} value={data.name}>{data.name}</option>
                        )})}
                        </select>
                        {error && <span className="error-message">{error}</span>}
                        {success && <span className="success-message">{success} service added successfuly !!</span>}
                        <button className="bg-dull text-white rounded-xl px-10 py-3 text-lg  duration-1000  hover:bg-white hover:text-green-500 text-center mt-10 focus:outline-none outline-none"  type="submit">Add Service</button>
                    </form>
                </div>                      
            </div>
        </div>
        </>
    )
}
export default Add;
