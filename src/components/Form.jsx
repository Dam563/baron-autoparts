import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const navigate = useNavigate();

const handleContinue = () => {
  // e.preventDefault(); 
  if (isFormValid) {
    setIsModalOpen(true);
    console.log('Modal should open');
    navigate('/');
  }
  };

  useEffect(() => {
    // Check if all fields are filled
    const checkFormValidity = () => {
      return name.trim() !== '' && cardNumber.trim() !== '' && expiryDate.trim() !== '' && cvv.trim() !== '';
    };

    setIsFormValid(checkFormValidity());
  }, [name, cardNumber, expiryDate, cvv]); // Re-run this effect when any of these state variables change

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="max-w-[500px] ml-5">
      <div className="flex flex-col max-w-[500px] mt-4">
        <label htmlFor="name" className="text-[#CE1515]">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-[200px] md:max-w-[500px] border-b border-black focus:border-[#CE1515] focus:border-b-2 outline-none bg-transparent"
        />
      </div>
      <div className="flex flex-col max-w-[500px] mt-4">
        <label htmlFor="name" className="">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          placeholder='1234 5678 9012 3456'
          onChange={(e) => setCardNumber(e.target.value)}
          className="max-w-[200px] md:max-w-[500px] border-b border-black focus:border-[#CE1515] focus:border-b-2 outline-none bg-transparent"
        />
      </div>
      <div className="flex flex-col max-w-[500px] md:max-w-[700px] mt-4">
        <label htmlFor="message" className="">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          placeholder='mm/yyyy'
          onChange={(e) => setExpiryDate(e.target.value)}
          className="max-w-[200px] md:max-w-[500px] border-b border-black focus:border-[#CE1515] focus:border-b-2 outline-none bg-transparent"
        />
      </div>
      <div className="flex flex-col max-w-[500px] mt-4">
        <label htmlFor="message" className="">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          placeholder='123'
          onChange={(e) => setCvv(e.target.value)}
          className="max-w-[200px] md:max-w-[500px] border-b border-black focus:border-[#CE1515] focus:border-b-2 outline-none bg-transparent"
        />
      </div>
      <p className="font-bold text-[16px] mt-5">Billing Address</p>
                <div className="flex gap-5">
                <div className="flex gap-2">
                    <input type="radio" />
                    <p>Same as Delivery</p>
                </div>
                <div className="flex gap-2">
                    <input type="radio" />
                    <p>Use a different address</p>
                </div>
                </div>
      <button 
        type="button" 
        disabled={!isFormValid}
        onClick={handleContinue}
        className={`px-4 py-2 mt-10 rounded ${
          isFormValid 
            ? 'bg-[#CE1515] text-white hover:bg-[#A61212]' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        CONTINUE
      </button>
    </form>
    {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}/>}
     </div>
  );
};

export default Form;