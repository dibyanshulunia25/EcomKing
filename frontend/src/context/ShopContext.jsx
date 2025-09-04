import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '$'; // Define the currency symbol you want to use
    const delivery_fee = 50; // Define the delivery charges
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        let cartData = structuredClone(cartItems);

        if(!size){
            toast.error('Select Product Size');
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData)
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for (const items in cartItems){
            for (const item in cartItems[items]){
                try{
                    if (cartItems[items][item]>0) {
                        totalCount+=cartItems[items][item];
                    }
                }
                catch(error){
                    toast.error(error);
                }
            }
        }
        return totalCount;
    }

    const updateQuantity= async (itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);

        if (cartData[itemId] && cartData[itemId][size]) {
            cartData[itemId][size] = quantity;
        }

        setCartItems(cartData);
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        // let delivery_fee = 0;
        for (const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item]>0){
                        totalAmount += cartItems[items][item] * itemInfo.price;
                        // delivery
                    }
                }
                catch(error){
                    toast.error(error);
                }
            }
        }
        return totalAmount;
    }

    const contextValue = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;