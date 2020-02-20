import React from "react";
import PropTypes from "prop-types";
import { StyleWrapper } from "../StyleWrapper";


const Timeline = ({ bgColor, label, children }) => (
  <StyleWrapper className="timeline">
    <StyleWrapper className="time-label">
      <StyleWrapper component="span" className={bgColor}>{label}</StyleWrapper>
    </StyleWrapper>
    {children}
  </StyleWrapper>
);

Timeline.propTypes = {
  bgColor: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};

Timeline.defaultProps = {
  bgColor: "bg-red",
  label: "타임라인",
  children: null,
};

export default Timeline;
