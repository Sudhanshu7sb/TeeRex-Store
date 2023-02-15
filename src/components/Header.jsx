import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

function Header() {
  const{total_items} =useCartContext();
  return (
    <header className='flex justify-between w-[100%] bg-sky-700 text-white p-2 pr-3 sticky top-0'>
      <h2 className='font-semibold w-[30%] text-left ml-3'><NavLink to="/">TeeRex Store</NavLink></h2>
      <nav className='w-[50%] md:w-[30%] '>
        <ul className='flex items-center justify-end  space-x-4 md:pr-3'>
          <li className='hidden md:block'><NavLink to="/" >Products</NavLink></li>
          <li className='relative'><NavLink to="/cart" >
            <AiOutlineShoppingCart className='text-2xl' />
            <small className=' text-black bg-white absolute w-[15px]   top-0 -right-2 rounded-full text-xs text-center'>{total_items}</small>
          </NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header