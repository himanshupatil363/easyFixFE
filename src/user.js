import './assets/css/main.css'
import './assets/css/custom.css'
import React,{useState, useEffect} from 'react';
import Home from './pages/home'
import Contact from './pages/contact'
import Categories from './pages/categories'
import About from './pages/about'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Forgot from './pages/auth/forgot'
import Api from './pages/api'
import UserContext from './context/userContext'
import Axios from 'axios'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const User = () => {
    const [userData,setUserData]=useState({
        token:undefined,
        user:undefined,
    });
    useEffect(()=>{
        const checkLoggedIn = async () =>{
            let token = localStorage.getItem("auth-token");
            if(token==null){
                localStorage.setItem("auth-token","");
                token = "";
            }
            const tokenRes = await Axios.post(
                "http://localhost:9990/user/tokenIsValid",
                null ,
                {headers: {"x-auth-token":token}}
            );
            if(tokenRes.data){
                const userRes = await Axios.get("http://localhost:9990/user/" , {headers:{"x-auth-token" : token}})
                setUserData({
                    token,
                    user: userRes.data,
                });
            }
        }
        checkLoggedIn()
    },[]);
return(
    <Router>
        <UserContext.Provider value={{userData, setUserData}}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/api" component={Api} />
            </Switch>
        </UserContext.Provider>
    </Router>
    )
}
export default User;