import React from 'react'
import leaf from '../../assets/home/leaf.png'
import login from '../../assets/login.svg'
import { NavLink} from 'react-router-dom';
const Login = () => {
    return(
        <div className="Login h-screen w-full bg-adbg flex justify-center content-center items-center bg-no-repeat bg-cover " style={{backgroundImage:`url(${leaf})`,backgroundPosition:`120% 220%`,backgroundSize:`40%`}}>
        <div className="flex rounded-2xl justify-center  shadow-2xl bg-adbg">
          <div className=" rounded-l-2xl bg-adpri p-24 flex items-center">
               <img className="h-52" src={login} alt=""/> 
          </div>
          <div className="py-8 px-20" >
            <p className="text-adpri text-3xl py-2">hello!</p>
            <p className="text-adpri text-3xl font-bold pb-2">Welcome to EasyFix</p>
             <form className="flex flex-col mt-2">
               <label className="mt-10">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-adpri bg-adbg outline-none" />
               <label className="mt-8">Enter Password</label>
               <input type="password" className="border-b-2 border-adpri bg-adbg outline-none"/>
               <NavLink to="/forgot" className="flex justify-end mt-2 text-adpri">Forgot Password?</NavLink>
               <input type="submit" className="mt-10 py-2 bg-adpri text-adbg rounded-md border-2 border-adpri outline-none cursor-pointer hover:bg-adbg hover:text-adpri  duration-1000  font-semibold text-lg mx-10" value="Login" />
             </form>
              <p className="my-8 mb-10 ml-2">Don't have an account ?<NavLink to="/register" className="text-adpri"> Create one</NavLink></p>
          </div>
        </div>
    </div>
    );
}
export default Login;