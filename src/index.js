import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Protected from "./Protected";
import Login from "./Login";
import AuthButton from "./AuthButton";

function App() {
  return (
    <>
      <h1>My App</h1>
      <div>
        <BrowserRouter>
          <div>
            <AuthButton />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/public">Public</Link>
              </li>
              <li>
                <Link to="/protected">Members Only</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/public" component={Public} />
            <Route path="/protected" component={Protected} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <h5>Home</h5>Welcome to my app.
    </>
  );
}

function Public() {
  return (
    <>
      <h5>Public</h5>Everyone is allowed to view this page.
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
