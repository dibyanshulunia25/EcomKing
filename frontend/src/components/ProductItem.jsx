import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
const {currency} = useContext(ShopContext);

  return (
    <>
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img src={image[0]} alt={name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
        </Link>
    </>
  )
}

export default ProductItem