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
} from "../components/Login";
import "../pages/home/home.css";

export default function Register() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { auth, setAuth } = useAuth();
  const history = useHistory();

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
          history.push("/");
        })
      })
      .catch((err) => {
        // Choose your error notification
        // console.log("err", err);
      });
  }

  return (
    <Container className="mt-5">
      <Row className="login-row">
        <Column className="col-md-6 offset-md-3">
          <h1 className="mb-4"> </h1>
          <form onSubmit={_handleSubmit}>
          <FormGroup className="form-group-email">
              <Label><i class="fas fa-user"> :</i></Label>
              <Input
                type="text"
                name="username"
                value={state.username}
                onChange={_handleChange}
              />
            </FormGroup>
            <FormGroup className="form-group-password">
              <Label><i class="fas fa-sign-in-alt"> : </i></Label>
              <Input
                type="password"
                name="password"
                value={state.password}
                onChange={_handleChange}
              />
            </FormGroup>
            <FormGroup className="form-group-submit">
            <Button className="btn">REGISTER</Button>
            </FormGroup>
          </form>
        </Column>
      </Row>
    </Container>
  );
}

export { Register }