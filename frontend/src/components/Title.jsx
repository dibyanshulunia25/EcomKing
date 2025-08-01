import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 uppercase'>
        <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        <p className='w-8 mt-0.5 md:w-15 h-[2px] bg-rose-900'></p>
    </div>
  )
}

export default Title