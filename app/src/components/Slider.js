import React from "react";

import Carousel from "react-elastic-carousel";

const Slider = ({ characters }) => (
  <Carousel>
    {characters.map((char) => (
      <div>
        <h2>{char.name}</h2>
        <img src={char.image} />
      </div>
    ))}
  </Carousel>
);

export default Slider;
