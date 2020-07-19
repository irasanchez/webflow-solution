import React from "react";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

const Slider = ({ characters }) => (
  <Carousel>
    {characters.map((char) => (
      <div key={char.id}>
        <h2>{char.name}</h2>
        <img src={char.image} />
      </div>
    ))}
  </Carousel>
);

Slider.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Slider;
