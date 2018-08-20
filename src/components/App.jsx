import React, { Component } from "react";
import ReactDOM from "react-dom";
import RoomList from "./RoomList.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello React is working</p>
        <RoomList />
      </div>
    );
  }
}

export default App;
