import React from "react";
import PropTypes from "prop-types";
import { StyleWrapper } from "../StyleWrapper";

const TimelineItem = ({ bgColor, children }) => (
  <StyleWrapper>
    <i className={`fa ${bgColor}`} />
    <StyleWrapper className="timeline-item">
      {children}
    </StyleWrapper>
  </StyleWrapper>
);


TimelineItem.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

TimelineItem.defaultProps = {
  bgColor: "bg-red",
  children: null,
};

export default TimelineItem;
