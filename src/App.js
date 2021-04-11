import React, { Component } from 'react';
import Food from './components/Food';
import ShoppingBag from './components/ShoppingBag';
import Stats from './components/Stats';
import Calories from './components/Calories';

class App extends Component {
  render() {
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
          <ShoppingBag />
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
