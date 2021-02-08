import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Up from '../uppane'
import Tab from './table'
import Pag from '../pagination'
const Hero  = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            setLoading(true);
            const res = await axios.get('http://localhost:9990/order/all');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();

    },[]);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }
    return(
        <div className="Hero w-full ml-60 flex flex-col">
            <Up />
            <Tab posts={currentPosts} loading={loading}/>
            <Pag 
            postsPerPage={postsPerPage} totalPosts={posts.length} indexOfLastPost={indexOfLastPost} indexOfFirstPost={indexOfFirstPost} paginate={paginate}/>
        </div>
    );
}
export default Hero;