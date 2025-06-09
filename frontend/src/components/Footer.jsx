import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col justify-evenly sm:grid grid-cols-[3fr_1fr_1fr] gap-14 m-10 text-sm ">
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quos quae reiciendis in consequatur labore molestias doloremque magnam molestiae ipsa, aut explicabo totam. Quod.</p>
                </div>
                <div>
                    <p className='w-full md:w-2/3 text-2xl text-gray-600 uppercase font-bold'>Quick Links</p>
                    <ul className='flex flex-col gap-2 mt-5'>
                        <Link to='/' className='text-gray-600 hover:text-gray-900'>Home</Link>
                        <Link to='/products' className='text-gray-600 hover:text-gray-900'>Products</Link>
                        <Link to='/about' className='text-gray-600 hover:text-gray-900'>About Us</Link>
                        <Link to='/contact' className='text-gray-600 hover:text-gray-900'>Contact Us</Link>

                    </ul>
                </div>
                <div>
                    <p className='w-full md:w-2/3 uppercase text-2xl font-bold text-gray-600'>GET in touch</p>
                    <br />
                    <p className='w-full md:w-2/3 text-lg text-gray-600'>dibyanshulunia@gmail.com</p>
                    <p className='w-full md:w-2/3 uppercase text-lg text-gray-600'>+911-23442-32333</p>

                </div>
            </div>
            <div className='text-center text-md text-gray-600 font-semibold p-3'>
                <hr className='p-2 text-rose-800' />
                Copyright &copy; 2025<span className='text-rose-800'> Dibyanshu Lunia. </span>All rights reserved.
            </div>

        </div>
    )
}

export default Footer