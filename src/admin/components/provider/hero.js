import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Up from '../uppane'
import Tab from './table'
import Pag from '../pagination'
import Report from '@weknow/react-data-report';
const Hero  = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [repo,setRepo] = useState([]);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            setLoading(true);
            const res = await axios.get('http://localhost:9990/api/pauth/all');
            setPosts(res.data);
            setRepo(res.data);
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
            <Pag postsPerPage={postsPerPage} totalPosts={posts.length} indexOfLastPost={indexOfLastPost} indexOfFirstPost={indexOfFirstPost} paginate={paginate}/>
            <Report data={repo} opening={(<p className="text-center text-xl mb-3">Provider reports</p>)} closing={(<p className="text-center text-xl mt-3">End</p>)}/>
        </div>
    );
}
export default Hero;