import login from '../../assets/images/login.svg'
import { NavLink} from 'react-router-dom';
import React,{useState ,useContext} from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../context/userContext'
import Axios from 'axios'
import Error from '../../components/error'
function Login() {
  const [emailId,setEmail]=useState();
  const [pwd,setPwd]=useState();
  const [error,setError]=useState();
  const {setUserData} = useContext(UserContext);
  const history = useHistory();
  const submit = async (e) =>{
    e.preventDefault();
    try{const loginUser = {emailId,pwd}
    const loginRes = await Axios.post("http://localhost:9990/user/login",loginUser);
    setUserData({
      token:loginRes.data.token,
      user:loginRes.data.user,
    });
    localStorage.setItem("auth-token",loginRes.data.token);
    history.push("/");}
    catch(err){
      err.response.data.msg && setError(err.response.data.msg)
    }
  };
  return (
    <div className="Login h-screen w-full bg-primary flex justify-center content-center items-center">
        <div className="flex rounded-2xl justify-center bg-white shadow-2xl">
          <div className=" rounded-l-2xl bg-dpri p-24 flex items-center">
              <img className="h-96" src={login} alt=""/>
          </div>
          <div className="py-8 px-20">
            <p className="text-dpri text-3xl py-2">hello!</p>
            <p className="text-dpri text-3xl font-bold pb-2">Welcome to EasyFix</p>
             <form className="flex flex-col mt-2" onSubmit={submit}>
               <label className="mt-10">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-dpri outline-none" onChange={(e) => setEmail(e.target.value)}/>
               <label className="mt-8">Enter Password</label>
               <input type="password" className="border-b-2 border-dpri outline-none" onChange={(e) => setPwd(e.target.value)}/>
               <NavLink to="/forgot" className="flex justify-end mt-2 mb-10 text-dpri">Forgot Password?</NavLink>
               {error && (
                <Error message={error} clearError={()=>setError(undefined)}/>
               )}
               <input type="submit" className=" py-2 bg-dpri text-white rounded-md border-2 border-dpri outline-none cursor-pointer hover:bg-white hover:text-dpri  duration-1000  font-semibold text-lg mx-10" value="Login" />
             </form>
              <p className="my-8 mb-10 ml-2">Don't have an account ?<NavLink to="/register" className="text-dpri"> Create one</NavLink></p>
          </div>
        </div>
    </div>
  );
}
export default Login; 