import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '₹'; // Define the currency symbol you want to use
    const delivery_fee = 50; // Define the delivery charges
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true);

    const contextValue = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
} 

export default ShopContextProvider;