import React from 'react';
import CartContext from './cart-context.js';

const CartProvider = (props) => {
  const [items, setItems] = React.useState([]);
  const [totalAmount, setTotalAmount] = React.useState(0);

  const addItemToCartHandler = (item) => {
    setTotalAmount((prev) => prev + Number(item.quantity) * item.price);

    // check if item already exists or not
    const itemIndex = items.findIndex((arrItem) => arrItem.id === item.id);

    if (itemIndex >= 0) {
      setItems((prev) => {
        let updatedItems = [...prev];
        updatedItems[itemIndex].quantity =
          Number(updatedItems[itemIndex].quantity) + Number(item.quantity);
        return updatedItems;
      });
      // [itemIndex].amount += action.item.amount;
    } else {
      setItems((prevVal) => {
        return [...prevVal, item];
      });
    }
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
