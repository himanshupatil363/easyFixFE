import React from 'react';
import t1 from '../../assets/images/tweets/t1.jpeg'
import t2 from '../../assets/images/tweets/t2.jpeg'
import t3 from '../../assets/images/tweets/t3.jpeg'
import t4 from '../../assets/images/tweets/t4.jpeg'
const Tweets = () => {
    return (
        <div className="Tweets bg-white mt-30 mx-20">
            <div className="flex-column w-full justify-center">
                <div className="flex justify-center">
                    <p className=" text-5xl font-bold text-dull my-32 " >What customers are saying about us</p>
                </div>
                <div className="flex  justify-between mb-20">
                    <img src={t1} className=" h-44 p-2 rounded-3xl m-3 " />
                    <img src={t2} className=" h-44 p-2 rounded-3xl m-3 " />
                    <img src={t3} className=" h-44 p-2 rounded-3xl m-3 " />
                    <img src={t4} className=" h-44 p-2 rounded-3xl m-3 " />
                </div>
            </div>
        </div>
    );
  }
  export default Tweets;
  