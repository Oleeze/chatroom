import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Room from "./Room.jsx";

const FEED_QUERY = gql`
  {
    feed {
      rooms {
        room
      }
      count
    }
  }
`;

class RoomList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const roomsToRender = data.feed.rooms;
          return (
            <div>
              {roomsToRender.map(room => (
                <Room name={room} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default RoomList;
