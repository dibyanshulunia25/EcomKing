import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter(product => product.bestseller);
        setBestSellers(bestProducts.slice(0, 10)); // Assuming you want to show the first 20 best sellers
    }, [])

    return (
        <div className='my-5'>
            <div className="text-center py-5 text-3xl">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 text-gray-600 m-auto text-xs sm:text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi vel cumque fuga dignissimos tenetur laboriosam magni error totam amet?</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
                {bestSellers.map((product) => (
                    <Link to={`/product/${product._id}`}>
                    <div key={product.id} className='border border-gray-300 rounded-md p-3 flex flex-col gap-3 items-center'>
                        <div className='border border-gray-100 shadow-xl shadow-[#f4e5b86a] rounded-2xl bg-[#FAF9F6]'>
                            <img src={product.image[0]} alt={product.name} className='h-50 w-auto rounded-2xl' />
                        </div>
                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                        <p className='text-gray-500'>${product.price}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BestSeller