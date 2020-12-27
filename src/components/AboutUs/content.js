import React, { useDebugValue } from 'react';
function Content() {
  return (
    <div className="Content">
        <div className="flex justify-center my-20">
            <div>
                <div className="flex justify-center">
                    <div className="text-5xl mb-20 mt-10 border-b-4 bg-primary bg-opacity-30 text-gray-800 border-primary  font-bold p-2 px-4">WHO ARE WE</div>
                </div>
                <div className="text-center px-48 my-4">
                    <p className=" text-xl "> EasyFix was launched in November 2020. It is the largest home services platform in Asia, with presence in India, UAE, Singapore and Australia. The platform helps customers book reliable home services like beauty services, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting etc. The company's vision is to empower millions of service professionals across the world to deliver services at home like never seen before. The company partners with tens of thousands of service professionals, helping them with  with training, credit, product procurement, insurance, technology etc
                    </p>
                </div>
                <div className=" flex justify-between mx-60 my-32 text-black">
                    <div>
                        <p className="text-2xl text-center font-bold m-2">2500+</p>
                        <p>Trained Professionals</p>
                    </div>
                    <div><p className="text-2xl text-center font-bold m-2">5 Million+</p>
                    <p>Happy Customers</p></div>
                    <div><p className="text-2xl text-center font-bold m-2">5</p>
                    <p>Cities</p></div>
                </div>
            </div>
        </div>  
    </div>
  );
}
export default Content;