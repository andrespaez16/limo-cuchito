import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img src={logo} alt="/" className="w-[200px] mx-auto mt-10" />
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'></h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Services</li>
        <li className='p-4'>Team</li>
        <li className='p-4'>Fleet</li>
        <li className='p-4'>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='p-4 border-b border-gray-600'>Services</li>
          <li className='p-4 border-b border-gray-600'>Team</li>
          <li className='p-4 border-b border-gray-600'>Fleet</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
