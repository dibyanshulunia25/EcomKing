import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const location = useLocation();

    useEffect(() => {
        // Hide search bar when navigating to a different page
        if (location.pathname !== '/collection') {
            setShowSearch(false);
        }
    }, [location.pathname, setShowSearch]);
    
    return showSearch ? (
        <div className='border-b border-gray-100 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit test-sm' type="text" placeholder='Search' />
                <img className='w-4' src={assets.search_icon} alt="" />
            </div>
            <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
        </div>
    ) : null
}

export default SearchBar