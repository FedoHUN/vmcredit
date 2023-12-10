import React, { useState } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return(
    <div className="flex w-full justify-between items-center h-12 max-w-[1240px] mx-auto px-4 text-white">
      <img className="w-20" src={Logo} />
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Features</li>
        <li className="p-4">Pricing</li>
        <li className="p-4">FAQ</li>
        <li className="p-4">Benefits</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <IoCloseOutline size={20} /> : <IoMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#060606] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <h1 className="w-full text-2xl font-bold bg-silver-gradient bg-clip-text text-transparent m-4">MVCredit</h1>
        <ul className="uppercase p-4">
          <Link to='/'><li className="p-4 border-b border-gray-600 hover:bg-gray-600">Home</li></Link>
          <Link to='/features'><li className="p-4 border-b border-gray-600 hover:bg-gray-600">Features</li></Link>
          <Link to='/pricing'><li className="p-4 border-b border-gray-600 hover:bg-gray-600">Pricing</li></Link>
          <Link to='/faq'><li className="p-4 border-b border-gray-600 hover:bg-gray-600">FAQ</li></Link>
          <li className="p-4 border-b border-gray-600 hover:bg-gray-600">Benefits</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;