import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import './NavbarCart.css';
const NavbarCart = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return (
    <>
      <div onClick={props.onClick} className="header__cart">
        <h3>🛒 Your Cart </h3>
        <div className="header-cart__counter">{numberOfCartItems}</div>
      </div>
    </>
  );
};

export default NavbarCart;
