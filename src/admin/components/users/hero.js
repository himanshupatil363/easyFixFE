import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Up from '../uppane'

const Hero  = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage , setPostsPerPsge] = useState(10);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            setLoading(true);
            const res = await axios.get('http://localhost:9990/user/all');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();

    },[]);
    console.log(posts)
    return(
        <div className="Hero w-full ml-60 flex flex-col">
            <Up />
           <div>
           
            </div>
        </div>
    );
}
export default Hero;