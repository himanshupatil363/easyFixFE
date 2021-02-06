import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const Order = () => {
    const [catData,setCatData]=useState([]);
    let { id } = useParams();
    useEffect(() => {
        const FetchCategories = async () => {
          try {
            const { data } = await axios.get(`http://localhost:9990/service/${id}`);
            setCatData(data);
        } catch (error) {
            console.log(error)
          }
        };
        FetchCategories();
      }, [id]);
    return (
        <div>
            {catData.name}
        </div>
    )
}

export default Order;
