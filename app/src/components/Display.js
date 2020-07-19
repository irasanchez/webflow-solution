import React from "react";
import Slider from "./Slider";
import PropTypes from "prop-types";

const Display = ({ characters }) => {
  return (
    <div>
      <h1>Slider Demo:</h1>
      <Slider characters={characters} />
    </div>
  );
};

Display.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Display;
