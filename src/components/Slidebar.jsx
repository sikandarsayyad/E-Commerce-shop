import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

//Import component
import CartItem from "./CartItem";

//Import sidebar context
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

function Slidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] flex flex-col`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Cart items */}
      <div className="flex flex-col gap-y-2 flex-grow overflow-y-auto overflow-x-hidden border-b">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
             Your cart is empty!
          </div>
        ) : (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        )}
      </div>

      {/* Sidebar bottom */}
      <div className="flex flex-col gap-y-3 py-4 my-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total: </span>${parseFloat(total).toFixed(2)}
          </div>
          <div
            className="flex justify-center items-center cursor-pointer py-4 bg-red-500 text-white w-12 h-12 text-xl"
            onClick={clearCart}
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-2 justify-center items-center text-black w-full font-medium"
        >
          View cart
        </Link>
        <Link
          to="/checkout"
          className="bg-black flex p-2 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Slidebar;
