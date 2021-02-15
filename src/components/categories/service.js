import {useEffect,useState} from 'react';
import '../../assets/css/custom.css'
import axios from 'axios';
import Serv from '../../components/categories/serinfo'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {useParams} from 'react-router-dom'
const Cat =()=>{
const [catData,setCatData]=useState([]);
let { id } = useParams();
    useEffect(() => {
        const FetchCategories = async () => {
          try {
            const { data } = await axios.get(`http://localhost:9990/service/cat/${id}`);
            setCatData(data);
        } catch (error) {
            console.log(error)
          }
        };
        FetchCategories();
      }, [id]);
    return(
        <div className="flex flex-col">
        <Navbar />
        <div className="Cat bg-blue-200 min-h-screen">
            <p className="w-full text-center text-5xl font-bold text-gray-500 mt-20">{id}</p>
            <div className="name">
                    <ul className="flex justify-around p-10 flex-wrap">
                    {catData.map((data, key) => {
                        return (
                            <li className="bg-white rounded-xl hover:shadow-2xl duration-700 my-4">
                                <Serv
                                    key={key}
                                    name={data.name}
                                    category={data.category}
                                    price={data.price}
                                    img={data.img}
                                    id={data._id}
                                />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
        <Footer />
        </div>
    );
}
export default Cat;