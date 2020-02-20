import React from "react";
import PropTypes from "prop-types";
import { StyleWrapper } from "../StyleWrapper";

const TimelineItemBody = ({ children }) => (
  <StyleWrapper className="timeline-body">
    {children}
  </StyleWrapper>
);


TimelineItemBody.propTypes = {
  children: PropTypes.node,
};

TimelineItemBody.defaultProps = {
  children: null,
};

export default TimelineItemBody;
