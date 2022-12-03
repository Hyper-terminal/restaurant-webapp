import React, { useReducer } from 'react';
import CartContext from './cart-context.js';
import CartReducer from './cartReducer.js';

const CartProvider = (props) => {

  const [cart, cartDispatcher] = useReducer(CartReducer, {
    items: [],
    cartTotalAmount: 0
  });

  const addItemToCartHandler = (item) => {
    cartDispatcher({ type: "ADD_ITEMS", item: item })
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatcher({type: "REMOVE_ITEMS", id: id})
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.cartTotalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
