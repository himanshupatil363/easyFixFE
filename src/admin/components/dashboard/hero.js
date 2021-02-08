import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Box from './box'
import users from '../../assets/home/users.svg'
import orders from '../../assets/home/orders.svg'
import categories from '../../assets/home/categories.svg'
import providers from '../../assets/home/providers.svg'
import Chart from '../../components/dashboard/charts'
import Pan from '../../components/uppane'
const Hero = () =>{
    const [cat, setCat] = useState();
    const [user, setUser] = useState();
    const [order, setOrder] = useState();
    const [service, setService] = useState();
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const cats = await axios.get('http://localhost:9990/category/count');
            setCat(cats.data);
            const users = await axios.get('http://localhost:9990/user/count');
            setUser(users.data);
            const orders = await axios.get('http://localhost:9990/order/count');
            setOrder(orders.data);
            const providers = await axios.get('http://localhost:9990/service/count');
            setService(providers.data);
        }
        fetchPosts();
    },[]);
    return(
        <div className="Hero w-full ml-60 flex flex-col">
        <Pan />
            <div className="flex w-full justify-between mt-12">
                <Box name="Orders" amount={order} progress={order} icon={orders}/>
                <Box name="Categories" amount={cat} progress={cat} icon={categories}/>
                <Box name="Users" amount={user} progress={user} icon={users}/>
                <Box name="Services" amount={service} progress={service} icon={providers}/>
            </div>
            <Chart />
        </div>
    );
}
export default Hero;