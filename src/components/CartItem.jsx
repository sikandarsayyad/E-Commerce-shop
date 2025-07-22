import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../context/CartContext';

function CartItem({ item }) {

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  //destruring item
  const { id, title, image, price, amount } = item;

  return (
    <div className='flex  gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex item-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="img" />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title & remove icon */}
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[250px] text-black hover:underline'>
              {title}
            </Link>
            {/* remove icon */}
            <div className='text-xl cursor-pointer' onClick={()=>removeFromCart(id)}>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* qty */}
            <div className='flex flex-1 max-w-[100px] items-center justify-around h-full border font-medium'>
              <div>
                {/* minus icon */}
                <IoMdRemove onClick={()=>decreaseAmount(id)} className='cursor-pointer'/>
              </div>
              {/* amount */}
              <div >{amount}</div>
              <div>
                {/* plus icon */}
                <IoMdAdd onClick={()=>increaseAmount(id)}  className='cursor-pointer'/>
              </div>
            </div>
            {/* item price */}
            <div className='flex flex-1 justify-around items-center'>$ {price}</div>
            {/*Make the final price at 2 decimal */}
            <div className='flex flex-1 justify-end items-center text-black font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem