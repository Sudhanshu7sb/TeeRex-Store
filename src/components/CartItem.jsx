import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';
import CartQuantityToggle from './CartQuantityToggle';

const CartItem = ({ id, color, name, image, amount, price, max }) => {

    const { removeProductFromCart, setDecrease, setIncrease } = useCartContext();

    return (
        <section className='grid grid-cols-5'>
            <article className='flex flex-col md:flex-row justify-start items-center pl-4'>

                <div className='w-1/2 h-1/2'>
                    <figure className="w-3/4 h-3/4">
                        <img src={image} alt={name} className="w-full h-full" />
                    </figure>
                </div>
                <div className='text-xs md:text-'>
                    <p>{name}</p>
                    <div className='flex justify-start items-center'>
                        <p>Color:</p>
                        <div style={{ backgroundColor: color, color: color }} className="w-3 h-3 rounded-full">
                        </div>
                    </div>
                </div>
            </article>

            <article className='flex items-center justify-center'>{price} </article>

            {/* quantity */}
            <CartQuantityToggle id={id} amount={amount} setIncrease={() => setIncrease(id)} setDecrease={() => setDecrease(id)} max={max}/>
            {/* subtotal */}
            <article className='flex justify-center items-center'>
                <p>{price * amount} </p>
            </article>
            {/* remove */}
            <div className='flex justify-center items-center'>
                <FaTrash className='text-red-600 cursor-pointer' onClick={() => removeProductFromCart(id)} />
            </div>
        </section>



    )
}

export default CartItem