import React from 'react';
import t1 from '../../assets/images/t1.jpeg'
const Tweets = () => {
    return (
        <div className="Tweets bg-ter">
            <div className="flex w-full justify-center">
                <div className="flex  justify-between">
                    <img src={t1} className=" h-40 p-3 rounded-3xl m-3 " />
                    <img src={t1} className=" h-40 p-3 rounded-3xl m-3 " />
                    <img src={t1} className=" h-40 p-3 rounded-3xl m-3 " />
                    <img src={t1} className=" h-40 p-3 rounded-3xl m-3 " />
                </div>
            </div>
        </div>
    );
  }
  export default Tweets;
  