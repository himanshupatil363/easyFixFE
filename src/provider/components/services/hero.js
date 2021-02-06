import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Tab from './table'
import Pag from '../../../admin/components/pagination'
const Hero  = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            setLoading(true);
            let token = localStorage.getItem("authToken")
            const res = await axios.get(`http://localhost:9990/service/pvinfo/${token}`);
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
        <div className="Hero w-full px-4 flex flex-col">
            <Tab posts={currentPosts} loading={loading}/>
            <Pag postsPerPage={postsPerPage} totalPosts={posts.length} indexOfLastPost={indexOfLastPost} indexOfFirstPost={indexOfFirstPost} paginate={paginate}/>
        </div>
    );
}
export default Hero;