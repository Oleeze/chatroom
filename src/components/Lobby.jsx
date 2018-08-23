import React, { Component } from "react";
import RoomList from "./RoomList.jsx";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants";
import CreateRoom from "./CreateRoom.jsx";
import "./Lobby.scss";
class Lobby extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="LobbyWrapper">
        <div className="LobbyHeader">
          <div className="LobbyHeaderInside">
            <div className="LobbyHeaderLeft">
              <nav>
                <div />
                <div />
                <div />
              </nav>
              <img src="/chatlogo.png" width="30" height="30" />
            </div>
          </div>
          <div className="LobbyHeaderInside">
            <div className="LobbyHeaderRight">
              <h4>Oleg Rudenko</h4>

              <div
                className="Logout"
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  this.props.history.push(`/`);
                }}
              >
                <h4>logout</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="CreateRoom">
          <div className="HeaderLeft">
            <h4>Current Lobby: Main Lobby</h4>
          </div>
          <div className="HeaderRight">
            <CreateRoom />
          </div>
        </div>
        <div className="Lobbys">
          <h1>Lobbys</h1>
          <RoomList />
        </div>
      </div>
    );
  }
}

export default Lobby;
