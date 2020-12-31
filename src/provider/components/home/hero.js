import React from 'react'
import b from '../../assets/home/back.png';
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return (
        <div className="Hero m-0 p-0">
            <div className="bg-cover h-screen" style={{backgroundImage :`url(${b})`}}>
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
        </div>
    );
}
export default Hero;