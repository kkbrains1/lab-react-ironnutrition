import React from 'react';
/* import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'; */
// eslint-disable-next-line
import { Button, Row, Card, Form, Media } from 'react-bootstrap';

const Mealbox = props => {
  return (
    <Media>
      <img
        style={{ maxWidth: '10em' }}
        className="img-thumbnail mr-3 mw-25 border-0"
        src={props.image}
        alt="food item"
      />
      <Media.Body className="media-body align-self-center">
        <h5 className="mt-0 mb-1">{props.name}</h5>
        <p>{props.calories} cal</p>
      </Media.Body>
      <Form className="row align-self-center">
        <Form.Control className="form-control col-9" type="number" value="1" />
        <Button className="btn btn-primary col-3" type="submit">
          +
        </Button>
      </Form>
    </Media>
  );
};

export default Mealbox;
