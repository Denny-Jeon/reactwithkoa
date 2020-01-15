// HandleView.js
import React from "react";
// prop-types import
import PropTypes from "prop-types";

const HandleView = ({ handleIncrease }) => (
  <button type="button" onClick={handleIncrease}>+</button>
);

// 타입체킹 추가
HandleView.propTypes = {
  handleIncrease: PropTypes.func.isRequired,
};

export default HandleView;
