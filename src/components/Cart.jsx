import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext'
import CartItem from './CartItem';
import { BsArrowLeft } from "react-icons/bs";

const Cart = () => {
  const { cart, total_price, clearCart } = useCartContext();

  if (cart.length === 0) {
    return <section className='h-[50vh] flex flex-col justify-center items-center gap-5'>
      <h4>
        No Items in Cart
      </h4>
      <NavLink to="/">
        <button className='mx-4 flex items-center border-2 border-transparent bg-sky-700 text-white p-1 hover:bg-transparent hover:text-sky-700 hover:border-2 hover:border-sky-700'>
          <span><BsArrowLeft /></span>
          Continue Shopping
        </button>
      </NavLink>
    </section>
  }


  return (
    <section className='w-full flex justify-center items-center'>
      <main >
        <header className='grid grid-cols-5'>
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
          <p>Remove</p>
        </header>
        <hr />
        <article>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </article>
        <hr />
        <div className='my-5 flex items-center justify-center'>
          <NavLink to="/">
            <button className='mx-4 flex items-center border-2 border-transparent bg-sky-700 text-white p-1 hover:bg-transparent hover:text-sky-700 hover:border-2 hover:border-sky-700'>
              <span><BsArrowLeft /></span>
              Continue Shopping
            </button>
          </NavLink>
          <button className='text-red-600' onClick={() => clearCart()}>Clear Cart</button>
        </div>
        <div>
          <p>Total Price :  <span className='text-sky-700'>
            Rs {total_price}
          </span>
          </p>
        </div>
      </main>
    </section>
  )
}

export default Cart