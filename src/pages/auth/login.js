import login from '../../assets/images/login.svg'
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink} from 'react-router-dom';
function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
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
  return (
    <div className="Login h-screen w-full bg-primary flex justify-center content-center items-center">
        <div className="flex rounded-2xl justify-center bg-white shadow-2xl">
          <div className=" rounded-l-2xl bg-dpri p-24 flex items-center">
              <img className="h-96" src={login} alt=""/>
          </div>
          <div className="py-8 px-20">
            <p className="text-dpri text-3xl py-2">hello!</p>
            <p className="text-dpri text-3xl font-bold pb-2">Welcome to EasyFix</p>
             <form onSubmit={loginHandler} className="flex flex-col mt-2" >
             {error && <span className="error-message">{error}</span>}
               <label className="mt-10">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-dpri outline-none"  onChange={(e) => setEmail(e.target.value)} value={email} tabIndex={1}/>
               <label className="mt-8">Enter Password</label>
               <input type="password" className="border-b-2 border-dpri outline-none" onChange={(e) => setPassword(e.target.value)} value={password} tabIndex={2}/>
               <NavLink to="/forgot" className="flex justify-end mt-2 mb-10 text-dpri">Forgot Password?</NavLink>
               <input type="submit" className=" py-2 bg-dpri text-white rounded-md border-2 border-dpri outline-none cursor-pointer hover:bg-white hover:text-dpri  duration-1000  font-semibold text-lg mx-10" value="Login" />
             </form>
              <p className="my-8 mb-10 ml-2">Don't have an account ?<NavLink to="/register" className="text-dpri"> Create one</NavLink></p>
          </div>
        </div>
    </div>
  );
}
export default Login; 