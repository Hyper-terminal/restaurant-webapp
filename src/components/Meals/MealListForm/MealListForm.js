import React, { useState, useContext } from 'react';
import Button from '../../UI/Button/Button';
import classes from './MealListForm.module.css';
import CartContext from '../../../store/cart-context';

const MealListForm = (props) => {
  const [itemQty, setItemQty] = useState(1);
  const cartCtx = useContext(CartContext);

  const itemQtyHandler = (event) => {
    const newQty = event.target.value;
    setItemQty(newQty);
  };

  const addItemToCart = (event) => {
    event.preventDefault();

    let quantity = event.target.meal_count.value;

    cartCtx.addItem({ ...props.item, quantity: quantity });

    setItemQty(1);
  };

  return (
    <form onSubmit={addItemToCart} className={classes.form}>
      <label htmlFor="meal_count">Amount</label>
      <input
        type="number"
        name="meal_count"
        min="1"
        value={itemQty}
        onChange={itemQtyHandler}
      />
      <Button name="+Add" type="submit" />
    </form>
  );
};

export default MealListForm;
