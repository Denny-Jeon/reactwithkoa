import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyleWrapper } from "../StyleWrapper";

const TimelineItemIcon = ({ icon, children }) => (
  <StyleWrapper component="span" className="time">
    <FontAwesomeIcon icon={icon} />
    {children}
  </StyleWrapper>
);


TimelineItemIcon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  children: PropTypes.node,
};

TimelineItemIcon.defaultProps = {
  children: null,
};

export default TimelineItemIcon;
