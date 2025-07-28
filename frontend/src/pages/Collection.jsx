// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';

// const Collection = () => {
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [sortOption, setSortOption] = useState('relevant');
//   const [selectedCategory, setSelectedCategory] = useState([]);
//   const [selectedSubCategory, setSelectedSubCategory] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   // Sorting logic
//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortOption === 'low') return a.price - b.price;
//     if (sortOption === 'high') return b.price - a.price;
//     return 0; // relevant (default order)
//   });

//   // Filter products by selected category and subcategory
//     const toggleCategory = (e)=>{
//       if(selectedCategory.includes(e.target.value)){
//         setSelectedCategory(prev => prev.filter(item => item !== e.target.value));
//     }
//       else{
//         setSelectedCategory(prev=>[...prev, e.target.value]);
//       }
//     }

//     const toggleSubCategory = (e)=>{
//       if(selectedSubCategory.includes(e.target.value)){
//         setSelectedSubCategory(selectedSubCategory.filter(item => item !== e.target.value));
//       }
//       else{
//         setSelectedSubCategory([...selectedSubCategory, e.target.value]);
//       }
//     }

//     const appyFilter = () => {
//       let productCopy = [...products];
//       if (selectedCategory.length > 0) {
//         productCopy = productCopy.filter(product => selectedCategory.includes(product.category));
//       }
//       setFilteredProducts(productCopy);
//     }

//     useEffect(() => {
//       setFilteredProducts(products);
//     },[])

//     useEffect(() => {
//       appyFilter();
//     },[selectedCategory, selectedSubCategory, products]);


//   return (
//     <div className='flex flex-col sm:flex-row gap-12 text-xs sm:text-sm md:text-base p-5  bg-[#c2eeec42] text-gray-600'>
//       {/* Filter options */}
//       <div className='flex flex-col gap-2 w- h-[28rem] sm:w-1/4 p-5  border border-gray-300 bg- rounded-lg bg-[#d1e5e442]'>
//         <h3 className='text-xl font-bold mb-4 text-center text-gray-800'>Filters</h3>
//         <div className='flex flex-col gap-2 pl-[120px] p-4 bg-[#c2eeec42] shadow-md rounded-lg'>
//           <h3 className='text-lg font-semibold mb-4'>Category</h3>
//           <label>
//             <input type="checkbox" className='mr-2' value={'Men'} onChange={toggleCategory} />
//             Men
//           </label>
//           <label>
//             <input type="checkbox" className='mr-2' value={'Women'} onChange={toggleCategory} />
//             Women
//           </label>
//           <label>
//             <input type="checkbox" className='mr-2' value={'Kids'} onChange={toggleCategory} />
//             Kids
//           </label>
//         </div>
//         {/* Sub category filter */}
//         <div className='mt-5 bg-[#c2eeec42] shadow-md rounded-lg'>
//           <h4 className='text-md font-semibold text-center p-2 mb-2'>Sub Category</h4>
//           <div className='flex flex-col gap-2 pl-[120px] p-2'>
//             <label>
//               <input type="checkbox" className='mr-2' value={'Top Wear'} onChange={toggleSubCategory} />
//               Top Wear
//             </label>
//             <label>
//               <input type="checkbox" className='mr-2' value={'Bottom Wear'} onChange={toggleSubCategory} />
//               Bottom Wear
//             </label>
//             <label>
//               <input type="checkbox" className='mr-2' value={'Winter wear'} onChange={toggleSubCategory} />
//               Winter wear
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Products list */}
//       <div className='w-full sm:w-3/4'>
//         <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
//           <div className='text-center py-5 text-3xl'>
//             <Title text1={'ALL'} text2={'COLLECTIONS'} />
//           </div>
//           {/* Sort options */}
//           <div className='flex items-center gap-2 px-4 py-2'>
//             <label htmlFor="sort" className='font-semibold'>Sort by:</label>
//             <select
//               id="sort"
//               value={sortOption}
//               onChange={e => setSortOption(e.target.value)}
//               className='border border-gray-300 rounded px-2 py-1 text-sm'
//             >
//               <option value="relevant">Relevant</option>
//               <option value="low">Price: Low to High</option>
//               <option value="high">Price: High to Low</option>
//             </select>
//           </div>
//         </div>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
//           {sortedProducts.map((product) => (
//             <div key={product.id} className='border border-gray-300 rounded-md p-3 flex flex-col gap-3 items-center'>
//               <div className='border border-gray-200 shadow-xl shadow-[#f4e5b86a] rounded-2xl'>
//                 <img src={product.image} alt={product.name} className='h-50 w-auto rounded-2xl' />
//               </div>
//               <h3 className='text-lg font-semibold'>{product.name}</h3>
//               <p className='text-gray-500'>${product.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Collection


import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
      let productCopy = [...products];
      if (category.length > 0) {
        productCopy = productCopy.filter(product => category.includes(product.category));
      }

      if (subCategory.length > 0) {
        productCopy = productCopy.filter(product => subCategory.includes(product.subCategory));
      }
      setFilterProducts(productCopy);
    }

  useEffect(() => {
    setFilterProducts(products);
  }, [products])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter options */}
      <div className='min-w-60 mx-10'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 test-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 cursor-pointer'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 test-sm font-medium'>Sub Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 cursor-pointer'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} />Top Wear
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />Bottom Wear
            </p>
            <p className='flex gap-2 cursor-pointer'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} />Winter wear
            </p>
          </div>
        </div>
      </div>

      {/*Right side Products list */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={"COLLECTIONS"} />
          {/* Sort options */}
          <select className='border-2 border-gray-300 text-sm rounded-md mr-10 p-2'>
            <option value="relevant">Newest Arrivals</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Collection