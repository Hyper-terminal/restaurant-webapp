import React from 'react';
import MealListForm from '../MealListForm/MealListForm';
import Card from '../../UI/Card/Card';
import './MealList.css';

const DUMMY_LIST = [
  {
    id: 1,
    mealName: 'Sushi',
    description: 'Finest Fish and veggies',
    price: 22.99,
  },
  {
    id: 2,
    mealName: 'Schnitzel',
    description: 'A german speciality',
    price: 16.5,
  },
  {
    id: 3,
    mealName: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
];

const MealList = () => {
  return (
    <Card className="meal-list__card">
      {DUMMY_LIST.map((meal) => {
        return (
          <div key={meal.id}>
            <div className="meal-list__container">
              <div className="meal-list__details">
                <h3>{meal.mealName}</h3>
                <p>
                  <em>{meal.description}</em>
                </p>
                <h2 className="meal-list__price">${meal.price}</h2>
              </div>
              <MealListForm item={meal} />
            </div>
            <hr className="meal-list__break" />
          </div>
        );
      })}
    </Card>
  );
};

export default MealList;
