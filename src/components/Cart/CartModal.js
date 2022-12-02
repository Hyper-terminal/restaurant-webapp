import React from 'react';
import ReactDom from 'react-dom';
import Card from '../UI/Card/Card';
import classes from './CartModal.module.css';
import Button from '../UI/Button/Button';
import CartContext from '../../store/cart-context';

const CartModal = (props) => {
  const cartCtx = React.useContext(CartContext);

  let totalAmount = 0;
  cartCtx.items.forEach((item) => {
    totalAmount = totalAmount + item.quantity * item.price;
  });

  let itemMap = new Map();

  let filteredArray = cartCtx.items.filter((item) => {
    if (!itemMap.has(item.id)) {
      itemMap.set(item.id, item.id);
      return item;
    } else {
    }
  });

  const Cart = () => {
    return (
      <>
        <div onClick={props.onhideCart} className={classes.cart__backdrop} />
        <Card className={classes.cart}>
          <ul>
            {filteredArray.map((mealObj) => {
              return <li key={mealObj.id}>{mealObj.mealName}</li>;
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
