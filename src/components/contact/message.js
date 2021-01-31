import {useState} from 'react';
import axios from 'axios';
import contact from '../../assets/images/contact.jpg';
const Message = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [msg,setMsg] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const submitFeedback = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/user/feedback",
        {
          name,
          email,
          msg,
        },
        config
      );
      console.log(data)
      setSuccess(data.feedback.name);
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="Message bg-cover" style={{backgroundImage:`url(${contact})`}}>
        <div className="flex justify-center">
            <div className="bg-gray-300 rounded-xl border-gray-400 border-2 bg-opacity-25 flex justify-between p-16 mt-24 mb-28" style={{backdropFilter: `blur(6px)`}}>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2466210648813!2d73.81269391484268!3d18.51775418741054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e53a05f9%3A0x2be5e8da02be693e!2sMIT%20World%20Peace%20University!5e0!3m2!1sen!2sin!4v1608570730165!5m2!1sen!2sin" className="h-96 w-96 rounded-xl border-8 border-gray-300" title="hello" />
                </div>
                <div className="mx-20">
                    <form className="flex flex-col"  onSubmit={submitFeedback}>
                        <label for="name" className="my-1 text-lg">
                            Name
                        </label>
                        <input className="border-2 border-gray-500 outline-none my-2 h-10 rounded-lg hover:border-primary focus:border-primary opacity-80 transition ease-in-out duration-500" type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
                        <label for="email" className="my-1 text-lg">
                            Email
                        </label>
                        <input className="border-2 border-gray-500 outline-none my-2 h-10  rounded-lg focus:border-primary hover:border-primary opacity-80  transition ease-in-out duration-500" type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                        <label for="msg" className="my-1 text-lg">
                            Message
                        </label>
                        <textarea className="outline-none border-2 border-gray-500 my-2 w-96 hover:border-t-2 focus:border-primary h-32 rounded-lg hover:border-primary opacity-80  transition ease-in-out duration-500" name="msg" id="msg" onChange={(e)=>setMsg(e.target.value)}/>
                        {error && <span className="error-message">{error}</span>}
                        {success && <span className="success-message">hello ,{success} your feedback is successfully submimtted</span>}
                        <button className="bg-dull text-white rounded-xl px-10 py-3 text-lg  duration-1000  hover:bg-white hover:text-green-500 text-center mt-10 focus:outline-none outline-none"  type="submit">Send Message</button>
                    </form>
                </div>                      
            </div>
        </div>
    </div>
  );
}
export default Message;