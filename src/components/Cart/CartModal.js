import React from 'react';
import ReactDom from 'react-dom';
import Card from '../UI/Card/Card';
import classes from './CartModal.module.css';
import Button from '../UI/Button/Button';

const CartModal = (props) => {
  const Cart = () => {
    return (
      <>
        <div className={classes.cart__backdrop} />
        <Card className={classes.cart}>
          <h4>Sushi</h4>
          <div className={classes.cart_mealPrice}>
            <h2>Total Amount</h2>
            <h2>12.99</h2>
          </div>
          <div className={classes.cart_buttons}>
            <Button className={classes.closeButton} name="Close" />
            <Button className={classes.orderButton} name="Order" />
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
