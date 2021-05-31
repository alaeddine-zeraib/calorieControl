import React from 'react';
import Food from './components/Food';
import FoodBag from './components/FoodBag';
import Stats from './components/Stats';
import Calories from './components/Calories';

const App = () => {
    return (
      <div className="container">
          <div className="header">
            <h1 className="text-center">Calorie Control</h1>
            <p className="text-center">
              For people wishing to get meals to maintain <br></br>their good health and weight stable.
            </p>
          </div>
        <Calories />
        <div className="row">
          <Food />
          <FoodBag />
          <Stats />
        </div>
      </div>
    );
}

export default App;
