import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { getCookie } from "./cookie";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getCookie("access_token") ? (
        <Component {...props} />
      ) : (
        <Navigate
          replace
          to={{
            pathname: "/signin",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
export default PrivateRoute;
