import React,{useEffect ,useContext} from 'react';
import {useHistory} from 'react-router-dom'
import HomeSvg from '../components/home/mainsvg'
import Cat from '../components/home/cat'
import About from '../components/home/about'
import Tweets from '../components/home/tweets'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UserContext from '../context/userContext'
function Home() {
  const {userData} = useContext(UserContext);
  const history = useHistory();
  useEffect(()=> {
    if(!userData) history.push("/login")
  });
  return (
    <div className="Home">
      <Navbar />
      <HomeSvg />
      <Cat />
      <Tweets />
      <About />
      <Footer />
    </div>
  );
}
export default Home;
