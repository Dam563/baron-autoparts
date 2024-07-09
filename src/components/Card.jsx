import React from "react";
import cart from "../assets/pngs/cart.png";
import { useNavigate } from "react-router-dom";

const Card = ({ image, price, title, description }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const product = { image, price, title, description };
    
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add new product to cart
    const updatedCart = [...existingCart, product];
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    navigate("/cart");
  };

  return (
    <div className="max-w-[193px] w-100 max-h-[366px] bg-[#FFFFFF] shadow-lg mb-10 rounded-[5px] p-5 mx-auto">
      <img src={image} alt="" className="" />
      <p className="text-[#000000] text-[14px] font-bold mt-3">{title}</p>
      <p className="text-[#000000] text-[22px] font-bold mt-3">{price}</p>
      <p className="text-[#D9D9D9] text-[12px] font-normal mt-3">{description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-[#CE1515] text-white flex gap-4 px-3 py-2 rounded-lg mt-3"
      >
        <img src={cart} alt="" width={19} height={19}/>
        <p>Add to cart</p>
      </button>
    </div>
  );
}

export default Card;