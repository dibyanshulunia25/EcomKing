import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null
      }
    });

  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="p-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-0.5 flex flex-col-reverse gap-2 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full">
            {
              productData.image.map((img, index) => (
                <img onClick={() => setImage(img)} key={index} src={img} alt={`Product Image ${index + 1}`} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image}></img>
          </div>
        </div>

        {/* product details */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-gray-500">{productData.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <img src={assets.star_icon} alt="" className="w-[3.5] " />
            <img src={assets.star_icon} alt="" className="w-[3.5] " />
            <img src={assets.star_icon} alt="" className="w-[3.5] " />
            <img src={assets.star_icon} alt="" className="w-[3.5] " />
            <img src={assets.star_dull_icon} alt="" className="w-[3.5] " />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-2xl font-medium">{currency}{productData.price}</p>
          <p className="mt-2 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 mt-5">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} key={index} className={`border border-gray-300 px-4 py-2 rounded-md transition-colors ${size === item ? "bg-gray-500" : "bg-gray-100"}`}>{item}</button>
              ))}
            </div>
          </div>
          <button className="uppercase bg-black text-white mt-4 py-2 px-4 rounded-md text-sm active:bg-gray-700">Add to cart</button>
          <hr className="mt-8 sm:w-4/8 text-gray-200" />
          <div className="text-sm text-gray-500 mt-4 flex flex-col gap-1">
            <p className="upper text-gray-400 text-md font-medium">100% original product</p>
            <p className="upper text-gray-400 text-md font-medium">Free returns</p>
            <p className="upper text-gray-400 text-md font-medium">Secure payments</p>
          </div>
        </div>
      </div>
      {/* decription and reviews */}
      <div className="mt-20">
        <div className="flex gap-4">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 mt-2">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi veniam sed repellat amet est voluptatibus deleniti fugiat commodi, blanditiis dignissimos exercitationem molestias explicabo error quia. Molestias veniam tempora, corrupti eius accusantium ipsam odit magnam dolorum enim distinctio error dignissimos voluptates. Consequuntur aspernatur in sapiente.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum. Quisquam, cumque. Doloremque, voluptatibus. Quisquam, cumque. Doloremque, voluptatibus.</p>
        </div>
      </div>


      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product