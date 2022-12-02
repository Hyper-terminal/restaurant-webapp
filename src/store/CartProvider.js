import React from 'react';
import CartContext from './cart-context.js';

const CartProvider = (props) => {
  const [items, setItems] = React.useState([]);
  const [totalAmount, setTotalAmount] = React.useState(0);

  const addItemToCartHandler = (item) => {
    setTotalAmount((prev) => prev + item.quantity * item.price);

    setItems((prevVal) => {
      return [...prevVal, item];
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
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
