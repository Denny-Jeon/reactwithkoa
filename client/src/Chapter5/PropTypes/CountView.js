// CountView.js

import React from "react";
// prop-types import
import PropTypes from "prop-types";

const CountView = ({ count, hello, jsx }) => (
  <>
    <div>{`${hello} ${jsx}`}</div>
    <div>{ count } </div>
  </>
);

// 타입체킹 추가
CountView.propTypes = {
  count: PropTypes.number.isRequired,
  hello: PropTypes.string,
  jsx: PropTypes.string,
};

// 디폴트 값 추가
CountView.defaultProps = {
  hello: "",
  jsx: "JSX",
};

export default CountView;
