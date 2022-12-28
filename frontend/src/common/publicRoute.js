import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { getCookie } from "./cookie";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} element={<Component />} />
);
export default PublicRoute;
