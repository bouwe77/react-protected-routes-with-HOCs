import React, { Component } from "react";

import AuthHelperMethods from "./AuthHelperMethods.js";

class Login extends Component {
  Auth = new AuthHelperMethods(); // instantiating the method helper class

  handleSubmit = event => {
    event.preventDefault();
    this.Auth.login();
    this.props.history.replace("/");
  };

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }

  render() {
    return (
      <>
        <h5>Please login first</h5>
        <form onSubmit={this.handleSubmit}>
          <div>
            Username
            <input type="text" value="bouwe" />
          </div>
          <div>
            Password
            <input type="password" value="password" />
          </div>
          <div>
            <button type="submit">OK</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
