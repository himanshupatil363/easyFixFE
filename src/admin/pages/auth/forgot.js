import React,{useState} from 'react'
import Forget from '../../assets/forgot.svg'
import Modal from 'react-modal'
import { NavLink} from 'react-router-dom'
import check from '../../../assets/images/check.svg'
const Forgot =()=> {
  const [modal,setModal] = useState(false)
  return (
    <div className="Forgot h-screen w-full bg-adbg flex justify-center content-center items-center bg-no-repeat">
        <div className="flex rounded-2xl justify-center bg-white shadow-2xl">
          <div className=" rounded-l-2xl bg-adm p-24 flex items-center">
              <img className="w-96" src={Forget} alt=""/>
          </div>
          <div className="py-12 px-28">
            <p className="text-adm text-3xl py-2">Reset your password!</p>
             <form className="flex flex-col mt-2">
               <label className="mt-10">Enter your email id</label>
               <input type="email" className=" border-b-2 border-adm outline-none w-60" />
               <input type="submit" onClick={ () => setModal(true)} className="mt-10 py-2 bg-adm text-white rounded-md border-2 border-adm outline-none cursor-pointer hover:bg-white hover:text-adm  duration-1000  font-semibold text-lg mx-10" value="Send Reset Link" />
             </form>
              <p className="my-8 mb-10 ml-2 flex justify-center">Go back to&nbsp;<NavLink to="/login" className="text-adm">Login&nbsp;</NavLink>page</p>
          </div>
        </div>
        <div>
        <Modal isOpen={modal} className=" bg-white h-full w-full flex flex-col justify-center items-center">
          <p className="text-2xl mb-10">Password reset link sent to your mail</p>
          <img src={check} alt="" className="h-20"/>
        </Modal>
        </div>
    </div>
  );
}
export default Forgot;