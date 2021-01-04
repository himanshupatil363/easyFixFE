import React from 'react'
import b from '../../assets/home/back.png';
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return (
        <div className="Hero m-0 p-0">
            <div className="bg-cover h-screen bg-no-repeat" style={{backgroundImage :`url(${b})`,backgroundPosition:`100% 100%`,backgroundSize:`80%`}}>
                <div className="text-6xl sm:text-7xl text-green-600 pt-1 sm:pt-2 mx-10 sm:mx-0 sm:my-24 sm:ml-40">
                    <p className="mt-1 sm:mt-14 text-dull font-bold">Tranform your business </p>
                    <div className="text-6xl sm:text-5xl mt-10 font-bold tracking-wide">
                        <Typewriter
                            options={{
                                strings: ['to online mode now...'],
                                autoStart: true,
                                loop: true,
                                cursorClassName: 'Typewriter__cursor text-danger font-normal',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-aroun">
            <span className="bg-adpri w-full py-20"><p className="font-semibold text-5xl text-gray-400 text-center pb-4">&#8377; 180cr</p><p className="text-center text-xl text-white">Paid out to providers in 2020</p></span>
                <span className="bg-white w-full py-20"><p className="font-semibold text-5xl text-adpri text-center pb-4">3000+</p><p className="text-center text-xl">Providers already on board</p></span>
                <span className="bg-dull w-full py-20"><p className="font-semibold text-5xl text-green-600 text-center pb-4">650000+</p><p className="text-center text-xl text-white">Services delivered each month</p></span>
            </div>
        </div>
    );
}
export default Hero;