import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);
    return (
        <div className="bg-gray-200 shadow-md shadow-gray-300">
            <div className='flex justify-between items-center p-5 text-2xl'>
                <Link to={'/'} >
                    <img src={assets.logo} alt="" className='w-36' />
                </Link>
                <ul className='hidden sm:flex gap-5 text-lg text-gray-500'>
                    <NavLink to={'/'} className='flex flex-col items-center gap-1 hover:text-gray-800' >
                        <p>Home</p>
                        <hr className='w-1/2 h-[1.5px] bg-gray-500 hidden' />
                    </NavLink>
                    <NavLink to={'/collection'} className='flex flex-col items-center gap-1 hover:text-gray-800' >
                        <p>Collection</p>
                        <hr className='w-1/2 h-[1.5px] bg-gray-500 hidden' />
                    </NavLink>
                    <NavLink to={'/about'} className='flex flex-col items-center gap-1 hover:text-gray-800' >
                        <p>About</p>
                        <hr className='w-1/2 h-[1.5px] bg-gray-500 hidden' />
                    </NavLink>
                    <NavLink to={'/contact'} className='flex flex-col items-center gap-1 hover:text-gray-800' >
                        <p>Contact</p>
                        <hr className='w-1/2 h-[1.5px] bg-gray-500 hidden' />
                    </NavLink>
                </ul>
                <div className="flex items-center gap-6">
                    <img onClick={() => { setShowSearch(true) }} src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
                    <div className="group relative">
                        <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile icon" />
                        <div className='hidden group-hover:block absolute right-0 top-6 bg-gray-200 shadow-md rounded-md p-3 w-40 z-10'>
                            <div className='flex flex-col gap-2 text-sm text-gray-500'>
                                <NavLink to={'/login'} className='hover:text-gray-800'>My profile</NavLink>
                                <NavLink to={'/orders'} className='hover:text-gray-800'>Orders</NavLink>
                                <NavLink to={'/'} className='hover:text-gray-800'>Logout</NavLink>
                            </div>
                        </div>
                    </div>
                    <Link to={'/cart'} className='relative'>
                        <img src={assets.cart_icon} alt="Cart icon" className='w-5 cursor-pointer' />
                        <span className='absolute -top-2 -right-2 w-4 bg-red-500 text-white text-center text-xs rounded-full px-[1px]'>{getCartCount()}</span>
                    </Link>
                    <img onClick={() => { setVisible(true) }} onDoubleClick={() => { setVisible(false) }} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />
                </div>
            </div>
            {/* side bar for small screens */}
            <div>
                {visible && (
                    <div className='fixed top-20 right-0 w-[200px] h-[150px] bg-gray-200 z-20 flex flex-col items-start justify-center gap-2 sm:hidden'>
                        <div onClick={() => { setVisible(false) }} className='absolute top-0 right-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <NavLink onClick={()=>setVisible(false)} to={'/'} className='text-lg hover:border-b-2 w-full text-center text-gray-500 hover:text-gray-800'>Home</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to={'/collection'} className='text-lg hover:border-b-2 w-full text-center  text-gray-500 hover:text-gray-800'>Collection</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to={'/about'} className='text-lg hover:border-b-2 w-full text-center text-gray-500 hover:text-gray-800'>About</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to={'/contact'} className='text-lg hover:border-b-2 w-full text-center text-gray-500 hover:text-gray-800'>Contact</NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar