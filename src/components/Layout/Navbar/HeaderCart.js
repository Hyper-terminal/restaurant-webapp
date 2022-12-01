import React from 'react';


import "./HeaderCart.css";
import CartItemCounter from "./CartItemCounter";

const HeaderCart = () => {
	return (
		<>
			<div className="header__cart">
				<h3>🛒 Your Cart </h3>
				<CartItemCounter />
			</div>
		</>
	);
};

export default HeaderCart;
