import React, { useState, useEffect } from "react";
import Manage from "./components/Manage";
import Display from "./components/Display";
import { Grid } from "@material-ui/core";
import { request } from "graphql-request";

// FF6382 pink and black

const query = `
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
  const [data, setData] = useState([]);

  const getData = () => {
    request("https://rickandmortyapi.com/graphql", query)
      .then((data) => setData(data.characters.results))
      .catch((error) => console.log(error));
  };

  useEffect(getData, []);

  return (
    <div className="App">
      <Grid container>
        <Manage content={data} />
        <Display characters={data} />
      </Grid>
    </div>
  );
}

export default App;
