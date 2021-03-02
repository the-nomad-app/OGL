import React, { useState, useEffect } from "react";
import { apiAuth, apiUsers } from "../utils/api";
import { useAuth } from "../utils/context";
import { Container, Row, Column } from "../components";

export function Profile() {
  const [state, setState] = useState({
    user: null,
  });

  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth?.user) {
      setState({ ...state, user: auth.user });
    } else {
      apiUsers
        .getProfile()
        .then((res) => {
          if (res.data._id) {
            // For local read/update/delete
            setState({ ...state, user: res.data });
            // For local auth context
            setAuth({ ...auth, user: res.data });
            // For persistent auth
            apiAuth.setAuth({ ...auth, user: res.data });
          }
        })
        .catch((err) => {
          // Choose your error notification
          // console.log("err", err);
        });
    }
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Column>
          <h1>Profile</h1>
          {state.user && <p>Welcome {state.user.username}</p>}
        </Column>
      </Row>
    </Container>
  );
}
