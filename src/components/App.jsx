import React, { Component } from "react";
import Lobby from "./Lobby.jsx";
import CreateRoom from "./CreateRoom.jsx";
import Header from "./Header.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login.jsx";
import { AUTH_TOKEN } from "../constants";

import "./App.scss";

class App extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="Body">
        {/* <Header /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              authToken ? <Redirect to="/lobby" /> : <Redirect to="/login" />
            }
          />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={CreateRoom} />
        </Switch>
      </div>
    );
  }
}

export default App;
//lato
