import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiAuth } from "../utils/api";
import { useAuth } from "../utils/context";
import {
  Container,
  Row,
  Column,
  FormGroup,
  Label,
  Input,
  Button,
} from "../components";

export function Register() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { auth, setAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push("/profile");
    }
  }, []);

  function _handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function _handleSubmit(event) {
    event.preventDefault();
    const { username, password } = state;

    apiAuth
      .register(username, password)
      .then((token) => {
        setAuth({ ...auth, token });
        setTimeout(() => {
          history.push("/profile");
        })
      })
      .catch((err) => {
        // Choose your error notification
        // console.log("err", err);
      });
  }

  return (
    <Container className="mt-5">
      <Row>
        <Column className="col-md-6 offset-md-3">
          <h1 className="mb-4">Register</h1>
          <form onSubmit={_handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="username"
                value={state.username}
                onChange={_handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={state.password}
                onChange={_handleChange}
              />
            </FormGroup>
            <FormGroup className="text-right">
              <Button className="btn-primary">Register</Button>
            </FormGroup>
          </form>
        </Column>
      </Row>
    </Container>
  );
}
