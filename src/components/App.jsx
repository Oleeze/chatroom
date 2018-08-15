import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello React is working</p>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
