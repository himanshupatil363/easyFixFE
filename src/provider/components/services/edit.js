import {useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar'
import { useParams } from 'react-router-dom';
const Edit = () => {
    const [name, setName] = useState();
    const [one, setOne] = useState("hidden");
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const {id}=useParams();
    useEffect(() => {
        const FetchCategories = async () => {
          try {
            const data = await axios.get(`http://localhost:9990/service/editservice/${id}`);
            setName(data.data.name);
            setPrice(data.data.price);
            setImg(data.data.img);
        } catch (error) {
            console.log(error)
          }
        };
        FetchCategories();
      }, []);
    const update = async(e) =>{
      e.preventDefault(); 
      try {
          const { data } = await axios.put(
            `/service/updateservice/${id}`,
            {
              name,
              price,
              img,
            }
          );
        } catch (error) {
            console.log(error)
        }
        e.target.reset();
    }
    return (
        <>
        <Navbar />
        <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-xl flex justify-between p-16 mt-10 mb-28">
                <div className="mx-20">
                    <form className="flex flex-col" onSubmit={update}>
                        <label htmlFor="name" className="my-1 text-lg">
                            Service Name
                        </label>
                        <input className="border-2 border-gray-500 outline-none my-2 h-10 px-2 rounded-lg hover:border-primary focus:border-primary opacity-80 transition ease-in-out duration-500" type="text" name="Sname" id="Sname" value={name} onChange={(e)=>setName(e.target.value)} />
                        <label htmlFor="email" className="my-1 text-lg">
                            Price
                        </label>
                        <input className="border-2 border-gray-500 outline-none my-2 h-10 px-2 rounded-lg focus:border-primary hover:border-primary opacity-80  transition ease-in-out duration-500" type="number" name="price" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        <label htmlFor="msg" className="my-1 text-lg">
                            Image Url
                        </label>
                        <input className="outline-none border-2 border-gray-500 my-2 w-96 px-2 hover:border-t-2 focus:border-primary h-10 rounded-lg hover:border-primary opacity-80  transition ease-in-out duration-500" type="text" name="img" id="img" value={img} onChange={(e)=>setImg(e.target.value)}/>
                        <p className={one}>Service updated successfully</p>
                        <button className="bg-dull text-white rounded-xl px-10 py-3 text-lg  duration-1000 hover:bg-white hover:text-green-500 text-center focus:outline-none outline-none" onClick={()=>{setOne()}}  type="submit">Edit Service</button>
                    </form>
                </div>                      
            </div>
        </div>
        </>
    )
}
export default Edit;
