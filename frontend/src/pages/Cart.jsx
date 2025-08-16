import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title";

const Cart = () => {

  const { products, currency, cartItems } = useContext(ShopContext);

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
            <div key={index} className="flex justify-between border-b py-2">
              <div>
                <h3 className="text-lg font-semibold">{productData?.name}</h3>
                <p className="text-gray-500">Size: {item.size}</p>
              </div>
              <div>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-gray-500">Price: {currency}{(productData?.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart