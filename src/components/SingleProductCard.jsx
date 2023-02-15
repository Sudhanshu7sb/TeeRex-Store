import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

function SingleProduct({ product }) {
  const { id, name,  price, imageURL } = product;
  const { addToCart } = useCartContext();
  // eslint-disable-next-line
  const [amount, setAmount] = useState(1);



  return (
    <section className=' w-[80%] md:w-[40%] lg:w-[25%] border-[1px] border-slate-900 hover:border-sky-700 m-2 p-2 shadow-lg rounded-md'>
      <p className='text-left font-medium'>{name}</p>
      <img src={imageURL} alt={name} className="w-[80%] mx-6 my-3 border-2 hover:border-sky-700 p-3" />
      <div className='flex justify-between'>

        <h3>Price : {price}</h3>
        <NavLink to="/cart" onClick={() => addToCart(id, product, amount)}>
          <button className=' border-[1px] bg-sky-700 p-1 text-white hover:text-sky-700 hover:bg-transparent hover:border-sky-700 '>ADD TO CART</button>
        </NavLink>

      </div>
    </section>
  )
}

export default SingleProduct