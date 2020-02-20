import React from "react";
import PropTypes from "prop-types";
import { StyleWrapper } from "../StyleWrapper";

const TimelineItemHeader = ({ children }) => (
  <StyleWrapper component="h3" className="timeline-header">
    {children}
  </StyleWrapper>
);


TimelineItemHeader.propTypes = {
  children: PropTypes.node,
};

TimelineItemHeader.defaultProps = {
  children: null,
};

export default TimelineItemHeader;
