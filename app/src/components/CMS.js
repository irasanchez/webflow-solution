import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

const CMS = ({ content }) => {
  return (
    <>
      {content.map((char) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{char.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{char.image}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

CMS.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default CMS;
