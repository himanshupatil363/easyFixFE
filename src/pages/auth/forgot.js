import {useState} from 'react'
import Forget from '../../assets/images/forgot.svg'
import axios from "axios";
import { NavLink} from 'react-router-dom'
const Forgot =()=> {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="Forgot h-screen w-full bg-primary flex justify-center content-center items-center">
        <div className="flex rounded-2xl justify-center bg-white shadow-2xl">
          <div className=" rounded-l-2xl bg-dpri p-24 flex items-center">
              <img className="w-96" src={Forget} alt=""/>
          </div>
          <div className="py-12 px-28">
            <p className="text-dpri text-3xl py-2">Reset your password!</p>
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">{success}</span>}
             <form  onSubmit={forgotPasswordHandler} className="flex flex-col mt-2">
               <label className="mt-10">Enter your email id</label>
               <input type="email" className=" border-b-2 border-dpri outline-none w-60"  value={email} onChange={(e) => setEmail(e.target.value)}/>
               <input type="submit" className="mt-10 py-2 bg-dpri text-white rounded-md border-2 border-dpri outline-none cursor-pointer hover:bg-white hover:text-dpri  duration-1000  font-semibold text-lg mx-10" value="Send Reset Link" />
             </form>
              <p className="my-8 mb-10 ml-2 flex justify-center">Go back to&nbsp;<NavLink to="/login" className="text-dpri">Login&nbsp;</NavLink>page</p>
          </div>
        </div>
        <div>
       
        </div>
    </div>
  );
}
export default Forgot;