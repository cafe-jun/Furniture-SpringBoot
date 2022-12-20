import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constrant";
import { Navigate } from "react-router-dom";

const OAuth2RedirectHandler = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const getUrlParameter = (name) => {
    name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  useEffect(() => {
    setToken(getUrlParameter("token"));
    setError(getUrlParameter("error"));
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      localStorage.setItem(REFRESH_TOKEN, null);
    }
  }, []);
  return token ? (
    <Navigate replace to="/" />
  ) : (
    <Navigate
      replace
      to={{
        to: "/login",
      }}
    />
  );
};

export default OAuth2RedirectHandler;
