import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related,setRelated]=useState([]);

    useEffect(() => {
        if(products.length>0){
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => (
                item.category === category && item.subCategory === subCategory
            ));

            setRelated(productsCopy.slice(0,5));

        }
    },[products])

  return (
    <div className='my-20'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={"Products"} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6'>
            {
                related.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts