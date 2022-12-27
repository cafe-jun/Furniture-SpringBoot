import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constrant";
import { Navigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getCookie, setCookie } from "../../cookie";

const OAuth2RedirectHandler = () => {
  const location = useLocation().search;
  useEffect(() => {
    const { token } = queryString.parse(location);
    if (token) {
      setCookie(ACCESS_TOKEN, token, { path: "/" });
    }
  }, []);

  return getCookie(ACCESS_TOKEN) ? (
    <Navigate replace to="/" />
  ) : (
    <Navigate replace to="/signin" />
  );
};

export default OAuth2RedirectHandler;
