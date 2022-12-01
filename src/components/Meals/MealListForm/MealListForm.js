import React, { useContext } from 'react';
import Button from '../../UI/Button/Button';
import classes from './MealListForm.module.css';
import CartContext from '../../../store/cart-context';

const MealListForm = () => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    const count = event.target.meal_count.value;
  };

  return (
    <form onSubmit={addItemToCart} className={classes.form}>
      <label htmlFor="meal_count">Amount</label>
      <input type="number" name="meal_count" min="1" />
      <Button name="+Add" type="submit" />
    </form>
  );
};

export default MealListForm;
