import React from 'react';
import ReactDom from 'react-dom';
import Card from '../UI/Card/Card';
import classes from './CartModal.module.css';
import Button from '../UI/Button/Button';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem.js';

const CartModal = (props) => {
  const cartCtx = React.useContext(CartContext);

  const Cart = () => {
    return (
      <>
        <div onClick={props.onhideCart} className={classes.cart__backdrop} />
        <Card className={classes.cart}>
          <ul>
            {cartCtx.items.map((mealObj) => {
              return (
                <CartItem
                  key={mealObj.id}
                  name={mealObj.mealName}
                  price={mealObj.price}
                  qty={mealObj.quantity}
                />
              );
            })}
          </ul>
          <div className={classes.cart_mealPrice}>
            <h2>Total Amount</h2>
            <h2>${cartCtx.totalAmount}</h2>
          </div>
          <div className={classes.cart_buttons}>
            <Button
              className={classes.closeButton}
              onClick={props.onhideCart}
              name="Close"
            />
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
