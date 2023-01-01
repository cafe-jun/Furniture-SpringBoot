import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./oAuth2RedrectUrl";
import { Navigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getCookie, setCookie } from "../../../common/util/cookie";

const OAuth2RedirectHandler = () => {
  const location = useLocation().search;
  useEffect(() => {
    const { token } = queryString.parse(location);
    console.log(token);
    if (token) {
      setCookie(ACCESS_TOKEN, token as string, { path: "/" });
    }
  }, []);

  return getCookie(ACCESS_TOKEN) ? (
    <Navigate replace to="/" />
  ) : (
    <Navigate replace to="/auth/sign_in" />
  );
};

export default OAuth2RedirectHandler;
