import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import CMS from "./components/CMS";
import Slider from "./components/Slider";
import "./App.css";
// FF6382 pink and black

const GET_CHARS = gql`
  {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function App() {
  return (
    <Query query={GET_CHARS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :( {error}</div>;

        return (
          <div className="App">
            <CMS />
            <Slider characters={data.characters.results} />
          </div>
        );
      }}
    </Query>
  );
}

export default App;
