import React from 'react'
import Reg from '../../assets/register.svg'
import { NavLink} from 'react-router-dom';
const Register = () => {
    return(
        <div className="Register h-screen w-full bg-adbg flex justify-center content-center items-center bg-no-repeat bg-cover ">
        <div className="flex rounded-2xl justify-center  shadow-2xl bg-adbg">
          <div className=" rounded-l-2xl bg-adm p-24 flex items-center">
               <img className="h-64" src={Reg} alt=""/> 
          </div>
          <div className="py-6 px-20" >
            <p className="text-adm text-3xl font-semibold">Welcome to EasyFix !</p>
             <form className="flex flex-col mt-2">
               <label className="mt-8">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-adm bg-adbg outline-none" />
               <label className="mt-6">Enter Name</label>
               <input type="text" className=" border-b-2 border-adm bg-adbg outline-none" />
               <label className="mt-6">Enter Password</label>
               <input type="password" className="border-b-2 border-adm bg-adbg outline-none"/>
               <label for="fpwd" className="flex justify-end mt-2 text-adm items-center">Show Password<input type="checkbox" id="fpwd" className="ml-2"/></label>
               <input type="submit" className="mt-8 py-2 bg-adm text-adbg rounded-md border-2 border-adm outline-none cursor-pointer hover:bg-adbg hover:text-adm  duration-1000  font-semibold text-lg mx-10" value="Register" />
             </form>
              <p className="my-8 mb-10 ml-2">Already have an account ?<NavLink to="/login" className="text-adm"> Login</NavLink></p>
          </div>
        </div>
    </div>
    );
}
export default Register;