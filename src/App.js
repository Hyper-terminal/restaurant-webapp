import React, { useState } from 'react';

import Navbar from './components/Layout/Navbar/Navbar';
import Summary from './components/Layout/Summary/Summary';
import MealList from './components/Meals/MealList/MealList';
import CartModal from './components/Cart/CartModal';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <CartModal onhideCart={hideCartHandler}/>}
      <Navbar onShowCart={showCartHandler} />
      <Summary />
      <MealList />
    </>
  );
}

export default App;
