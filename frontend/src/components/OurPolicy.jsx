import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 text-center text-xs sm:text-sm md:text-base bg-gray-100 p-5 text-gray-600'>
         <div>
            <img src={assets.exchange_icon} alt="exchange icon" className='w-12 m-auto mb-5' />
            <h3 className='text-gray-900 font-semibold mb-2'>Easy Exchange</h3>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
         </div>
         <div>
            <img src={assets.quality_icon} alt="exchange icon" className='w-12 m-auto mb-5' />
            <h3 className='text-gray-900 font-semibold mb-2'>return policy</h3>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
         </div>
         <div>
            <img src={assets.support_img} alt="exchange icon" className='w-12 m-auto mb-5' />
            <h3 className='text-gray-900 font-semibold mb-2'>Customer support</h3>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
         </div>
    </div>
  )
}

export default OurPolicy