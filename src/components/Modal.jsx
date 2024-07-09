// Modal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import check from '../assets/pngs/check.png';

const Modal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 max-w-[500px] mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-xl">
      <p className=" font-bold mb-5">Your order is on the way!</p>
      <img src={check} alt="" width={40} height={40}/>
      <Link to={"/"}>
        <button className='bg-[#CE1515] mt-5 mb-3 text-white py-2 px-3 border border-[#CE1515] rounded-xl max-w-[500px] mx-auto'>
            Continue
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;