import React, { Component } from "react";

class LoginHeader extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">
          <img src="/chatlogo.png" height="80" width="80" />
        </div>
        <div className="TitleRight">
          <h1>CHATTERCAT</h1>
          <p>Keep in thouch with friends</p>
        </div>
      </div>
    );
  }
}

export default LoginHeader;
