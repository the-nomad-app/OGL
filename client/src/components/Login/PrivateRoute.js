import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../utils/context";

export function PrivateRoute(props) {
  const { component: Component, ...rest } = props;
  const { auth } = useAuth();

  const render = (props) => {
    if (!auth) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
}

