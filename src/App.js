import React from 'react';

import Navbar from './components/Layout/Navbar/Navbar';
import Summary from './components/Layout/Summary/Summary';
import MealList from './components/Meals/MealList/MealList';
import CartModal from './components/Cart/CartModal';

function App() {
  return (
    <>

      <Navbar />
      <CartModal/>
      <Summary />
      <MealList />
    </>
  );
}

export default App;
