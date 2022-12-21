import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constrant";
import { Navigate, useLocation } from "react-router-dom";

const OAuth2RedirectHandler = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const location = useLocation().search;
  console.log(location);
  const getUrlParameter = (name, location) => {
    name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec();
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

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
