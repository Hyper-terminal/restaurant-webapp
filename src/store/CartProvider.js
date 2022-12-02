import React from 'react';
import CartContext from './cart-context.js';

const CartProvider = (props) => {
  const [items, setItems] = React.useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevVal) => {
      return [...prevVal, item];
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
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
