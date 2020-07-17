import React from "react";
import logo from "./logo.svg";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "./App.css";
// FF6382 pink and black

const GET_PHOTOS = gql`
  query Photos($id: ID = 5) {
    photo(id: $id) {
      album {
        id
        photos {
          data {
            url
          }
        }
      }
    }
  }
`;

function App() {
  console.log(GET_PHOTOS.definitions[0].selectionSet.selections[0]);
  return (
    <Query query={GET_PHOTOS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        const photos = data.photo.album.photos.data;
        return <div className="App">{JSON.stringify(photos)}</div>;
      }}
    </Query>
  );
}

export default App;
