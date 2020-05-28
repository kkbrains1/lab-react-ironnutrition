import React, { Component } from 'react';
import './App.scss';
// eslint-disable-next-line
import meals from './meals';
import Mealbox from './components/Mealbox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: [...meals]
    };
    console.log(this.state.meals);
  }

  render() {
    return (
      <div>
        {this.state.meals.map(meal => (
          <Mealbox key={meal.name} {...meal} />
        ))}
      </div>
    );
  }
}

export default App;
