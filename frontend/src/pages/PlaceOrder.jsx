import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = React.useState('COD');
  const {navigate}=useContext(ShopContext);

  return (
    <div className='flex flex-col px-10 sm:flex-row justify-between gap-4 pt-5 sm:pt-10 min-h-[85vh]'>
      {/* -------------------Left side----------------*/}

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'information'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='city' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='zip code' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='country' />
        </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="tel" placeholder='Phone' />
      </div>
      {/* -----------------Right Side--------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12 mx-10">
          <Title text1={'Payment'} text2={'Method'}/>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-2 border border-gray-300 rounded-xl p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-50 rounded-full ${method === 'stripe'? 'bg-green-400':''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt='Stripe' />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-2 border border-gray-300 rounded-xl p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-50 rounded-full ${method === 'razorpay'? 'bg-green-400':''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt='razor pay' />
            </div>
            <div onClick={()=>setMethod('COD')} className='flex items-center gap-2 border border-gray-300 rounded-xl p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-50 rounded-full ${method === 'COD'? 'bg-green-400':''}`}></p>
              <p className='text-gray-500 text-md font-medium mx-4'>Cash on delivery</p>
            </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-2 text-md rounded-2xl uppercase' >Place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder