import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import './NavbarCart.css';
const NavbarCart = (props) => {
  const cartCtx = useContext(CartContext);

  let qty = 0;
  cartCtx.items.forEach((item) => {
    qty += Number(item.quantity);
  });

  return (
    <>
      <div onClick={props.onClick} className="header__cart">
        <h3>🛒 Your Cart </h3>
        <div className="header-cart__counter">{qty}</div>
      </div>
    </>
  );
};

export default NavbarCart;
