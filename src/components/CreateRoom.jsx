import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import "./CreateRoom.scss";

const POST_MUTATION = gql`
  mutation PostMutation($room: String!) {
    makeRoom(room: $room) {
      id
      room
    }
  }
`;

class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: ""
    };
  }
  render() {
    const { room } = this.state;
    return (
      <div className="CreateRoomWrapper">
        <div className="RoomInside">
          <input
            value={room}
            type="Text"
            placeholder="Create a new room"
            onChange={e => this.setState({ room: e.target.value })}
          />

          <Mutation
            mutation={POST_MUTATION}
            variables={{ room }}
            onCompleted={() => this.props.history.push("/lobby")}
          >
            {postMutation => <button onClick={postMutation}>Submit</button>}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default CreateRoom;
