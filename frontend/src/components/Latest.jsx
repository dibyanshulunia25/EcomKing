import React, { use, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useState } from 'react';

const Latest = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 20));
    }, []);

  return (
    <div className='p-5 bg-gray-100'> 
        <div className="text-center py-5 text-3xl">
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa corporis et dolores, autem incidunt ullam ab atque.
            </p>
        </div>
        {/* rendering items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
            {latestProducts.map((product) => (
                <div key={product.id} className='border border-gray-300 rounded-md p-3 flex flex-col gap-3 items-center'>
                    <div className='border border-gray-100 shadow-xl shadow-[#f4e5b86a] rounded-2xl bg-[#FAF9F6]'>
                        <img src={product.image} alt={product.name} className='h-50 w-auto rounded-2xl' />
                    </div>
                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                    <p className='text-gray-500'>${product.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Latest