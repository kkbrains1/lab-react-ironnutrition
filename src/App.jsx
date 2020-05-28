import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import meals from './meals';
import Mealbox from './components/Mealbox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: [...meals]
    };
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="header">IronNutrition</h1>
        </Jumbotron>
        <Row>
          <Col >
            {this.state.meals.map(meal => (
              <Mealbox key={meal.name} {...meal} />
            ))}
          </Col>
          <Col>
             <h3>something</h3>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
