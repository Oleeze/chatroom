import React, { Component } from "react";
import RoomList from "./RoomList.jsx";
import CreateRoom from "./CreateRoom.jsx";
import Header from "./Header.jsx";
import { Switch, Route } from "react-router-dom";
import Login from "./Login.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={RoomList} />
            <Route exact path="/create" component={CreateRoom} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
