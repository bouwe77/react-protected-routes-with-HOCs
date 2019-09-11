import React from "react";
import { withRouter, Link } from "react-router-dom";
import AuthHelperMethods from "./AuthHelperMethods.js";

const AuthButton = withRouter(({ history }) => {
  const Auth = new AuthHelperMethods();
  return Auth.loggedIn() ? (
    <p>
      <button
        onClick={() => {
          Auth.logout();
          history.push("/");
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>
      Please sign in <Link to="/login">here</Link>.
    </p>
  );
});

export default AuthButton;
