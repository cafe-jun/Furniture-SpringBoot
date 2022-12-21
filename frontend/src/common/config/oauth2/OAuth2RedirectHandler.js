import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constrant";
import { Navigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getCookie, setCookie } from "../../cookie";

const OAuth2RedirectHandler = () => {
  const location = useLocation().search;
  // const getUrlParameter = (name, location) => {
  //   name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
  //   const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  //   const results = regex.exec();
  //   return results === null
  //     ? ""
  //     : decodeURIComponent(results[1].replace(/\+/g, " "));
  // };
  console.log(getCookie(ACCESS_TOKEN));
  useEffect(() => {
    const { token } = queryString.parse(location);
    if (token) {
      setCookie(ACCESS_TOKEN, token, { path: "/" });
    }
  }, []);

  return getCookie(ACCESS_TOKEN) ? (
    <Navigate replace to="/" />
  ) : (
    <Navigate replace to="/login" />
  );
};

export default OAuth2RedirectHandler;
