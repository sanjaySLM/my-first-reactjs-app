import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import "./signup.sass";

class Signup extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div className="Login">
        <Form>
        <Form.Group controlId="formBasicname">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your number" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formconfirmPassword">
            <Form.Label>Confirm your Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" type="submit">
              Singup
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Signup;
