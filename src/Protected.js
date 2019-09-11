import React, { Component } from "react";
import withAuth from "./withAuth";

class Protected extends Component {
  render() {
    return (
      <>
        <h5>Members only</h5>
        Hello World :)
      </>
    );
  }
}

export default withAuth(Protected);
