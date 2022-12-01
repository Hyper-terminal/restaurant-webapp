import React from 'react';

import './NavbarCart.css';
const NavbarCart = (props) => {
  return (
    <>
      <div onClick={props.onClick} className="header__cart">
        <h3>🛒 Your Cart </h3>
        <div className="header-cart__counter">0</div>
      </div>
    </>
  );
};

export default NavbarCart;
