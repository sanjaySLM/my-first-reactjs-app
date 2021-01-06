import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import "./Login.sass";

class Login extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div className="Login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
