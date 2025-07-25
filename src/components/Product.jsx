import React, {useContext} from 'react';
import { BsPlus, BsEyeFill } from 'react-icons/bs'; 'react-icons/bs';
import { Link } from 'react-router-dom';

//import cardcontext
import { CartContext } from '../context/CartContext';

function Product({product}) {

     const {id, title, image, category, price} = product;
     const {addToCart} = useContext(CartContext);
     
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
          </div>

          {/* button */}
          <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 duration-300 transition-all'>

            <button onClick={()=>addToCart(product, id)}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 cursor-pointer'>
                <BsPlus className='text-3x1'/>
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl'>
              <BsEyeFill/>
            </Link>

          </div>
        </div>



      </div>
      {/* category & title & price */}
      <div className='text-sm capitalize text-gray-500 mb-1'>
        <div>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  )
}

export default Product