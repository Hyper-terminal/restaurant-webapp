import React from 'react';

import Card from '../../UI/Card/Card';
import classes from './Summary.module.css';
import mealImage from '../../../assets/meal.jpg';

const Summary = () => {
  return (
    <>
      <div className={classes.container}>
        <img
          src={mealImage}
          alt="A table full of delicious food"
        />
      </div>
      <Card className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selectioin of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </>
  );
};
export default Summary;
