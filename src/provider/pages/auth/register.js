import {useState} from 'react';
import axios from 'axios';
import leaf from '../../assets/home/leaf1.png'
import Reg from '../../assets/register.svg'
import { NavLink} from 'react-router-dom';
const Register = ({history}) => {
  const [providername, setProvidername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/pauth/register",
        {
          providername,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
    return(
        <div className="Register h-screen w-full bg-adbg flex justify-center content-center items-center bg-no-repeat bg-cover " style={{backgroundImage:`url(${leaf})`,backgroundPosition:`135% -80%`,backgroundSize:`40%`}}>
        <div className="flex rounded-2xl justify-center  shadow-2xl bg-adbg">
          <div className=" rounded-l-2xl bg-adpri p-24 flex items-center">
               <img className="h-64" src={Reg} alt=""/> 
          </div>
          <div className="py-6 px-20" >
            <p className="text-adpri text-3xl font-semibold">Welcome to EasyFix !</p>
            {error && <span className="error-message">{error}</span>}
             <form className="flex flex-col mt-2" onSubmit={registerHandler}>
               <label className="mt-6">Enter Name</label>
               <input type="text" className=" border-b-2 border-adpri bg-adbg outline-none" onChange={(e)=>setProvidername(e.target.value)}/>
               <label className="mt-6">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-adpri bg-adbg outline-none" onChange={(e)=>setEmail(e.target.value)}/>
               <label className="mt-6">Enter Password</label>
               <input type="password" className="border-b-2 border-adpri bg-adbg outline-none" value={password} onChange={(e) => setPassword(e.target.value)}/>
               <label className="mt-5">Re-enter password</label>
               <input type="password" className="border-b-2 border-adpri bg-adbg outline-none" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
               <input type="submit" className="mt-8 py-2 bg-adpri text-adbg rounded-md border-2 border-adpri outline-none cursor-pointer hover:bg-adbg hover:text-adpri  duration-1000  font-semibold text-lg mx-10" value="Register" />
             </form>
              <p className="my-8 mb-10 ml-2">Already have an account ?<NavLink to="/login" className="text-adpri"> Login</NavLink></p>
          </div>
        </div>
    </div>
    );
}
export default Register;