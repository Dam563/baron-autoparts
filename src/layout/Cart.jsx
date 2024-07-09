import React,  { useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const removeItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    useEffect(() => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(cart);
    }, []);
    return (
        <div>
        <Header
        page="Cart"
         />
         {cartItems.map((item, index) => (
            <div key={index} className="mt-5">
                <span className="float-right mr-[20px] w-[30px] h-[30px]" onClick={() => removeItem(index)}>&times;</span>
                <img src={item.image} alt={item.title}width={87} height={70} className="ml-5"/>
                <h3 className="text-[#000000] text-[14px] font-bold mt-3 ml-5">{item.title}</h3>
                <p className="text-[#DCDCDC] text-[14px] font-normal mt-3 ml-5">{item.description}</p>
                <p className="text-grey text-[14px] font-normal mt-3 ml-5">123456789</p>
                <p className="text-[#CE1515] text-[16px] font-bold mt-3 text-right mr-[20px]">{item.price}</p>
                <select name="" id="" className="ml-5 border border-[#000000] p-[2px]">
                    <option value="">Qty 1</option>
                    <option value="">Qty 2</option>
                    <option value="">Qty 3</option>
                    <option value="">Qty 4</option>
                    <option value="">Qty 5</option>
                </select>
                <div className="border-b-[1px] border-[#000000] mx-[10px] my-[10px] pt-5"></div>
            </div>
           
        ))} 
        <div className="bg-[#DCDCDC] border border-[#DCDCDC] mt-5 p-5">
            <div className="flex justify-between">
                <p className="font-bold">Choose Shipping method</p>
                <p className="font-bold">Price</p>
                </div>
                <div className="flex justify-between py-5">
                <div className="flex gap-2">
                <input type="radio" className=""/>
                <label htmlFor="" className="text-[14px]">Regular Shipping <strong>(5-7 days) </strong></label>
                </div>
                <p className="text-[14px]">Free</p>
                </div>
                <div className="flex justify-between">
                <div className="flex gap-2">
                <input type="radio" />
                <label htmlFor="" className="text-[14px]">Express <strong> (Next day delivery)</strong></label>
                </div>
                <p className="font-bold text-[14px]">$15.99</p>
                </div>
            <div className="flex justify-between pt-5">
                <p className="font-bold">Total</p>
                <p>$15.99</p>
            </div>
        </div>
        <Link to="/checkout">
        <button className="bg-[#CE1515] mt-3 mb-3 text-white py-2 px-3 border border-[#CE1515] rounded-xl ml-5">Proceed to Checkout</button>
        </Link>
        <Footer />
        </div>
    );
}

export default Cart;