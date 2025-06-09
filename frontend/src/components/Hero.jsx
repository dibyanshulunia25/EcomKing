import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-300 m-5'>
            {/* hero left side */}
            <div className="w-full sm:w-1/2 flex justify-center items-center ">
                <div className='text-rose-900'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-rose-900'></p>
                        <p className='uppercase font-medium text-sm md:text-base'>our bestseller</p>
                    </div>
                    <h1 className='uppercase font-extrabold text-3xl lg:text-5xl leading-relaxed'>latest arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-bold uppercase text-sm md:text-base">shop now</p>
                        <p className='w-8 md:w-11 h-[2px] bg-rose-900'></p>
                    </div>
                </div>
            </div>
            {/* hero right side */}
            <div className="w-full sm:w-1/2 flex justify-center">
                <img className='w-full sm:w-2/3' src={assets.hero_img} alt="" />
            </div>    
        </div>
    )
}

export default Hero