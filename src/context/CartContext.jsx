import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //card state
  const [cart, setCart] = useState([]);

  //item amount state
  const [itemAmount, setItemAmount] = useState(0);

  //total price state
  const [total, setTotal] = useState(0);

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      setItemAmount(amount);
    }
  }, [cart]);

  //update item total price
  useEffect(() => {
    if (cart) {
      const totalPrice  = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount
      }, 0);

      setTotal(totalPrice);
    }
  }, [cart]);

  //add to cart
  const addToCart = (product, id) => {
    const newItem = {
      ...product,
      amount: 1,
    };

    // check if the item is already in the card
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // If cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    // console.log(cart);
  };

  //remove from cart
  const removeFromCart = (id) => {
    const newRemovedCart = cart.filter((item) => item.id !== id);

    setCart(newRemovedCart); // update state
  };

  const clearCart = () => {
    setCart([]);
  };

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
	   total
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
