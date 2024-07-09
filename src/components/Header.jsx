import logo from "../assets/pngs/logo.png";
import myCart from "../assets/pngs/myCart.png";
import rectangle from "../assets/pngs/rectangle.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ( {page}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }

    return(
        <header className="">
      <div className='flex justify-between p-5'>
      <div className="flex items-center space-x-2">

  <img src={rectangle} alt="" />
  <img src={logo} alt="logo" width={52} height={21} className="absolute pr-2"/>
  <div>
    <span className="font-bold text-[14px] mr-3">BARON</span>
    <span className="font-normal text-[14px] font-['Josefin Sans']">AUTOPARTS</span>
  </div>
</div>

     <svg className='cursor-pointer md:hidden'
     onClick={toggleMenu}
     xmlns="http://www.w3.org/2000/svg" height="24px"
      viewBox="0 -960 960 960" width="24px" 
      fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
     </div>
     
     {showMenu && (
     <nav className='w-[150px] mx-auto text-center mb-3'>
      <ul className="font-normal text-[12px] font-['Monteserrat'] md:flex">
        <span>&times;</span>
        <li>HOME</li>
        <Link to={'/'}>
        <li className='border border-[#000000] bg-[#000000] text-[#FFFFFF] py-1 mt-2'>MOTORCYCLES</li>
        </Link>
        <li className='pt-2'>BIKES</li>
        <li className='pt-2'>BRANDS</li>
      </ul>
     </nav>
      )}
      <nav className='ml-10 mb-3 hidden sm:flex'>
      <ul className="font-normal text-[12px] font-['Monteserrat'] sm:flex sm:justify-around sm:gap-[30px]">
        <li className='pt-2 hover:text-[#CE1515]  font-bold text-[18px] cursor-pointer' >HOME</li>
        <Link to={'/'}>
        <li className='border border-[#000000] font-bold text-[18px] cursor-pointer hover:text-[#CE1515] bg-[#000000] text-[#FFFFFF] py-1 px-2 mt-2'>MOTORCYCLES</li>
        </Link>
        <li className='pt-2 hover:text-[#CE1515] font-bold text-[18px] cursor-pointer'>BIKES</li>
        <li className='pt-2 hover:text-[#CE1515] font-bold text-[18px] cursor-pointer'>BRANDS</li>
      </ul>
     </nav>
     <button className="border border-[#000000] text-[#OOOOOO] rounded-xl py-2 px-10 float-right mt-2">Search</button>
    <div className='flex justify-between p-5'>
      <div></div>
      <p className="font-bold text-[16px]">{page}</p>
      <Link to={'/cart'}>
      <img src={myCart} alt="" width={24} height={24}/>
      </Link>
    </div>
    </header>
    );
}

export default Header;