import React from "react";
import PropTypes from "prop-types";
import { StyleWrapper } from "../StyleWrapper";

const TimelineItemFooter = ({ children }) => (
  <StyleWrapper className="timeline-footer">
    {children}
  </StyleWrapper>
);


TimelineItemFooter.propTypes = {
  children: PropTypes.node,
};

TimelineItemFooter.defaultProps = {
  children: null,
};

export default TimelineItemFooter;
