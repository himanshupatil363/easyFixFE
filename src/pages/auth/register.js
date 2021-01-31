import {useState} from 'react';
import axios from 'axios';
import register from '../../assets/images/register.svg';
import { NavLink } from 'react-router-dom';
const Register = ({history}) => {
  const [username, setUsername] = useState("");
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
        "/api/auth/register",
        {
          username,
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

  return (
    <div className="Register h-screen w-full bg-primary flex justify-center content-center items-center">
        <div className="flex rounded-2xl justify-center bg-white shadow-2xl">
          <div className=" rounded-l-2xl bg-dpri p-24 flex items-center">
              <img className="h-96" src={register} alt=""/>
          </div>
          <div className="py-8 px-20">
            <p className="text-dpri text-3xl font-semibold">Join EasyFix Now</p>
            {error && <span className="error-message">{error}</span>}
             <form className="flex flex-col mt-2" onSubmit={registerHandler}>
               <label className="mt-5">Enter your name</label>
               <input type="text" className=" border-b-2 border-dpri outline-none" value={username} onChange={(e) => setUsername(e.target.value)}/>
               <label className="mt-5">Enter Email Id</label>
               <input type="email" className=" border-b-2 border-dpri outline-none"  value={email} onChange={(e) => setEmail(e.target.value)}/>
               <label className="mt-5">Enter Password</label>
               <input type="password" className="border-b-2 border-dpri outline-none"  value={password} onChange={(e) => setPassword(e.target.value)}/>
               <label className="mt-5">Re-enter password</label>
               <input type="password" className="border-b-2 mb-6 border-dpri outline-none" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
               <input type="submit" className="py-2 bg-dpri text-white rounded-md border-2 border-dpri outline-none cursor-pointer hover:bg-white hover:text-dpri  duration-1000  font-semibold text-lg mx-10" value="Register" />
             </form>
              <p className="my-6 mb-8 ml-2">Already have an account ?<NavLink to="/login" className="text-dpri"> Login</NavLink></p>
          </div>
        </div>
    </div>
  );
}
export default Register; 