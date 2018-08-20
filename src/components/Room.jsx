import React, { Component } from "react";

class Room extends Component {
  render() {
    return (
      <div>
        {this.props.name.room}
        Hello
      </div>
    );
  }
}

export default Room;
