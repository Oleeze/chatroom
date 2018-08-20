import React, { Component } from "react";
import ReactDOM from "react-dom";
import RoomList from "./RoomList.jsx";
import CreateRoom from "./CreateRoom.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello React is working</p>
        <RoomList />
        <CreateRoom />
      </div>
    );
  }
}

export default App;
