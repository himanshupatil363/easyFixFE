import React, { useDebugValue } from 'react';
function Content() {
  return (
    <div className="Content">
        <div className="flex justify-center">
            <div className="py-4 bg-gray-300 border-2 border-gray-300 shadow-2xl w-full mx-40 my-10 rounded-2xl bg-opacity-25 text-black " style={{backdropFilter: `blur(8px)`}}>
                <div className="flex justify-center">
                    <div className="text-3xl m-10 font-bold">Who are we</div>
                </div>
                <div className="text-center px-48 my-4">
                    <p className=" text-xl "> EasyFix was launched in November 2020. It is the largest home services platform in Asia, with presence in India, UAE, Singapore and Australia. The platform helps customers book reliable home services like beauty services, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting etc. The company's vision is to empower millions of service professionals across the world to deliver services at home like never seen before. The company partners with tens of thousands of service professionals, helping them with  with training, credit, product procurement, insurance, technology etc
                    </p>
                </div>
                <div className=" flex justify-between mx-60 mt-20">
                    <div>
                        <p className="text-2xl text-gray-600 text-center font-bold m-2">2500+</p>
                        <p>Trained Professionals</p>
                    </div>
                    <div><p className="text-2xl text-center text-gray-600 font-bold m-2">5 Million+</p>
                    <p>Happy Customers</p></div>
                    <div><p className="text-2xl text-center text-gray-600 font-bold m-2">5</p>
                    <p>Cities</p></div>
                </div>
                <div className="flex justify-center mt-20">
                    <div className="text-3xl m-10 font-bold">Our story so far</div>
                </div>
                <div className="text-center px-48 my-4 mb-20">
                    <p className=" text-xl ">19 cities in India: Ahmedabad, Bangalore, Bhopal, Bhubaneswar, Chandigarh Tricity, Chennai, Delhi NCR, Hyderabad, Indore, Jaipur, Kolkata, Lucknow, Ludhiana, Mumbai, Nagpur, Pune, Surat, Vadodara, Visakhapatnam
                    </p>
                </div>
            </div>
        </div>  
    </div>
  );
}
export default Content;