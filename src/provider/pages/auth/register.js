import React from 'react'
import leaf from '../../assets/home/leaf1.png'
import Reg from '../../assets/register.svg'
import { NavLink} from 'react-router-dom';
const Register = () => {
    return(
        <div className="Register h-screen w-full bg-adbg flex justify-center content-center items-center bg-no-repeat bg-cover " style={{backgroundImage:`url(${leaf})`,backgroundPosition:`135% -80%`,backgroundSize:`40%`}}>
        <div className="flex rounded-2xl justify-center  shadow-2xl bg-adbg">
          <div className=" rounded-l-2xl bg-adpri p-24 flex items-center">
               <img className="h-64" src={Reg} alt=""/> 
          </div>
          <div className="py-6 px-20" >
            <p className="text-adpri text-3xl font-semibold">Welcome to EasyFix !</p>
             <form className="flex flex-col mt-2">
               <label className="mt-8">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-adpri bg-adbg outline-none" />
               <label className="mt-6">Enter Name</label>
               <input type="text" className=" border-b-2 border-adpri bg-adbg outline-none" />
               <label for="cat" className="mt-6">Choose a Category</label>
                <select id="cat"className="bg-adbg mt-3 p-2 border-2 border-adpri focus:outline-none">
                  <option className="" value="cat1">cat1</option>
                  <option value="cat2">cat2</option>
                </select>
               <label className="mt-6">Enter Password</label>
               <input type="password" className="border-b-2 border-adpri bg-adbg outline-none"/>
               <label for="fpwd" className="flex justify-end mt-2 text-adpri items-center">Show Password<input type="checkbox" id="fpwd" className="ml-2"/></label>
               <input type="submit" className="mt-8 py-2 bg-adpri text-adbg rounded-md border-2 border-adpri outline-none cursor-pointer hover:bg-adbg hover:text-adpri  duration-1000  font-semibold text-lg mx-10" value="Register" />
             </form>
              <p className="my-8 mb-10 ml-2">Already have an account ?<NavLink to="/login" className="text-adpri"> Login</NavLink></p>
          </div>
        </div>
    </div>
    );
}
export default Register;