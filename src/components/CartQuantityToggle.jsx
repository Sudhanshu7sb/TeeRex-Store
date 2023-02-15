import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartQuantityToggle = ({ id, amount,max, setIncrease, setDecrease }) => {

    return (
        <section className='flex flex-col items-center justify-center'>
            <article className='flex space-x-3 justify-center items-center'>
                <button onClick={() => setDecrease(id)}><FaMinus /></button>
                <div>{amount}</div>
                <button onClick={() => setIncrease(id)}><FaPlus /></button>

            </article>
            <p className='text-xs text-red-600'>{amount === max ? "Maximum order limit" : ""}</p>
        </section>
    )
}

export default CartQuantityToggle