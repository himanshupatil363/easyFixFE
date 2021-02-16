import {useState} from 'react'
import Up from '../uppane'
import axios from 'axios'
const Hero = () => {
    const [name,setName] = useState("")
    const [img,setImg]  = useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); 
    const addCategory = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "/category/add",
            {
              name,
              img,
            },
          );
          setSuccess(data.name)
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
        e.target.reset();
      };
    return (
        <div className="w-full ml-60 flex flex-col bg-blue-200 h-screen">
            <Up />
            <div className="flex justify-center h-full  items-center" onSubmit={addCategory}>
                <form className="flex flex-col bg-white rounded-xl py-16 px-28 shadow-xl">
                        <label className="my-5">Enter the name of the category</label>
                        <input className="mb-10 border-2 outline-none px-2 rounded-md py-2" type="text" onChange={(e)=>setName(e.target.value)}/>
                        <label className="my-5">Enter the url of image for the category</label>
                        <input className="mb-10 border-2 outline-none px-2 rounded-md py-2" type="text" onChange={(e)=>setImg(e.target.value)}/>
                        {error && <span className="error-message">{error}</span>}
                        {success && <span className="success-message">{success} category is successfully added.</span>}
                        <input type="submit" className="text-center py-3 rounded bg-blue-800 text-xl text-white hover:bg-white hover:text-blue-800 border-2 border-blue-800 duration-700" value="Add Category" />
                </form>
            </div>
        </div>
    )
}
export default Hero
