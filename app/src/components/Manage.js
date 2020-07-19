import React from "react";
import CMS from "./CMS";
import PropTypes from "prop-types";

const Manage = ({ content }) => (
  <div>
    <h1>Manage Content:</h1>
    <CMS content={content} />
  </div>
);

Manage.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Manage;
