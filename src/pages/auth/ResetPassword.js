import { useState } from "react";
import { Link } from "react-router-dom";
import Forget from '../../assets/images/forgot.svg'
import axios from "axios";

const ResetPassword = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `http://localhost:9990/api/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
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
            {error && <span className="error-message">{error} </span>}
            {success && (
              <span className="success-message">
                {success} <Link to="/login">Login</Link>
              </span>
            )}
             <form  onSubmit={resetPasswordHandler} className="flex flex-col mt-2 h-full">
               <input type="password" required className=" border-b-2 border-dpri outline-none w-60 mt-10" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)}/>
               <input type="password" required className=" border-b-2 border-dpri outline-none w-60 mt-10" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
               <input type="submit" className="mt-10 py-2 bg-dpri text-white rounded-md border-2 border-dpri outline-none cursor-pointer hover:bg-white hover:text-dpri  duration-1000  font-semibold text-lg mx-10" value="Reset" />
             </form>
          </div>
        </div>
    </div>
  );
};

export default ResetPassword;