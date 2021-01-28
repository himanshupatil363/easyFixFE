import React,{useState ,useContext} from 'react';
import { useHistory } from "react-router-dom";
import register from '../../assets/images/register.svg'
import { NavLink} from 'react-router-dom';
import UserContext from '../../context/userContext'
import Axios from 'axios'
import Error from '../../components/error'
function Register() {
  const [emailId,setEmail]=useState();
  const [name,setName]=useState();
  const [pwd,setPwd]=useState();
  const {setUserData} = useContext(UserContext);
  const history = useHistory();
  const [error,setError]=useState();
  const submit = async (e) =>{
    e.preventDefault();
    try{
    const newUser = {name,emailId,pwd}
    await Axios.post(
      "http://localhost:9990/user/register",
      newUser
    );
    const loginRes = await Axios.post("http://localhost:9990/user/login",
    {
      emailId,
      pwd,
    });
    setUserData({
      token:loginRes.data.token,
      user:loginRes.data.user,
    });
    localStorage.setItem("auth-token",loginRes.data.token);
    history.push("/");
  }
  catch(err){
    err.response.data.msg && setError(err.response.data.msg)
  }
  };
  return (
    <div className="Register h-screen w-full bg-primary flex justify-center content-center items-center">
        <div className="flex rounded-2xl justify-center bg-white shadow-2xl">
          <div className=" rounded-l-2xl bg-dpri p-24 flex items-center">
              <img className="h-96" src={register} alt=""/>
          </div>
          <div className="py-8 px-20">
            <p className="text-dpri text-3xl font-semibold">Join EasyFix Now</p>
           
             <form className="flex flex-col mt-2" onSubmit={submit}>
               <label className="mt-5">Enter your name</label>
               <input type="text" className=" border-b-2 border-dpri outline-none" onChange={(e) => setName(e.target.value)}/>
               <label className="mt-5">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-dpri outline-none" onChange={(e) => setEmail(e.target.value)}/>
               <label className="mt-5">Enter Password</label>
               <input type="password" className="border-b-2 border-dpri outline-none" onChange={(e) => setPwd(e.target.value)}/>
               <label className="mt-5">Re-enter password</label>
               <input type="password" className="border-b-2 mb-6 border-dpri outline-none"/>
               {error && (
                <Error message={error} clearError={()=>setError(undefined)}/>
               )}
               <input type="submit" className="py-2 bg-dpri text-white rounded-md border-2 border-dpri outline-none cursor-pointer hover:bg-white hover:text-dpri  duration-1000  font-semibold text-lg mx-10" value="Register" />
             </form>
             
              <p className="my-6 mb-8 ml-2">Already have an account ?<NavLink to="/login" className="text-dpri"> Login</NavLink></p>
          </div>
        </div>
    </div>
  );
}
export default Register; 