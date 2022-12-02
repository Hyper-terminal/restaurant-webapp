import React from 'react';
import ReactDom from 'react-dom';
import Card from '../UI/Card/Card';
import classes from './CartModal.module.css';
import Button from '../UI/Button/Button';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem.js';

const CartModal = (props) => {
  const cartCtx = React.useContext(CartContext);

  let totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const removeFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addToCartHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const Cart = () => {
    return (
      <>
        <div onClick={props.onhideCart} className={classes.cart__backdrop} />
        <Card className={classes.cart}>
          <div className={classes.innerCart}>
            <ul>
              {cartCtx.items.map((mealObj) => {
                return (
                  <CartItem
                    key={mealObj.id}
                    name={mealObj.mealName}
                    price={mealObj.price}
                    qty={mealObj.quantity}
                    onRemove={removeFromCartHandler.bind(null, mealObj.id)}
                    onAdd={addToCartHandler.bind(null, mealObj)}
                  />
                );
              })}
            </ul>
            <div className={classes.cart_mealPrice}>
              <h2>Total Amount</h2>
              <h2>${totalAmount}</h2>
            </div>
            <div className={classes.cart_buttons}>
              <Button
                className={classes.closeButton}
                onClick={props.onhideCart}
                name="Close"
              />
              <Button className={classes.orderButton} name="Order" />
            </div>
          </div>
        </Card>
      </>
    );
  };

  return (
    <>
      {ReactDom.createPortal(
        <Cart />,
        document.getElementById('cart-root__modal')
      )}
    </>
  );
};

export default CartModal;
