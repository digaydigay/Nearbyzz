import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export default function Privateroutes({ component: Component, ...rest }) {
  const { currentuser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentuser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signup" }} />
        );
      }}
    />
  );
}
