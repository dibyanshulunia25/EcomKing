import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Cart = () => {

  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])


  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3 ml-10">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div>
        {cartData.map((item,index) =>{
          const productData = products.find((product)=>product._id === item._id);
          return (
            <div key={index} className="py-4 px-10 border-t border-b border-gray-200 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} alt={productData?.name} className="w-16 sm:w-20 object-cover" />
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold">{productData?.name}</h3>
                  <p className="text-gray-500">Size: {item.size}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-gray-500">Price: {currency}{(productData?.price * item.quantity).toFixed(2)}</p>
              </div>
              <img src={assets.bin_icon} alt="bin" onClick={() => updateQuantity(item._id, item.size, item.quantity-1)} onDoubleClick={()=>updateQuantity(item._id, item.size, 0)} className="w-4 md:w-5 cursor-pointer" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart