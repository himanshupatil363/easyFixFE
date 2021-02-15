import React from 'react'
import Up from '../uppane'
const Hero = () => {
    return (
        <div className="w-full ml-60 flex flex-col">
            <Up />
            <div className="flex justify-center bg-white items-center">
                <form className="flex flex-col">
                    <span>
                        <label>Enter the name of the category</label>
                        <input type="text"/>
                    </span>
                    <span>
                        <label>Enter the url of image for the category</label>
                        <input type="text"/>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Hero
