import { useState, useEffect } from 'react'
import login from '../../assets/login.svg'
import axios from 'axios'
const Login = ({history}) => {
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
        "/admin/login",
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
    return(
        <div className="Login h-screen w-full bg-adbg flex justify-center content-center items-center bg-no-repeat bg-cover " >
        <div className="flex rounded-2xl justify-center  shadow-2xl bg-adbg">
          <div className=" rounded-l-2xl bg-adm p-24 flex items-center">
               <img className="h-80" src={login} alt=""/> 
          </div>
          <div className="py-8 px-20" >
            <p className="text-adm text-3xl py-2">hello!</p>
            <p className="text-adm text-3xl font-bold pb-2">Welcome to EasyFix</p>
            {error && <span className="error-message">{error}</span>}
             <form className="flex flex-col mt-2" onSubmit={loginHandler}>
               <label className="mt-10">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-adm bg-adbg outline-none" onChange={(e)=>{ setEmail(e.target.value)}} />
               <label className="mt-8">Enter Password</label>
               <input type="password" className="border-b-2 border-adm bg-adbg outline-none" onChange={(e)=>{ setPassword(e.target.value)}}/>
               <input type="submit" className="mt-10 py-2 bg-adm text-adbg rounded-md border-2 border-adm outline-none cursor-pointer hover:bg-adbg hover:text-adm  duration-1000  font-semibold text-lg mx-10" value="Login" />
             </form>
          </div>
        </div>
    </div>
    );
}
export default Login;