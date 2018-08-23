import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Room from "./Room.jsx";

const NEW_LINKS_SUBSCRIPTION = gql`
  subscription {
    newRoom {
      node {
        id
        room
      }
    }
  }
`;

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
  _subscribeToNewLinks = subscribeToMore => {
    subscribeToMore({
      document: NEW_LINKS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newLink = subscriptionData.data.newLink.node;

        return Object.assign({}, prev, {
          feed: {
            links: [newLink, ...prev.feed.links],
            count: prev.feed.links.length + 1,
            __typename: prev.feed.__typename
          }
        });
      }
    });
  };

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          this._subscribeToNewLinks(subscribeToMore);

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
